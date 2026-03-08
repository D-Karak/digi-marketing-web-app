import { HERO_CONTENT } from "@/constants/content";

export default function HeroSection() {
    return (
        <section className="pt-10 pb-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center relative">

                    {/* Left Content Column */}
                    <div className="flex flex-col pr-0 lg:pr-10 z-10 w-full max-w-xl">
                        {/* Tag */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="font-semibold text-dark">{HERO_CONTENT.tagline}</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-6xl md:text-[5.5rem] font-bold text-dark leading-[1.05] tracking-tight mb-6">
                            {HERO_CONTENT.titleLine1} <br />
                            {HERO_CONTENT.titleLine2}
                            {/* Decorative speech bubble dot */}
                            <span className="inline-flex align-top ml-2">
                                <span className="w-14 h-10 bg-primary rounded-2xl rounded-bl-sm flex items-center justify-center">
                                    <span className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    </span>
                                </span>
                            </span>
                        </h1>

                        {/* Paragraph */}
                        <p className="text-gray-500 text-[17px] leading-relaxed mb-8 max-w-md">
                            {HERO_CONTENT.description}
                        </p>

                        {/* CTA Button */}
                        <div className="mb-14">
                            <button className="px-8 py-4 bg-dark text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                                Book A Demo
                            </button>
                        </div>

                        {/* Bottom Dark Card */}
                        <div className="bg-dark text-white rounded-4xl rounded-tr-5xl p-8 pb-10 max-w-sm relative">
                            {/* Top right floating circle arrow */}
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>

                            {/* Stars & Text */}
                            <div className="flex items-center gap-1 mb-3 text-yellow-400">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Users</div>
                                <div className="flex -space-x-3">
                                    <div className="w-8 h-8 rounded-full border-2 border-dark bg-gray-300 bg-[url('https://randomuser.me/api/portraits/women/44.jpg')] bg-cover"></div>
                                    <div className="w-8 h-8 rounded-full border-2 border-dark bg-gray-400 bg-[url('https://randomuser.me/api/portraits/men/32.jpg')] bg-cover"></div>
                                    <div className="w-8 h-8 rounded-full border-2 border-dark bg-gray-500 bg-[url('https://randomuser.me/api/portraits/women/68.jpg')] bg-cover"></div>
                                </div>
                            </div>

                            <h3 className="text-[22px] font-semibold leading-tight">
                                {HERO_CONTENT.statsTitle}
                            </h3>
                        </div>
                    </div>

                    {/* Right Image/Graphics Column */}
                    <div className="relative h-[600px] w-full mt-10 lg:mt-0 flex justify-end items-center">
                        {/* Background Blob / Shape */}
                        <div className="absolute right-0 top-10 w-[80%] h-[500px] bg-orange-100/50 rounded-4xl rounded-tr-5xl rounded-bl-5xl -z-10"></div>

                        {/* Woman placeholder styling */}
                        <div className="absolute right-10 bottom-0 w-[450px] h-[550px] bg-gray-200 rounded-4xl overflow-hidden flex flex-col justify-end items-center text-gray-400 border-4 border-white shadow-xl bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')] bg-cover bg-center">
                            {/* Image background is set via class above for a female professional */}
                        </div>

                        {/* Floating UI Elements */}
                        <div className="absolute left-[10%] top-[20%] bg-white rounded-full py-2 px-4 shadow-lg flex items-center gap-3 animate-pulse">
                            <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white">
                                <span className="text-lg">▶</span>
                            </div>
                            <span className="font-semibold text-sm leading-tight text-dark">
                                Show How It work and<br />See What We Do
                            </span>
                        </div>

                        <div className="absolute left-[5%] bottom-[40%] flex flex-col gap-3">
                            <div className="bg-white rounded-full px-5 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-3 text-dark font-semibold border-l-4 border-yellow-400 hover:scale-105 transition-transform cursor-default">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
                                Wapp API
                            </div>
                            <div className="bg-primary text-white rounded-full px-5 py-3 shadow-[0_10px_40px_-10px_rgba(255,95,88,0.4)] flex items-center gap-3 font-semibold ml-4 hover:scale-105 transition-transform cursor-default">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                Auto Chat Bot
                            </div>
                            <div className="bg-white rounded-full px-5 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-3 text-dark font-semibold ml-2 hover:scale-105 transition-transform cursor-default">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                Auto Wapp Group
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
