import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/section.jsx";
import { home } from "../data/content.js";

function WhyStudyHistory() {
    const [open, setOpen] = useState(false);

    const intro =
        "“History shapes the world today” is a cliché phrase reiterated by historians, but have you ever thoroughly explored why or how decisions made yesterday or even millennia ago still shape the world today?";

    const longText = [
        "“Historian Peter Stearns argued that facts and knowledge help distinguish the educated from the uneducated, Civilized and the uncivilized”. Without any forms of evidence, any study requires a sufficient amount of proof to prove otherwise; there must be advocacy and a justification behind the following circumstance. But how are we able to recognize the world if we have not recognized the past? Historical knowledge and awareness are the stepping stones towards interpreting the present, the only key and pathway to understand how outcomes and certain decisions have revolutionized the world and the borders we stand in today. History is not only about what has happened in the past, history does not solve world hunger. Consequently, history provides a concrete framework to interpret and rationally decide settlements, diplomacy in order not to repeat the past.",
        "Understanding history is not hard, but committing to properly diving into these events and precedents is what jeopardizes the main message of history. History should not be considered a facade of memorization, as individuals develop the ability to critically analyze and evaluate current situations according to patterns that have occurred."
    ];

    return (
        <Section title="Why study history?" anchor="why-study-history">
            <p>{intro}</p>

            {open && (
                <div className="mt-4 space-y-4">
                    {longText.map((p, idx) => (
                        <p key={idx}>{p}</p>
                    ))}
                </div>
            )}

            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="btn-primary mt-4"
                aria-expanded={open}
            >
                {open ? "Show less" : "Learn more"} <span aria-hidden="true">→</span>
            </button>
        </Section>
    );
}

export default function Home() {
    return (
        <div>
            <Section title={home.conceptTitle}>
                <p>{home.conceptBody}</p>
                <Link
                    to={home.conceptCtaTo}
                    className="btn-primary mt-4"
                >
                    {home.conceptCtaLabel} →
                </Link>
            </Section>

            {/* Collapsible long content */}
            <WhyStudyHistory />

            <Section title={home.diversityTitle}>
                {home.diversityBody.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
            </Section>

            <Section title={home.moralTitle}>
                {home.moralBody.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
            </Section>

            <Section title={home.relatedResourcesTitle}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {home.relatedResources.map((r) => (
                        <Link
                            key={r.title}
                            to={r.to}
                            className="group rounded-xl border border-slate-200 p-4 hover:shadow-soft transition bg-white"
                        >
                            <div className="h-28 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                                <img
                                    src={r.image}
                                    alt={r.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-3 font-medium text-slate-900 group-hover:underline">
                                {r.title}
                            </div>
                            <div className="text-sm text-slate-600 mt-1">
                                Open Further Readings
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
