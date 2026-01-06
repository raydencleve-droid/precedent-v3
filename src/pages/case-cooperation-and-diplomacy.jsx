import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/section.jsx";

function CaseLinkCard({ title, description, to }) {
    return (
        <Link
            to={to}
            className="group block rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-soft transition"
        >
            <div className="text-lg font-semibold text-slate-900 group-hover:underline">
                {title}
            </div>
            {description && (
                <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {description}
                </div>
            )}
            <div className="mt-4 text-sm font-medium text-slate-900">
                View case study →
            </div>
        </Link>
    );
}

export default function CooperationAndDiplomacy() {
    return (
        <div>
            <Section title="Cooperation and Diplomacy">
                <p>
                    Cooperation and diplomacy are existing diplomatic efforts where states manage conflict,
                    interact according to country stances, and respond to external pressure, including mass
                    atrocities and violence. Rather than acting unilaterally, states often engage in dialogue
                    and institutions to balance sovereignty with collective stability.
                </p>
                <p>
                    This theme demonstrates how cooperation frequently emerges not from idealism, but from
                    necessity—when unilateral action becomes too costly or risky.
                </p>
            </Section>

            <Section title="Potential Interests">
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Why do states choose cooperation over confrontation?</b></li>
                    <li><b>What limits the effectiveness of diplomacy?</b></li>
                    <li><b>How do power imbalances affect cooperative institutions?</b></li>
                </ul>
            </Section>

            <Section title="Cooperation Across Regions">
                <div className="space-y-5">
                    <div>
                        <div className="font-semibold text-slate-900">Southeast Asia</div>
                        <p className="text-slate-700">
                            The formation of ASEAN reflected a strategic choice to prioritise regional stability
                            and non-interference during the Cold War. Cooperation helped mitigate conflict without
                            sacrificing sovereignty.
                        </p>
                    </div>

                    <div>
                        <div className="font-semibold text-slate-900">Africa</div>
                        <p className="text-slate-700">
                            Regional organisations emerged to address shared challenges, though cooperation was
                            often constrained by post-colonial instability and economic disparities.
                        </p>
                    </div>

                    <div>
                        <div className="font-semibold text-slate-900">Europe</div>
                        <p className="text-slate-700">
                            Post-war diplomacy focused on reconstruction and preventing further conflict.
                            Institutional cooperation became a key tool in maintaining peace after large-scale war.
                        </p>
                    </div>
                </div>
            </Section>

            <Section title="Significance">
                <p className="italic font-medium text-slate-800">
                    “When does cooperation become a necessity rather than a choice?”
                </p>
                <p>
                    Diplomatic decisions reveal how states balance sovereignty, security, and shared interests
                    under pressure.
                </p>
            </Section>

            <Section title="Relevant Case Studies">
                <p className="text-slate-700">
                    This theme connects to the following case study. Click below to explore it in detail.
                </p>

                <div className="mt-6 max-w-xl">
                    <CaseLinkCard
                        title="ASEAN’s Formation (1967)"
                        description="A regional diplomatic response shaped by Cold War pressures, sovereignty concerns, and the need for stability."
                        to="/case-studies/asean-formation"
                    />
                </div>
            </Section>
        </div>
    );
}
