const express = require('express');
const cors = require('cors');
const helmet = require('helmet').default;
const morgan = require('morgan');
require('dotenv').config();

// Catch unhandled Promise rejections from terminating the Node Server immediately
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection automatically caught:', reason);
});

// ==========================================
// 1. External Database Connection
// ==========================================
const connectDB = require('./src/config/databaseConnection');

// ==========================================
// 2. Clear API Route Maps
// ==========================================
const authSyncRoutes = require('./src/routes/authSyncRoutes');
const userProfileRoutes = require('./src/routes/userProfileRoutes');

// ==========================================
// 3. Error Handling Maps
// ==========================================
const { notFound, errorHandler } = require('./src/middlewares/globalErrorHandlers');

// Initialize App
const app = express();

// Connect MongoDB First
connectDB();

// Global Middlewares setup
app.use(express.json()); // Parses incoming HTTP bodies
app.use(helmet());       // Locks down standard security vulnerabilities
app.use(morgan('dev'));  // Cleans the terminal logs for visibility

// Allow frontend to communicate smoothly
app.use(cors({
    origin: ['http://localhost:3000', process.env.CLIENT_ORIGIN_URL].filter(url => !!url),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Route Definitions
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'API Structure is actively running!' });
});

// Explicit modular paths
app.use('/api/auth', authSyncRoutes);    // Handles /api/auth/sync
app.use('/api/users', userProfileRoutes); // Handles /api/users/profile/:uid

// Intercept bad requests correctly
app.use(notFound);
app.use(errorHandler);

// Boot up Node Server with Socket.io Attachments
const http = require('http');
const { Server } = require('socket.io');
const whatsappService = require('./src/services/whatsappService');

const server = http.createServer(app);

// Setup Socket.io
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000', process.env.CLIENT_ORIGIN_URL].filter(url => !!url),
        methods: ['GET', 'POST']
    }
});

// Pass instance to the service singleton
whatsappService.setSocket(io);

io.on('connection', (socket) => {
    console.log(`🔌 A new client dynamically hooked up: ${socket.id}`);

    // Request initial connection state natively tied to their ID
    socket.on('whatsapp_request_status', ({ userId }) => {
        if (userId) {
            socket.join(userId);
            socket.emit('whatsapp_status_update', whatsappService.getStatus(userId));
        }
    });

    // Listen for frontend commands dynamically tied to userId
    socket.on('whatsapp_generate_qr', ({ userId }) => {
        if (userId) whatsappService.init(userId);
    });

    socket.on('whatsapp_disconnect', ({ userId }) => {
        if (userId) whatsappService.disconnect(userId);
    });

    socket.on('disconnect', () => {
        console.log(`🔌 Client unhooked: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`🚀 Server safely listening locally on http://localhost:${PORT}`));
