import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/section.jsx";
import { regions } from "../data/content.js";

export default function RegionAfrica() {
    const r = regions.africa;
    return (
        <div>
            <Section title={r.title}>
                <h3 className="text-lg font-semibold text-slate-900">Brief Regional Background</h3>
                <p>{r.brief}</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-4">Geopolitical Constraints</h3>
                <p>{r.constraints}</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-4">Why This Region Matters for Decision-Making</h3>
                <p>{r.whyMatters}</p>

                <div className="mt-4">
                    <Link className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800"
                        to="/case-studies/scramble-for-africa">
                        Go to: Scramble for Africa case study →
                    </Link>
                </div>
            </Section>
        </div>
    );
}
