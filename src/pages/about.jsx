import React from "react";
import Section from "../components/section.jsx";
import { aboutProject } from "../data/content.js";

export default function About() {
    return (
        <div>

            <Section title="How The Project was Built">
                {aboutProject.conceptToPlatform.map((p, idx) => <p key={idx}>{p}</p>)}
            </Section>

            <Section title="Literacy and Interpretation">
                {aboutProject.literacyAndInterpretation.map((p, idx) => <p key={idx}>{p}</p>)}
            </Section>

            <Section title="Learning Goal">
                <p>{aboutProject.learningGoal}</p>
            </Section>

            <Section title="Ethical Statement">
                {aboutProject.ethicalStatement.map((p, idx) => <p key={idx}>{p}</p>)}
            </Section>

            <Section title="References">
                <p>
                    Placeholder section. Add your Harvard references here (as your doc requires).
                </p>
            </Section>
        </div>
    );
}
