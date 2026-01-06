import React from "react";
import Section from "../components/section.jsx";

export default function CaseTreatyOfVersailles() {
    return (
        <div>
            <Section title="The Treaty of Versailles (1919)">
                <p>
                    Your uploaded file only contained the title. This page is structured per your required case-study format.
                </p>
            </Section>

            <Section title="Context Overview">
                <ul className="list-disc pl-5">
                    <li><b>Time period:</b> 1919 (expand)</li>
                    <li><b>Geographic factors:</b> (add)</li>
                    <li><b>Background conditions:</b> (add)</li>
                </ul>
            </Section>

            <Section title="The Situation">
                <ul className="list-disc pl-5">
                    <li><b>What was happening:</b> (add)</li>
                    <li><b>Why decisions mattered:</b> (add)</li>
                </ul>
            </Section>

            <Section title="Key Decisions">
                <ul className="list-disc pl-5">
                    <li><b>Options available:</b> (add)</li>
                    <li><b>Constraints faced:</b> (add)</li>
                </ul>
            </Section>

            <Section title="Outcomes & Consequences">
                <ul className="list-disc pl-5">
                    <li><b>Short-term effects:</b> (add)</li>
                    <li><b>Long-term impact:</b> (add)</li>
                </ul>
            </Section>

            <Section title="Reflection Prompt">
                <p>(Add an open-ended question for users.)</p>
            </Section>
        </div>
    );
}
