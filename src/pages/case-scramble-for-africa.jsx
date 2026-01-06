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
                            // Hide broken image and show the fallback text block
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget.parentElement?.querySelector(
                                "[data-fallback='true']"
                            );
                            if (fallback) fallback.style.display = "flex";
                        }}
                    />
                ) : null}

                {/* Fallback placeholder */}
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

export default function CaseScrambleForAfrica() {
    return (
        <div>
            <Section title="The Scramble for Africa">
                <p>
                    This case study examines how European industrialisation, interstate
                    competition, and strategic geography contributed to the colonisation
                    and partition of Africa in the late 19th century. It highlights what
                    happens when decisions are made without representation of the affected
                    populations.
                </p>
            </Section>

            <Section title="1. Historical Context">
                <TwoCol
                    left={
                        <>
                            <p>
                                As the world entered the late 19th-century, European
                                industrialisation increased the demand for raw materials and
                                overseas markets. Technological inventions rapidly grew and
                                required massive amounts of resources to produce needed
                                products, which could be exported, increasing the economic state
                                of a country.
                            </p>
                            <p>
                                Europe was the primary player in the Industrial Revolution and
                                wanted international recognition, resorting to colonial
                                expansion for natural resources. European neighbouring countries
                                started a competition, most notably Germany and Italy, who
                                wanted to gain international prestige and showcase dominance.
                            </p>
                            <p>
                                Europe colonized up until the start of the 20th century,
                                managing to control up to 92 percent of Africa.
                            </p>
                            <p>
                                The Berlin Conference (1884–1885) attempted to address
                                colonisation issues, yet the regulations were established and
                                formalized without a single African representation.
                            </p>
                        </>
                    }
                    right={
                        <FigureBox
                            src="/images/berlin-conference.png"
                            title="Berlin Conference"

                        />
                    }
                />
            </Section>

            <Section title="2. Geography & Structural Reality">
                <TwoCol
                    left={
                        <>
                            <p>
                                Africa, despite being extremely weak during the time, held a
                                major proportion of the world's land area. Africa had wealth,
                                river-controlling trade routes, and coastal access. Europe saw
                                this as an opportunity to colonize and control governance.
                            </p>
                            <p>
                                Both the Nile and Congo rivers were controlled by Europeans.
                                Europe continued to control and threaten civilians to work for
                                natural resources, while colonizing interior regions to
                                legitimise territorial claims.
                            </p>
                            <p>
                                Occupation rules discussed at the Berlin Conference became a
                                justification rather than a solution, as control and
                                administration were difficult to implement sustainably.
                            </p>
                        </>
                    }
                    right={
                        <FigureBox
                            src="/images/africa-rivers-map.png"
                            title="Strategic Geography"

                        />
                    }
                />
            </Section>

            <Section title="3. Decision-Makers & Interests">
                <TwoCol
                    left={
                        <>
                            <p>
                                Every single conference and solution was dominated by European
                                commandos, governments, and diplomats. Africans were not given a
                                voice to advocate for their own interests. African leaders were
                                excluded from formal decision-making.
                            </p>
                            <p>
                                Europe created a facade of consultation, yet indigenous
                                governance was disregarded. Power was externally imposed rather
                                than locally derived.
                            </p>
                        </>
                    }
                    right={
                        <FigureBox
                            src="/images/colonial-leaders.png"
                            title="Actors & Interests"

                        />
                    }
                />
            </Section>

            <Section title="4. Critical Decisions & Trade-offs">
                <TwoCol
                    left={
                        <>
                            <p>
                                European states declined Africa's attempts to negotiate and
                                continued territorial partition. As complaints increased, Europe
                                accepted interstate cooperation, which reduced European violence
                                but intensified colonial domination.
                            </p>
                            <p>
                                Economic exploitation of natural resources such as gold and oil
                                was prioritized over political stability, making Africa
                                vulnerable from the end of the 19th century till the mid-20th
                                century.
                            </p>
                            <p>
                                Colonial borders were drawn for convenience rather than
                                sustainability. Long-term governance challenges were accepted to
                                retrieve natural resources and labor.
                            </p>
                        </>
                    }
                    right={
                        <FigureBox
                            src="/images/colonial-borders-map.png"
                            title="Borders & Trade-offs"

                        />
                    }
                />
            </Section>

            <Section title="5. Consequences & Precedent">
                <TwoCol
                    left={
                        <>
                            <p>
                                European states colonized Africa and the precedents created were
                                exploited further. Partitions became a foundation for other
                                states to favor their own national interest, politically and
                                economically.
                            </p>
                            <p>
                                Europe influenced African policy by treating colonies as sources
                                of materials such as gold, rubber, and oil. Colonial rule shaped
                                societies and disrupted indigenous systems.
                            </p>
                            <p>
                                The social structure via the slave trade led to separation of
                                indigenous systems. Many societies entered cycles of poverty and
                                reliance on imported goods as resources experienced scarcity.
                            </p>
                        </>
                    }

                />
            </Section>

            <Section title="6. Obtainable Lesson">
                <TwoCol
                    left={
                        <>
                            <p>
                                From the Scramble for Africa, there are several significant
                                lessons that must be considered:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>All decisions must be made with the affected populations.</li>
                                <li>Geography cannot be ignored in political planning.</li>
                                <li>
                                    External solutions imposed without understanding historical
                                    precedence would have lasting consequences.
                                </li>
                                <li>
                                    Power exercised without accountability generates enduring
                                    challenges.
                                </li>
                            </ul>
                        </>
                    }

                />
            </Section>
        </div>
    );
}
