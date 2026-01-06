import React from "react";
import Section from "../components/section.jsx";
import { regions } from "../data/content.js";

export default function RegionEurope() {
    const r = regions.europe;
    return (
        <div>
            <Section title={r.title}>
                <h3 className="text-lg font-semibold text-slate-900">Brief Regional Background</h3>
                <p>{r.brief}</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-4">Key Historical and Geographical Constraints</h3>
                <p>{r.constraints}</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-4">Why This Region Matters for Decision-Making</h3>
                <p>{r.whyMatters}</p>
            </Section>
        </div>
    );
}
