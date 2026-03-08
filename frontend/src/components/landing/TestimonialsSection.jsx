import { TESTIMONIALS } from "@/constants/content";

const TestimonialsSection = () => {
    // Duplicate to ensure smooth infinite scroll (translateX from 0 to -50%)
    const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <section className="py-24 relative z-10 w-full bg-light overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                            Why Our Customer<br />Think We Are Best
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg">
                            Our Customers Have Witnessed Tangible And Remarkable Results With Our Services. From Skyrocketing ROI To Substantial Revenue Growth, Our Strategies Consistently Deliver Exceptional Outcomes. We Take Immense Pride In Being Recognized As The Best In The Industry.
                        </p>
                    </div>
                </div>

                {/* Marquee Track Container */}
                <div className="w-full relative">
                    <div className="animate-marquee flex gap-8">
                        {marqueeItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-[400px] md:w-[450px] shrink-0 bg-white rounded-4xl p-10 flex flex-col shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-12 h-12 rounded-xl rounded-tr-sm flex items-center justify-center text-white
                            ${item.style === 'primary' ? 'bg-primary' : item.style === 'dark' ? 'bg-dark' : 'bg-gray-300'}
                         `}>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                    </div>
                                    <div className="flex gap-1 text-yellow-400">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-500 text-lg leading-relaxed mb-10 grow">
                                    {item.text}
                                </p>

                                <div className={`flex items-center gap-4 p-4 rounded-2xl
                         ${item.style === 'primary' ? 'bg-orange-50/50' : item.style === 'dark' ? 'bg-yellow-50/50' : 'bg-gray-50'}
                      `}>
                                    <div
                                        className="w-12 h-12 bg-gray-200 rounded-full bg-cover bg-center"
                                        style={{ backgroundImage: `url('${item.avatar}')` }}
                                    />
                                    <div className="grow">
                                        <h4 className="font-bold text-dark">{item.author}</h4>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center
                             ${item.style === 'primary' ? 'bg-primary/10 text-primary' : 'bg-yellow-400/20 text-yellow-500'}
                         `}>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2zM1 21h4V9H1v12z" /></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient Fades for Marquee (Optional) */}
                    {/* <div className="absolute top-0 left-0 h-full w-24 bg-linear-to-r from-light to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-24 bg-linear-to-l from-light to-transparent pointer-events-none"></div> */}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;