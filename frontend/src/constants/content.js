// Centralized content data for the Landing Page
// This can be easily replaced with API calls in the future

export const HERO_CONTENT = {
    tagline: "Omlytics Assistant",
    titleLine1: "Marketing",
    titleLine2: "Digital Partner",
    description: "Discover How We Can Transform Your Digital Marketing Efforts Into Measurable Success. Partner With Us Today And Let's Embark On A Journey Of Digital Growth Together.",
    statsTitle: "Explore Our 370+ Real Project That Help Our Clients Business Growth Every Year",
};

export const MAIN_FEATURES = {
    header: "Whatsapp Marketing\nat Your Finger Tips",
    subFeatures: [
        {
            title: "Auto Chat Bot",
            description: "A Software Application Designed To Interact With Users And Provide Responses Or Assistance In A Chat-Like Interface.",
            icon: "bot"
        },
        {
            title: "Cost-Efficiency",
            description: "Digital Marketing Often Proves To Be More Cost-Effective Than Traditional Marketing Methods. Online Advertising.",
            icon: "cost"
        },
        {
            title: "Driven Data Insight",
            description: "One Of The Significant Advantages Of Digital Marketing Is The Wealth Of Data And Analytics It Provides.",
            icon: "data"
        }
    ],
    bentoBoxes: [
        { title: "Easy To\nExport Data", highlight: false },
        { title: "24/7 Services", highlight: true },
        { title: "Easy To\nDownload", highlight: false },
        { title: "Manage Multiple\nAccount", highlight: false },
    ]
};

export const PRICING_PLANS = [
    {
        name: "Basic Small\nPackage",
        description: "Digital Marketing Often Proves To Be More Cost-Effective Than Traditional Marketing Methods.",
        features: [
            "Social Media Management (2 Platforms)",
            "Website Design and Development (Up to 10 pages)",
            "Basic WhatsApp Broadcasting (Up to 1,000/mo)"
        ],
        price: "$1499",
        billing: "/lifetime",
        isHighlighted: true
    },
    {
        name: "Professional\nPackage",
        description: "Digital Marketing Often Proves To Be More Cost-Effective Than Traditional Marketing Methods.",
        features: [
            "Social Media Management (4 Platforms)",
            "Website Design and Development (Up to 20 pages)",
            "Unlimited WhatsApp Broadcasting",
            "Custom Merge Tags & CRM Access"
        ],
        price: "$1999",
        billing: "/lifetime",
        isHighlighted: false
    }
];

export const TESTIMONIALS = [
    {
        text: "I Couldn't Be Happier With The Results. Their Digital Marketing Expertise Has Significantly Boosted Our Online Presence And Driven Quality Leads.",
        author: "Karina Chaterine",
        role: "Start Up CEO, Fimela",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        style: "primary"
    },
    {
        text: "Their Innovative Digital Marketing Strategies Have Not Only Increased Our Website Traffic But Also Boosted Our Conversion Rates.",
        author: "John Weiber",
        role: "Start Up CEO, TechFlow",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        style: "dark"
    },
    {
        text: "The WhatsApp automation combined with the Email sequencing completely transformed how we do outreach. It's incredibly fast and reliable.",
        author: "Sarah Jenkins",
        role: "Marketing Director, Bloom",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        style: "light"
    },
    {
        text: "Having a unified dashboard for Meta ads and direct WhatsApp messaging saves our team over 15 hours a week. Highly recommended system!",
        author: "Marcus Chen",
        role: "Founder, GrowthStack",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        style: "primary"
    },
    {
        text: "The built-in CRM and intelligent throttling kept our sender reputation pristine while scaling our campaigns to millions.",
        author: "Elena Rodriguez",
        role: "VP of Sales, OmniReach",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 5,
        style: "dark"
    }
];

export const FOOTER_STATS = {
    casesSolved: "280+",
    dailyLogins: "10.000+"
};
