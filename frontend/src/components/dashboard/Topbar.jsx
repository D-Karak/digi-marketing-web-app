import { Bell, Wallet, ShoppingCart } from 'lucide-react';

export default function Topbar() {
    return (
        <div className="flex justify-between items-center w-full px-8 py-6 bg-light shrink-0">
            <div>
                <h1 className="text-2xl font-black tracking-tight text-dark mb-1">Dashboard</h1>
                <p className="text-sm font-medium text-gray-400">Overview</p>
            </div>

            <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-white border border-light-border/50 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Bell className="w-5 h-5 text-dark" strokeWidth={2} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-light-border/50 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Wallet className="w-5 h-5 text-dark" strokeWidth={2} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-light-border/50 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <ShoppingCart className="w-5 h-5 text-dark" strokeWidth={2} />
                </button>
            </div>
        </div>
    );
}
