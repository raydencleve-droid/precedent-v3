import React from "react";

export default function Section({ title, children, anchor }) {
    return (
        <section id={anchor} section className="text-slate-900 p-6 mb-8 max-w-4xl">
            {title ? <h2 className="text-2xl font-semibold mb-3">{title}</h2> : null}
            <div className="space-y-3 text-slate-700 leading-relaxed">
                {children}
            </div>
        </section>
    );
}
