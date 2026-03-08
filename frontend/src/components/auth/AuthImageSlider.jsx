"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthImages } from '../../utils/auth-images';

export default function AuthImageSlider({ title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance the slider every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % AuthImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hidden lg:flex flex-col justify-between w-[48%] p-10 m-4 relative overflow-hidden rounded-4xl transition-all duration-700 ease-in-out">
            {AuthImages.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    className={`object-cover z-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    sizes="(max-width: 1024px) 0vw, 50vw"
                />
            ))}

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-dark/95 pointer-events-none z-10"></div>

            {/* Content Overlay */}
            <div className="relative border border-transparent flex flex-col h-full justify-between z-20 text-secondary w-full">
                {/* Top Header */}
                <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-3xl tracking-widest uppercase flex items-center gap-2">
                        <div className="flex gap-1 justify-center items-end h-6">
                            <div className="w-[3px] bg-secondary h-2 rounded-full"></div>
                            <div className="w-[3px] bg-secondary/90 h-4 rounded-full"></div>
                            <div className="w-[3px] bg-secondary h-6 rounded-full"></div>
                            <div className="w-[3px] bg-secondary/90 h-4 rounded-full"></div>
                            <div className="w-[3px] bg-secondary h-2 rounded-full"></div>
                        </div>
                        <span className="tracking-tight text-secondary/90 text-[26px]">Omlytics</span>
                    </span>
                    <Link href="/" className="flex items-center gap-2 bg-secondary/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium hover:bg-secondary/30 transition-colors">
                        Back to website <span>&rarr;</span>
                    </Link>
                </div>

                {/* Bottom Footer */}
                <div className="pb-6 px-4">
                    <h2 className="text-[32px] xl:text-[44px] leading-[1.15] font-normal tracking-tight text-center mb-8">
                        {title}
                    </h2>

                    {/* Dynamic Slider Indicators */}
                    <div className="flex justify-center gap-3">
                        {AuthImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-12 bg-primary'
                                    : 'w-10 bg-secondary/30 hover:bg-primary-hover/60 cursor-pointer'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
