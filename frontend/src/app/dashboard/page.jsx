"use client";
import { useAuth } from '../../lib/firebase/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    return (
        <div className="p-8">
            <div className="bg-white p-6 rounded-4xl shadow-xl shadow-light-border/50 border border-light-border">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-light-border">
                    <div>
                        <h1 className="text-3xl font-extrabold text-dark tracking-tight">Overview</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Welcome back, <span className="font-medium text-dark">{user?.email}</span>
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-5 py-2.5 btn-outline text-sm"
                    >
                        Log Out
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-primary/10 p-6 rounded-4xl border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
                        <h3 className="text-lg font-bold text-dark mb-2">WhatsApp Campaigns</h3>
                        <p className="text-primary text-sm font-medium">0 active campaigns</p>
                    </div>
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors cursor-pointer">
                        <h3 className="text-lg font-bold text-blue-900 mb-2">Email Outreach</h3>
                        <p className="text-blue-700 text-sm font-medium">0 active sequences</p>
                    </div>
                    <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 hover:bg-purple-50 transition-colors cursor-pointer">
                        <h3 className="text-lg font-bold text-purple-900 mb-2">Social Posts</h3>
                        <p className="text-purple-700 text-sm font-medium">0 scheduled posts</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
