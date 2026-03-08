import { PRICING_PLANS } from "@/constants/content";

const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 relative z-10 w-full bg-light">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                            Selecting Right Plan<br />for Your Business
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg mb-8">
                            Our Pricing Plans Are Thoughtfully Crafted To Cater To Businesses Of All Sizes, From Startups And Small Enterprises To Large Corporations. Each Plan Comes With A Distinct Set Of Features And Benefits, Allowing You To Customize Your Experience And Investment According To Your Priorities.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

                    {PRICING_PLANS.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-[2.5rem] rounded-tr-[5rem] p-10 lg:p-14 relative 
                ${plan.isHighlighted
                                    ? "bg-dark text-white border border-gray-800 shadow-2xl"
                                    : "bg-transparent border-2 border-primary/40 mt-10 md:mt-0"
                                }`
                            }
                        >
                            <h3 className={`text-4xl font-bold ${plan.isHighlighted ? "text-white" : "text-dark"} mb-6 whitespace-pre-line`}>
                                {plan.name}
                            </h3>
                            <p className={`${plan.isHighlighted ? "text-gray-400" : "text-gray-600"} text-sm mb-10 leading-relaxed max-w-sm`}>
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-16">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className={`${plan.isHighlighted ? "text-gray-300" : "text-gray-700 font-medium"} relative top-0.5 whitespace-pre-line`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-6">
                                <p className={`${plan.isHighlighted ? "text-gray-400" : "text-gray-500"} text-sm mb-1`}>Starting Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-5xl font-bold ${plan.isHighlighted ? "text-white" : "text-dark"}`}>{plan.price}</span>
                                    <span className={`${plan.isHighlighted ? "text-gray-400" : "text-gray-500"} text-sm`}>{plan.billing}</span>
                                </div>
                            </div>

                            <button
                                className={`w-full py-4 rounded-full font-semibold transition-colors text-lg
                    ${plan.isHighlighted
                                        ? "bg-primary text-white hover:bg-primary-hover"
                                        : "border-2 border-primary/40 text-primary hover:bg-primary/5"
                                    }`
                                }
                            >
                                Custom Quote
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PricingSection;