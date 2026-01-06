import React from "react";
import Section from "../components/section.jsx";
import { furtherReadings } from "../data/content.js";

export default function FurtherReadings() {
    return (
        <div>
            <Section title="Further Readings">
                <p>Three external resources you provided.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {furtherReadings.map((r) => (
                        <a
                            key={r.url}
                            href={r.url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-slate-200 p-4 bg-white hover:shadow-soft transition group"
                        >
                            {/* Image */}
                            <div className="h-32 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                                <img
                                    src={r.image}
                                    alt={r.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Title */}
                            <div className="mt-3 font-medium text-slate-900 group-hover:underline">
                                {r.title}
                            </div>

                            {/* URL */}
                            <div className="text-sm text-slate-600 mt-2 break-words">
                                {r.url}
                            </div>
                        </a>
                    ))}
                </div>
            </Section>
        </div>
    );
}
