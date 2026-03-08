import { MAIN_FEATURES } from "@/constants/content";

export default function FeaturesGrid() {

    const getIcon = (type) => {
        switch (type) {
            case 'bot':
                return <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
            case 'cost':
                return <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
            case 'data':
                return <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
            default:
                return null;
        }
    }

    return (
        <section id="features" className="py-20 relative z-10 w-full bg-light">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Dark Container Section */}
                <div className="bg-dark text-white rounded-[2.5rem] p-10 lg:p-16 mb-24 relative overflow-hidden">

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16 relative z-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                                <pre className="font-sans whitespace-pre-line">{MAIN_FEATURES.header}</pre>
                            </h2>
                            <button className="px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Learn Why Omlytics
                            </button>
                        </div>
                        <div className="lg:pr-32">
                            <div className="bg-primary text-white rounded-full px-6 py-3 shadow-[0_10px_40px_-10px_rgba(255,95,88,0.4)] flex items-center gap-3 font-semibold">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                Auto Chat Bot
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Sub-features */}
                    <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative z-10 border-t border-gray-700 pt-16">
                        {MAIN_FEATURES.subFeatures.map((feature, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-3 mb-4">
                                    {getIcon(feature.icon)}
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-gray-400 text-[15px] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Power of Marketing Software */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                            The Power of Our<br />Marketing Software
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg">
                            Advanced Auto Chatbots Can Use AI And Machine Learning To Personalize Responses Based On User Interactions And Preferences. They Can Provide Tailored Recommendations And Solutions, Enhancing The User Experience. Businesses Can Use This Information.
                        </p>
                    </div>

                    {/* dynamic Bento Boxes */}
                    <div className="grid grid-cols-2 gap-6">
                        {MAIN_FEATURES.bentoBoxes.map((box, idx) => (
                            <div
                                key={idx}
                                className={`rounded-4xl p-8 aspect-square flex flex-col items-center justify-center text-center transition-shadow shadow-sm
                        ${box.highlight
                                        ? "bg-primary text-white shadow-[0_20px_40px_-15px_rgba(255,95,88,0.5)]"
                                        : "bg-white border border-gray-100 hover:shadow-md"
                                    }`
                                }
                            >
                                {box.highlight && (
                                    <div className="w-12 h-12 mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    </div>
                                )}
                                <h3 className="text-xl font-bold whitespace-pre-line">{box.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Right Large Dark Box */}
                    <div className="bg-dark text-white rounded-[2.5rem] rounded-tr-[5rem] p-12 h-full min-h-[400px] flex flex-col justify-center relative">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight max-w-[250px]">
                            Check<br />Our Product<br />Features
                        </h2>
                        <div className="absolute bottom-8 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                            <svg className="w-6 h-6 text-white transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
