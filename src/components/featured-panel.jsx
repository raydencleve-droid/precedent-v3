import React from "react";

export default function FeaturedPanel({ title, children, action }) {
    return (
        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-8 flex gap-8 items-center">
            <div className="flex-1">
                {title && (
                    <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                        {title}
                    </h2>
                )}
                <div className="text-slate-700 leading-relaxed">
                    {children}
                </div>

                {action && (
                    <div className="mt-6">
                        {action}
                    </div>
                )}
            </div>
        </section>
    );
}
