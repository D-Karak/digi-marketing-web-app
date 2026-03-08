import { FOOTER_STATS } from "@/constants/content";

const FooterCTA = () => {
    return (
        <footer className="w-full bg-light">
            {/* Main CTA Block */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
                <div className="flex flex-col lg:flex-row shadow-2xl rounded-[3rem] overflow-hidden">

                    {/* Left Red Block */}
                    <div className="bg-primary text-white p-14 lg:p-20 lg:w-2/5 flex flex-col justify-center rounded-[3rem] z-10 relative lg:-mr-10 xl:-mr-20">
                        <div className="mb-12">
                            <h3 className="text-6xl md:text-7xl font-bold mb-2">{FOOTER_STATS.casesSolved}</h3>
                            <p className="text-white/80 text-xl font-medium tracking-wide">Business Case Solved</p>
                        </div>
                        <div>
                            <h3 className="text-6xl md:text-7xl font-bold mb-2">{FOOTER_STATS.dailyLogins}</h3>
                            <p className="text-white/80 text-xl font-medium tracking-wide">New Users Login Everyday</p>
                        </div>
                    </div>

                    {/* Right Dark Block */}
                    <div className="bg-[#111] text-white p-14 lg:p-20 lg:w-3/5 lg:pl-32 xl:pl-40 flex flex-col justify-center rounded-[3rem] lg:rounded-l-none relative overflow-hidden">
                        {/* Abstract wave lines */}
                        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                            <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 100 C 100 0, 300 200, 400 100 L 400 200 L 0 200 Z" fill="currentColor" />
                            </svg>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight relative z-10">
                            Ready to Elevate Your<br />Digital Presence?
                        </h2>
                        <p className="text-gray-400 text-[15px] leading-relaxed max-w-md mb-12 relative z-10">
                            Unlock The Power Of Cutting-Edge Digital Strategies With Omlytics. Whether You Need A Stunning Website, A Winning Social Media Campaign, Or SEO That Drives Results, We&apos;ve Got You Covered.
                        </p>
                        <div className="relative z-10">
                            <button className="px-10 py-5 bg-white text-dark font-bold rounded-full hover:bg-gray-100 transition-colors">
                                Book A Demo
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Real Footer Below CTA */}
            <div className="bg-dark text-white pt-20 pb-10">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 border-b border-white/10 pb-16 mb-8">
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
                        {/* Footer Col 1 */}
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-white text-2xl font-bold">
                                <div className="flex gap-1 justify-center items-end h-6">
                                    <div className="w-[3px] bg-primary h-2 rounded-full"></div>
                                    <div className="w-[3px] bg-primary h-4 rounded-full"></div>
                                    <div className="w-[3px] bg-primary h-6 rounded-full"></div>
                                    <div className="w-[3px] bg-primary h-4 rounded-full"></div>
                                    <div className="w-[3px] bg-primary h-2 rounded-full"></div>
                                </div>
                                Omlytics
                            </div>
                            <h4 className="text-2xl font-semibold leading-tight mb-8">
                                Your Best<br />Marketing Partner
                            </h4>
                            <button className="px-8 py-3 bg-white text-dark font-semibold rounded-full hover:bg-gray-100 transition-colors">
                                Book a Demo
                            </button>
                        </div>

                        {/* Footer Col 2 */}
                        <div className="md:col-span-2">
                            <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
                                <div>
                                    <h5 className="font-semibold mb-6">Join Our Global Waitlist</h5>
                                    <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-sm">
                                        Get Early Access
                                    </button>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-6">Follow Us</h5>
                                    <div className="flex gap-4 text-primary">
                                        <svg className="w-5 h-5 cursor-pointer hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        <svg className="w-5 h-5 cursor-pointer hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                        {/* Linkedin/Tiktok placeholders */}
                                        <svg className="w-5 h-5 cursor-pointer hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[13px] text-gray-500 leading-relaxed space-y-4">
                                <p>
                                    As A Valued Member Of Our Waitlist Community, You&apos;ll Enjoy A Host Of Benefits. Gain Early Access To Groundbreaking Products, Services, Or Opportunities That Are Poised To Reshape Industries. Stay In The Loop With Exclusive Updates.
                                </p>
                                <p>
                                    Embrace The Anticipation Of Being At The Forefront Of Innovation And Excellence. By Joining Our Global Waitlist, You&apos;re Not Just Signing Up: You&apos;re Securing Your Spot As A Pioneer In A World Of Endless Possibilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-center lg:justify-end gap-10 text-xs text-gray-500 font-medium">
                    <a href="#" className="hover:text-white transition-colors">Help Center</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy & Regulation</a>
                    <a href="#" className="hover:text-white transition-colors">Term & Condition</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterCTA;
