import React, { useState, useEffect } from 'react';
import { Smartphone, RefreshCcw, Wifi, RefreshCw, QrCode } from 'lucide-react';
import QRCode from "react-qr-code";
import { io } from 'socket.io-client';
import { useAuth } from '../../../lib/firebase/AuthContext';

export default function WWebJSConnection() {
    const { user } = useAuth();
    const [status, setStatus] = useState('disconnected'); // 'disconnected', 'loading', 'qr_ready', 'connected'
    const [qrCode, setQrCode] = useState(null);
    const [deviceInfo, setDeviceInfo] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Stop if not logged in
        if (!user || !user.uid) return;

        // Connect to the Node Backend Socket
        const newSocket = io(process.env.NEXT_PUBLIC_BACKEND_SERVER || 'http://localhost:5000');
        setSocket(newSocket);

        // Tell the server which user this is for its Rooms logic
        newSocket.emit('whatsapp_request_status', { userId: user.uid });

        // Listen for the push data from the singleton Node service
        newSocket.on('whatsapp_status_update', (data) => {
            // console.log("WebSocket Recevied Status: ", data);
            if (data.status) setStatus(data.status);
            setQrCode(data.qrCode || null);
            setDeviceInfo(data.deviceInfo || null);
        });

        // Cleanup on component unmount
        return () => newSocket.disconnect();
    }, [user]);

    const handleGenerateQR = () => {
        if (socket && user?.uid) {
            setStatus('loading');
            socket.emit('whatsapp_generate_qr', { userId: user.uid });
        }
    };

    const handleDisconnect = () => {
        if (socket && user?.uid) {
            setStatus('loading');
            socket.emit('whatsapp_disconnect', { userId: user.uid });
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${status === 'connected' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}>
                        <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-dark">Link Device</h3>
                        <p className="text-sm text-gray-500">Scan QR code to connect your number</p>
                    </div>
                </div>

                {/* Status Badge */}
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 ${status === 'connected' ? 'bg-green-100 text-green-700' :
                    status === 'disconnected' ? 'bg-gray-100 text-gray-600' :
                        'bg-yellow-100 text-yellow-700 animate-pulse'
                    }`}>
                    {status === 'connected' && <Wifi className="w-3.5 h-3.5" />}
                    {status === 'disconnected' && <div className="w-2 h-2 rounded-full bg-gray-400"></div>}
                    {(status === 'loading' || status === 'qr_ready') && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}

                    {status === 'connected' ? 'Connected' :
                        status === 'disconnected' ? 'Not Connected' :
                            status === 'loading' ? 'Generating QR...' : 'Waiting for scan...'}
                </div>
            </div>

            <div className="p-8 flex flex-col items-center justify-center min-h-[300px]">
                {status === 'disconnected' && (
                    <div className="text-center max-w-sm">
                        <div className="w-24 h-24 bg-gray-50 rounded-2xl mx-auto mb-6 flex items-center justify-center border-2 border-dashed border-gray-200">
                            <QrCode className="w-8 h-8 text-gray-400" />
                        </div>
                        <h4 className="text-lg font-bold text-dark mb-2">Ready to connect</h4>
                        <p className="text-sm text-gray-500 mb-6">Click below to generate a unique QR code for your device to scan.</p>
                        <button
                            onClick={handleGenerateQR}
                            className="bg-dark text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors w-full flex items-center justify-center gap-2 shadow-md"
                        >
                            Generate QR Code
                        </button>
                    </div>
                )}

                {status === 'loading' && (
                    <div className="text-center max-w-sm flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-gray-100 border-t-dark rounded-full animate-spin mb-6"></div>
                        <p className="font-medium text-dark">Waking up the server...</p>
                        <p className="text-sm text-gray-400">This might take a few seconds.</p>
                    </div>
                )}

                {status === 'qr_ready' && (
                    <div className="text-center max-w-sm">
                        <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xl mb-6 mx-auto w-fit">
                            <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden p-2">
                                <QRCode value={qrCode || "mock_init"} size={192} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
                            </div>
                        </div>
                        <ol className="text-sm text-gray-600 text-left space-y-3 mb-6 bg-gray-50 p-4 rounded-xl">
                            <li className="flex gap-3"><span className="font-bold text-dark">1.</span> Open WhatsApp on your phone</li>
                            <li className="flex gap-3"><span className="font-bold text-dark">2.</span> Tap Menu/Settings and select "Linked Devices"</li>
                            <li className="flex gap-3"><span className="font-bold text-dark">3.</span> Tap "Link a Device" and scan this QR code</li>
                        </ol>
                        <button
                            onClick={handleGenerateQR}
                            className="text-gray-500 hover:text-dark px-6 py-2 rounded-full font-medium transition-colors text-sm flex items-center justify-center gap-2 mx-auto"
                        >
                            <RefreshCcw className="w-4 h-4" /> Generate New Code
                        </button>
                    </div>
                )}

                {status === 'connected' && (
                    <div className="text-center max-w-sm">
                        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <Wifi className="w-8 h-8 text-green-600" />
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">You're all set!</h4>
                        <p className="text-sm text-gray-500 mb-6 px-4">Your WhatsApp account is successfully connected and ready to send campaigns.</p>

                        {deviceInfo && (
                            <div className="bg-gray-50 rounded-xl p-4 mb-8 text-left border border-gray-100 flex flex-col gap-1">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Device Details</span>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-dark">{deviceInfo.pushname || 'WhatsApp User'}</span>
                                    {deviceInfo.platform && <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">{deviceInfo.platform}</span>}
                                </div>
                                <span className="text-sm font-medium text-gray-600 font-mono mt-1">
                                    {deviceInfo.wid?.user ? `+${deviceInfo.wid.user}` : 'Unknown Number'}
                                </span>
                            </div>
                        )}

                        <div className="space-y-3">
                            <button className="bg-primary text-white border-none px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors w-full shadow-md shadow-primary/20">
                                Send a Test Message
                            </button>
                            <button
                                onClick={handleDisconnect}
                                className="bg-red-50 text-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-100 transition-colors w-full"
                            >
                                Disconnect Device
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
