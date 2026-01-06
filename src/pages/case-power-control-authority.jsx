import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/section.jsx";

function CaseLinkCard({ title, description, to }) {
    return (
        <Link
            to={to}
            className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-soft transition block"
        >
            <div className="text-lg font-semibold text-slate-900 group-hover:underline">
                {title}
            </div>
            {description ? (
                <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {description}
                </div>
            ) : null}
            <div className="mt-4 text-sm font-medium text-slate-900">
                View case study →
            </div>
        </Link>
    );
}

export default function CasePowerControlAuthority() {
    return (
        <div>
            <Section title="Power, Control, and Authority">
                <p>
                    Power, control, and authority determine who makes decisions, how decisions are enforced,
                    and how those decisions impact the international community. Events within this theme explore
                    legitimate officials and procedures that governed a territory—or authority imposed through
                    coercion. Outcomes often depend less on the presence of power and more on how it was exercised
                    and justified.
                </p>
                <p>
                    This theme examines how unequal power relations shape political outcomes and long-term stability worldwide.
                </p>
            </Section>

            <Section title="Potential Interests">
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Who holds power, and on what basis?</b></li>
                    <li><b>What distinguishes authority from force?</b></li>
                    <li><b>What are the consequences of imposed control?</b></li>
                </ul>
            </Section>

            <Section title="Power, Control, and Authority Across Regions">
                <div className="space-y-5">
                    <div>
                        <div className="text-base font-semibold text-slate-900">Southeast Asia</div>
                        <p className="text-slate-700">
                            External powers historically exerted influence through colonial administration and Cold War intervention.
                            Post-independence states focused on consolidating internal authority.
                        </p>
                    </div>

                    <div>
                        <div className="text-base font-semibold text-slate-900">Africa</div>
                        <p className="text-slate-700">
                            Colonial rule established authority through force, leaving weak institutional legitimacy after independence.
                            Power transitions were often contested.
                        </p>
                    </div>

                    <div>
                        <div className="text-base font-semibold text-slate-900">Europe</div>
                        <p className="text-slate-700">
                            Post-war settlements redistributed power and authority across states, with decisions made under pressure and urgency.
                        </p>
                    </div>
                </div>
            </Section>

            <Section title="Significance">
                <p className="text-slate-800 font-medium italic">
                    “What happens when power is exercised without legitimacy or consent?”
                </p>
                <p>
                    Examining authority in historical contexts reveals how decisions can shape long-term stability—or instability.
                    It builds a basis for interpreting decision-making today and learning from precedents.
                </p>
            </Section>

            <Section title="Relevant Case Studies">
                <p className="text-slate-700">
                    Click a case study below. These were moved here to keep the sidebar clean and to make this theme page the hub.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <CaseLinkCard
                        title="The Scramble for Africa & Colonial Borders"
                        description="How authority was imposed through colonial rule, and the long-term consequences of externally drawn borders."
                        to="/case-studies/scramble-for-africa"
                    />

                    <CaseLinkCard
                        title="ASEAN’s Formation (1967)"
                        description="A regional response shaped by Cold War pressures and sovereignty concerns."
                        to="/case-studies/asean-formation"
                    />
                </div>
            </Section>
        </div>
    );
}
