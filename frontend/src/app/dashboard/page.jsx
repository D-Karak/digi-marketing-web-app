"use client";
import React from 'react';
import Topbar from '../../components/dashboard/Topbar';
import {
    Search,
    ArrowRight,
    Wallet,
    Instagram,
    Send,
} from 'lucide-react';

export default function DashboardPage() {
    const getPlatformIcon = (platform) => {
        if (platform === 'Instagram') {
            return <div className="w-8 h-8 rounded-full bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white"><Instagram className="w-4 h-4" /></div>;
        }
        return <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white"><Send className="w-4 h-4 ml-[-2px]" /></div>;
    };
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden bg-light">
            <Topbar />

            <main className="flex-1 overflow-auto p-8 custom-scrollbar">
                {/* Search and Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4 flex-1 max-w-2xl">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-white border border-gray-100 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none shadow-sm placeholder:text-gray-400 font-medium"
                            />
                        </div>
                        <button className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center shadow-md hover:bg-black transition-colors shrink-0">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-bold text-primary">{monthName[new Date().getMonth()]}</span>
                            <span className="text-sm font-bold text-dark text-center">{new Date().getFullYear()}</span>
                        </div>
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center font-bold text-2xl text-dark shadow-sm">
                            {new Date().getDate()}
                        </div>
                        <button className="bg-dark text-white px-6 py-3.5 rounded-full font-medium flex items-center gap-2 hover:bg-black transition-colors shadow-md">
                            <span className="text-xl leading-none mb-0.5">+</span> New Campaign
                        </button>
                    </div>
                </div>


            </main>
        </div>
    );
}
