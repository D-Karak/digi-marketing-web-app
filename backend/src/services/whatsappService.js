const { Client, RemoteAuth } = require('whatsapp-web.js');
const { MongoStore } = require('wwebjs-mongo');
const mongoose = require('mongoose');

class WhatsAppService {
    static instance;

    constructor() {
        if (!WhatsAppService.instance) {
            // Map structure: { "userId": { client, status, qrCode, deviceInfo } }
            this.clients = new Map();
            this.io = null;
            WhatsAppService.instance = this;
        }

        return WhatsAppService.instance;
    }

    setSocket(io) {
        this.io = io;
    }

    // Helper to get or create a user's session record
    getSession(userId) {
        if (!this.clients.has(userId)) {
            this.clients.set(userId, {
                client: null,
                status: 'disconnected', // 'disconnected', 'loading', 'qr_ready', 'connected'
                qrCode: null,
                deviceInfo: null
            });
        }
        return this.clients.get(userId);
    }

    init(userId) {
        if (!userId) {
            console.error("Initiation failed: No userId provided to WhatsAppService");
            return;
        }

        let session = this.getSession(userId);

        if (session.client) {
            this.broadcastStatus(userId);
            return;
        }

        session.status = 'loading';
        this.broadcastStatus(userId);

        const store = new MongoStore({ mongoose: mongoose });

        // Uses a unique clientId so RemoteAuth saves isolated sessions per user in MongoDB
        session.client = new Client({
            authStrategy: new RemoteAuth({
                clientId: `user_${userId}`,
                store: store,
                backupSyncIntervalMs: 300000
            }),
            puppeteer: {
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-accelerated-2d-canvas', '--no-first-run', '--no-zygote', '--disable-gpu']
            }
        });

        session.client.on('remote_session_saved', () => {
            console.log(`☁️ Remote MongoDB Session gracefully synced for user: ${userId}`);
        });

        session.client.on('qr', (qr) => {
            session.qrCode = qr;
            session.status = 'qr_ready';
            this.broadcastStatus(userId);
        });

        session.client.on('auth_failure', msg => {
            session.status = 'disconnected';
            session.qrCode = null;
            this.broadcastStatus(userId);
        });

        session.client.on('ready', () => {
            session.status = 'connected';
            session.qrCode = null;
            session.deviceInfo = session.client.info ? {
                pushname: session.client.info.pushname,
                wid: session.client.info.wid,
                platform: session.client.info.platform
            } : null;
            this.broadcastStatus(userId);
        });

        session.client.on('disconnected', (reason) => {
            session.status = 'disconnected';
            session.client.destroy();
            session.client = null;
            session.qrCode = null;
            session.deviceInfo = null;
            this.broadcastStatus(userId);
        });

        session.client.initialize().catch(err => {
            session.status = 'disconnected';
            this.broadcastStatus(userId);
        });
    }

    disconnect(userId) {
        let session = this.getSession(userId);
        if (session.client) {
            session.client.logout().then(() => {
                session.client.destroy();
                session.client = null;
                session.status = 'disconnected';
                session.qrCode = null;
                session.deviceInfo = null;
                this.broadcastStatus(userId);
            });
        }
    }

    broadcastStatus(userId) {
        if (this.io) {
            let session = this.getSession(userId);
            // Emits exclusively to the specific user's socket room
            this.io.to(userId).emit('whatsapp_status_update', {
                status: session.status,
                qrCode: session.qrCode,
                deviceInfo: session.deviceInfo
            });
        }
    }

    getStatus(userId) {
        let session = this.getSession(userId);
        return {
            status: session.status,
            qrCode: session.qrCode,
            deviceInfo: session.deviceInfo
        };
    }
}

const instance = new WhatsAppService();
module.exports = instance;
