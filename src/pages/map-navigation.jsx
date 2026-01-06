import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/section.jsx";

export default function MapNavigation() {
    return (
        <div>
            <Section title="Map Navigation">
                <p>
                    This page exists exactly as your doc specified: a full page with the same banner title
                    “Map Navigation,” and hyperlinks to the three subpages.
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                        className="rounded-xl border border-slate-200 p-4 bg-white hover:shadow-soft transition"
                        to="/map-navigation/southeast-asia"
                    >
                        <div className="font-semibold text-slate-900">Southeast Asia</div>
                        <div className="text-sm text-slate-600 mt-1">
                            Regional background, constraints, decision-making relevance.
                        </div>
                    </Link>

                    <Link
                        className="rounded-xl border border-slate-200 p-4 bg-white hover:shadow-soft transition"
                        to="/map-navigation/africa"
                    >
                        <div className="font-semibold text-slate-900">Africa</div>
                        <div className="text-sm text-slate-600 mt-1">
                            Regional background, constraints, decision-making relevance.
                        </div>
                    </Link>

                    <Link
                        className="rounded-xl border border-slate-200 p-4 bg-white hover:shadow-soft transition"
                        to="/map-navigation/europe"
                    >
                        <div className="font-semibold text-slate-900">Europe</div>
                        <div className="text-sm text-slate-600 mt-1">
                            Regional background, constraints, decision-making relevance.
                        </div>
                    </Link>
                </div>

                {/* Static map image (no clutter) */}
                <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden bg-white">
                    <img
                        src="/images/world-map.png"
                        alt="World map"
                        className="w-full h-auto"
                        loading="lazy"
                    />
                </div>
            </Section>
        </div>
    );
}
