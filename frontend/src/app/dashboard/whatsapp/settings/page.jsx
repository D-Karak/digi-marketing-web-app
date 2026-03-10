"use client";
import React from 'react';
import Topbar from '../../../../components/dashboard/Topbar';
import SettingsPage from '../../../../components/dashboard/whatsapp/SettingsPage';

export default function WhatsAppSettingsPage() {
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden bg-light">
            <Topbar />

            <main className="flex-1 overflow-auto p-8 custom-scrollbar">
                <SettingsPage />
            </main>
        </div>
    );
}
