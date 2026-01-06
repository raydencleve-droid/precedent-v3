import React from "react";
import Section from "../components/section.jsx";
import { home, aboutProject } from "../data/content.js";

export default function AboutConceptToPlatform() {
    return (
        <div>
            <Section title="Concept to Platform">
                <p>{home.conceptBody}</p>
            </Section>

            <Section title="Development Notes">
                {aboutProject.conceptToPlatform.map((p, idx) => <p key={idx}>{p}</p>)}
            </Section>
        </div>
    );
}
