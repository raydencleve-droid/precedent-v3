import React from "react";
import Section from "../components/section.jsx";

function TwoCol({ left, right }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">{left}</div>
            <div className="lg:col-span-1">{right}</div>
        </div>
    );
}

function FigureBox({ src, title, note }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="h-44 bg-slate-100 border-b border-slate-200">
                {src ? (
                    <img
                        src={src}
                        alt={title || "Figure"}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget.parentElement?.querySelector(
                                "[data-fallback='true']"
                            );
                            if (fallback) fallback.style.display = "flex";
                        }}
                    />
                ) : null}

                <div
                    data-fallback="true"
                    className="w-full h-full flex items-center justify-center text-slate-400 text-sm"
                    style={{ display: src ? "none" : "flex" }}
                >
                    Image / Figure Placeholder
                </div>
            </div>

            <div className="p-4">
                {title ? (
                    <div className="text-sm font-semibold text-slate-900">{title}</div>
                ) : null}
                {note ? (
                    <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {note}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default function CaseAseanFormation() {
    return (
        <div>
            <Section title="ASEAN Formation (1967)">
                <p>
                    ASEAN (the Association of Southeast Asian Nations) formed as a regional response to
                    post-colonial nation-building and Cold War pressure. It illustrates how cooperation can
                    reduce conflict and increase collective leverage without collapsing sovereignty.
                </p>
            </Section>

            <Section title="1. Historical Context">
                <TwoCol
                    left={
                        <>
                            <p>
                                ASEAN is a group of ten countries that found common ground after colonialism and
                                through the Cold War. ASEAN consists of Myanmar, Thailand, Malaysia, Singapore,
                                Vietnam, Laos, Cambodia, the Philippines, Brunei, and Indonesia.
                            </p>
                            <p>
                                ASEAN was established on 8 August 1967, as many member countries were newly
                                independent and forming governments during the Cold War. As the United States and
                                the Soviet Union competed for global influence, these nations gathered to reduce
                                conflict with neighbouring states and create an alliance that amplified their voice.
                            </p>
                            <p>
                                ASEAN enabled countries to speak collectively and to build cooperation after
                                independence.
                            </p>
                        </>
                    }
                    right={
                        <FigureBox
                            src="/images/asean-founders.png"
                            title="Asean Map"

                        />
                    }
                />
            </Section>

            <Section title="2. Geography & Structural Reality">
                <TwoCol
                    left={
                        <>
                            <p>
                                Southeast Asia contains extensive maritime countries with archipelagos and
                                peninsulas. ASEAN states cover key waterways such as the Malacca Strait and the
                                South China Sea, making the region important for global trade and military
                                considerations.
                            </p>
                            <p>
                                Strategic geography created security concerns. Member states varied in cultural and
                                political diversity, yet established common ground. Borders inherited from colonial
                                rule also shaped vulnerabilities and required careful diplomacy.
                            </p>
                            <p>
                                Instead of confrontation, diplomacy and geography became central structures of
                                regional stability.
                            </p>
                        </>
                    }

                />
            </Section>

            <Section title="3. Decision-Makers & Interests">
                <TwoCol
                    left={
                        <>
                            <p>
                                ASEAN was led by the foreign ministers of five founding states: Indonesia, Malaysia,
                                the Philippines, Singapore, and Thailand. There was no external interference from
                                Western powers, which could have jeopardized dialogues and internal decision-making.
                            </p>
                            <p>
                                These states aimed to maintain sovereignty and stability. Smaller states gained
                                collective diplomatic leverage, and decisions required agreement among members.
                                International intervention was excluded and limited to the formal ASEAN states.
                            </p>
                        </>
                    }
                    right={
                        <FigureBox
                            src="/images/asean-foreign-ministers.png"
                            title="Decision-Makers"

                        />
                    }
                />
            </Section>

            <Section title="4. Critical Decisions & Trade-offs">
                <TwoCol
                    left={
                        <>
                            <p>
                                A key ASEAN principle is non-interference. Decisions and procedures follow
                                consensus-based decision-making that requires unity across member states.
                            </p>
                            <p>
                                ASEAN restricted certain military alignments to protect effectiveness and
                                representation. It emphasised economic cooperation and avoided deeper political
                                integration unless a state posed an international threat.
                            </p>
                            <p>
                                Sovereignty was protected at the cost of strong enforcement capabilities.
                            </p>
                        </>
                    }
                    right={
                        <FigureBox
                            src="/images/asean-consensus.png"
                            title="Consensus & Non-Interference"

                        />
                    }
                />
            </Section>

            <Section title="5. Consequences & Precedent">
                <TwoCol
                    left={
                        <>
                            <p>
                                ASEAN has become one of the most acknowledged diplomatic structures, empowering
                                smaller states to set agendas from economic issues to security concerns. ASEAN has
                                improved regional cooperation and enabled gradual economic integration.
                            </p>
                            <p>
                                However, limited intervention remained a challenge. ASEAN developed a distinct
                                regional identity, and member states are obliged to follow the ASEAN Charter, which
                                regulates agreements and principles to ensure long-term implementation.
                            </p>
                            <p>
                                (ASEAN Charter reference exists — you can add it later as a button or a document link.)
                            </p>
                        </>
                    }

                />
            </Section>

            <Section title="6. Lessons Obtained">
                <TwoCol
                    left={
                        <>
                            <p>
                                ASEAN’s formation shows how vulnerable states can cooperate without surrendering
                                sovereignty. Independent countries reached consensus and collaborated geographically,
                                stabilising without relying on formal military alliances.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Cooperation can be a survival strategy under major power competition.</li>
                                <li>Consensus protects sovereignty but limits enforcement.</li>
                                <li>Geography can drive shared interest and shared risk.</li>
                                <li>Institutions can gradually build regional identity over time.</li>
                            </ul>
                        </>
                    }
                    right={
                        <FigureBox
                            src="/images/asean-lessons.png"
                            title="Key Lessons"

                        />
                    }
                />
            </Section>
        </div>
    );
}
