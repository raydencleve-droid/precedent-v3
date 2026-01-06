import React from "react";
import { brand } from "../data/content.js";

export default function Hero() {
    return (
        <header className="relative h-60 border-b border-slate-800 overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: "url('/images/hero-banner.png')"
                }}
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-6">
                <div>
                    <div className="text-2xl sm:text-3xl font-semibold text-white">
                        Understanding the past,
                    </div>
                    <div className="mt-1 text-2xl sm:text-3xl italic font-light text-white">
                        interpreting the present.
                    </div>
                </div>
            </div>
        </header>
    );
}
