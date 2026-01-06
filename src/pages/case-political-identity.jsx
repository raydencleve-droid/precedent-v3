import React from "react";
import Section from "../components/section.jsx";

export default function CasePoliticalIdentity() {
    return (
        <div>
            <Section title="Political Identity">
                <p>
                    Political identity refers to how individuals and communities understand
                    their belonging within a political system. It is shaped by shared
                    history, culture, memory, and experience rather than fixed or natural
                    categories. Throughout history, political identity has been influenced
                    by external control, colonisation, and attempts to expand state power
                    beyond borders.
                </p>

                <p>
                    Understanding political identity is essential because it affects
                    legitimacy, participation, and conflict. Decisions made without
                    considering identity often lead to resistance, instability, or
                    long-term grievances.
                </p>
            </Section>

            <Section title="Potential Interests">
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <b>Who defines political identity:</b> the state, external powers, or
                        the people themselves?
                    </li>
                    <li>
                        <b>How does historical experience shape collective identity?</b>
                    </li>
                    <li>
                        <b>
                            What happens when political identity is imposed rather than
                            self-determined?
                        </b>
                    </li>
                </ul>
            </Section>

            <Section title="Political Identity Across Regions">
                <div className="space-y-6">
                    <div>
                        <div className="font-semibold text-slate-900">
                            Southeast Asia
                        </div>
                        <p className="text-slate-700">
                            Political identity in Southeast Asia developed alongside
                            decolonisation and nation-building. Diverse ethnic and cultural
                            groups were unified under new national identities, often
                            prioritising stability over uniformity.
                        </p>
                    </div>

                    <div>
                        <div className="font-semibold text-slate-900">
                            Africa
                        </div>
                        <p className="text-slate-700">
                            Colonial borders disrupted pre-existing identities, forcing
                            multiple groups into single political entities. This created
                            long-term challenges in legitimacy and representation that
                            continue to influence governance today.
                        </p>
                    </div>

                    <div>
                        <div className="font-semibold text-slate-900">
                            Europe
                        </div>
                        <p className="text-slate-700">
                            Political identity in Europe was shaped by nationalism,
                            particularly in the 19th and 20th centuries. Shared language,
                            culture, and history were used to justify state boundaries,
                            sometimes intensifying conflict.
                        </p>
                    </div>
                </div>
            </Section>

            <Section title="Significance">
                <p className="italic font-medium text-slate-800">
                    “How do historical experiences shape who belongs, who governs, and who decides?”
                </p>

                <p>
                    Understanding political identity helps explain why certain groups,
                    communities, or states approach issues of legitimacy, authority, and
                    representation differently—particularly when responding to external
                    actors or imposed decisions.
                </p>
            </Section>
        </div>
    );
}
