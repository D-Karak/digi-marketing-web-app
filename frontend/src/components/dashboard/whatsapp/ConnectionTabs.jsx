import React from 'react';
import { QrCode, CloudLightning } from 'lucide-react';

export default function ConnectionTabs({ activeTab, setActiveTab }) {
    const tabs = [
        {
            id: 'WWEB',
            name: 'Link via QR Code',
            description: 'Free, Unofficial, Uses Phone',
            icon: QrCode,
            color: 'text-green-500',
            bgIcon: 'bg-green-50',
            activeClass: 'border-green-500 bg-green-50/20'
        },
        {
            id: 'CLOUD',
            name: 'Cloud API (Meta)',
            description: 'Official, High-Volume, Secure',
            icon: CloudLightning,
            color: 'text-blue-500',
            bgIcon: 'bg-blue-50',
            activeClass: 'border-blue-500 bg-blue-50/20'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-start text-left gap-4 p-5 rounded-xl border-2 transition-all duration-200 ${activeTab === tab.id
                            ? tab.activeClass
                            : 'border-gray-100 hover:border-gray-200 bg-white'
                        }`}
                >
                    <div className={`p-3 rounded-full shrink-0 ${tab.bgIcon} ${tab.color}`}>
                        <tab.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className={`font-bold text-lg mb-1 ${activeTab === tab.id ? 'text-dark' : 'text-gray-600'}`}>
                            {tab.name}
                        </h3>
                        <p className={`text-sm ${activeTab === tab.id ? 'text-gray-600' : 'text-gray-400'}`}>
                            {tab.description}
                        </p>
                    </div>
                </button>
            ))}
        </div>
    );
}
