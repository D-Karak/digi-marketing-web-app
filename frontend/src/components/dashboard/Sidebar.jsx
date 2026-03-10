"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    ChevronRight,
    ChevronLeft,
    ChevronDown,
    LayoutDashboard,
    Mail,
    MessageCircle,
    Instagram,
    Settings,
    HelpCircle,
    LogOut
} from 'lucide-react';
import { useAuth } from '../../lib/firebase/AuthContext';
import { HERO_CONTENT } from '@/constants/content';

export default function Sidebar() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [expandedMenus, setExpandedMenus] = useState(['WhatsApp Marketing']);

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    const toggleSubMenu = (name) => {
        setExpandedMenus(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
        if (!sidebarOpen) setSidebarOpen(true);
    };

    const menuItems = [
        { name: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
        {
            name: 'WhatsApp Marketing',
            icon: MessageCircle,
            subItems: [
                { name: 'Dashboard', path: '/dashboard/whatsapp/overview' },
                { name: 'Bulk Campaigns', path: '/dashboard/whatsapp/campaigns' },
                { name: 'Template Manager', path: '/dashboard/whatsapp/templates' },
                { name: 'Contacts & Segments', path: '/dashboard/whatsapp/contacts' },
                { name: 'Connection Settings', path: '/dashboard/whatsapp/settings' }
            ]
        },
        { name: 'Email Marketing', icon: Mail, path: '/dashboard/email' },
        { name: 'Social Media Marketing', icon: Instagram, path: '/dashboard/social' },
        { name: 'Account Setting', icon: Settings, path: '/dashboard/settings' },
        { name: 'Support', icon: HelpCircle, path: '/dashboard/support' },
    ];

    return (
        <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} shrink-0 bg-white h-screen border-r border-light-border flex flex-col pt-8 pb-6 sticky top-0 transition-all duration-300 overflow-hidden`}>
            {/* Logo area */}
            <div className={`flex items-center mb-8 px-4 min-h-[40px] ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
                <span className={`font-extrabold text-xl text-dark tracking-tight whitespace-nowrap overflow-hidden transition-all duration-300 ${sidebarOpen ? 'w-auto opacity-100 pr-2' : 'w-0 opacity-0'}`}>
                    {HERO_CONTENT.tagline}
                </span>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="bg-light p-1.5 rounded-full hover:bg-gray-200 transition-colors shrink-0"
                >
                    {sidebarOpen ? (
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                    ) : (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                    )}
                </button>
            </div>

            {/* Profile area */}
            <div className="px-4 mb-8">
                <div className={`flex items-center cursor-pointer group transition-all duration-300 ${sidebarOpen ? 'gap-3' : 'justify-center gap-0'}`}>
                    <div className="w-10 h-10 rounded-full border border-gray-200 bg-primary/10 overflow-hidden shrink-0 flex items-center justify-center text-primary font-bold">
                        {user?.email?.[0]?.toUpperCase() || 'J'}
                    </div>

                    {/* The width trick here allows smooth closing of the text */}
                    <div className={`flex items-center transition-all duration-300 overflow-hidden whitespace-nowrap ${sidebarOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}`}>
                        <div className="flex-1 min-w-0 pr-2">
                            <p className="font-bold text-sm text-dark truncate">{user?.displayName || 'Jenny Wilson'}</p>
                            <p className="text-xs text-gray-500 truncate">{user?.email || 'Jenny Wilson'}</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors shrink-0" />
                    </div>
                </div>
            </div>

            {/* Menu Label */}
            <div className={`px-4 mb-4 transition-all duration-300 select-none ${sidebarOpen ? 'opacity-100 text-left' : 'opacity-0'}`}>
                <span className="text-xs text-gray-400 font-medium tracking-wide">Menu</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 space-y-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                {menuItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = item.path ? pathname === item.path : item.subItems?.some(s => pathname.startsWith(s.path));
                    const isExpanded = expandedMenus.includes(item.name);

                    return (
                        <div key={idx} className="mb-1">
                            {item.subItems ? (
                                <button
                                    onClick={() => toggleSubMenu(item.name)}
                                    className={`w-full flex items-center px-3 py-3 rounded-2xl cursor-pointer transition-all duration-200 ${isActive ? 'bg-primary/5 text-primary font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-dark'} ${sidebarOpen ? 'justify-between' : 'justify-center mx-auto w-12'}`}
                                    title={!sidebarOpen ? item.name : ""}
                                >
                                    <div className={`flex items-center min-w-max transition-all duration-300 ${sidebarOpen ? 'gap-4' : 'gap-0'}`}>
                                        <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                                        <span className={`transition-all duration-300 font-medium whitespace-nowrap ${sidebarOpen ? 'w-auto opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                                            {item.name}
                                        </span>
                                    </div>
                                    {sidebarOpen && (
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-primary' : 'text-gray-400'} ${isExpanded ? 'rotate-180' : ''}`} />
                                    )}
                                </button>
                            ) : (
                                <Link
                                    href={item.path}
                                    className={`flex items-center px-3 py-3 rounded-2xl cursor-pointer transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-dark'} ${sidebarOpen ? 'justify-between' : 'justify-center mx-auto w-12'}`}
                                    title={!sidebarOpen ? item.name : ""}
                                >
                                    <div className={`flex items-center min-w-max transition-all duration-300 ${sidebarOpen ? 'gap-4' : 'gap-0'}`}>
                                        <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                                        <span className={`transition-all duration-300 font-medium whitespace-nowrap ${sidebarOpen ? 'w-auto opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                                            {item.name}
                                        </span>
                                    </div>
                                </Link>
                            )}

                            {/* SubMenu rendering */}
                            {item.subItems && (
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded && sidebarOpen ? 'max-h-64 mt-2 mb-3' : 'max-h-0'}`}
                                >
                                    <div className="pl-11 pr-3 flex flex-col gap-1 relative before:content-[''] before:absolute before:left-6 before:top-0 before:bottom-3 before:w-px before:bg-gray-200">
                                        {item.subItems.map((sub, sIdx) => {
                                            const isSubActive = pathname === sub.path;
                                            return (
                                                <Link
                                                    key={sIdx}
                                                    href={sub.path}
                                                    className={`py-2 px-3 rounded-lg text-sm transition-all duration-200 font-medium relative ${isSubActive ? 'text-primary bg-primary/5' : 'text-gray-500 hover:text-dark hover:bg-gray-50'}`}
                                                >
                                                    {/* Dot connecting line indicator */}
                                                    <span className={`absolute left-[-21px] top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full transition-colors duration-200 ${isSubActive ? 'bg-primary' : 'bg-transparent'}`}></span>
                                                    {sub.name}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* Bottom Logout */}
            <div className={`px-4 mt-auto pt-6 border-t border-light-border/50 flex ${!sidebarOpen && 'justify-center'}`}>
                <button
                    onClick={handleLogout}
                    className={`flex items-center transition-all duration-300 text-gray-500 hover:text-primary ${sidebarOpen ? 'w-full px-3 gap-4' : 'justify-center mx-auto w-12 gap-0'}`}
                    title={!sidebarOpen ? "Log Out" : ""}
                >
                    <LogOut className="w-5 h-5 shrink-0" />
                    <span className={`transition-all duration-300 font-medium whitespace-nowrap ${sidebarOpen ? 'w-auto opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                        Log Out
                    </span>
                </button>
            </div>
        </aside>
    );
}
