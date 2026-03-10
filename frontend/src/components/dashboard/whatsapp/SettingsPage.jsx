import React, { useState } from 'react';
import ConnectionTabs from './ConnectionTabs';
import WWebJSConnection from './WWebJSConnection';
import CloudAPIConnection from './CloudAPIConnection';
import { ShieldCheck, Info } from 'lucide-react';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('WWEB');

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-dark mb-2">WhatsApp Connection</h1>
                    <p className="text-gray-500">
                        Choose how you want to connect your WhatsApp account. You can either use your personal/business number via QR code, or use the Official Meta Cloud API for high-volume sending.
                    </p>
                </div>

                {/* Connection Alert */}
                <div className="flex gap-3 bg-blue-50/50 border border-blue-100 p-4 rounded-xl mb-8">
                    <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-semibold text-blue-900 mb-1">Which one should I choose?</h4>
                        <p className="text-sm text-blue-700/80">
                            <strong>QR Code (Free):</strong> Best for small teams. Uses your phone to relay messages. No Meta approval needed.<br />
                            <strong>Cloud API (Official):</strong> Best for high-volume broadcasts. Requires Meta Business verification and message templates.
                        </p>
                    </div>
                </div>

                <ConnectionTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="mt-8 transition-all duration-300">
                    {activeTab === 'WWEB' ? <WWebJSConnection /> : <CloudAPIConnection />}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Your connection details are encrypted and securely stored.</span>
                </div>
            </div>
        </div>
    );
}
