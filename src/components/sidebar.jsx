import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { navGroups } from "../data/nav.js";

function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Section({ heading, items, query }) {
    // Filter items based on search
    const filteredItems = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter((i) => i.label.toLowerCase().includes(q));
    }, [items, query]);

    // If searching and nothing matches, hide the section
    if (query.trim() && filteredItems.length === 0) return null;

    return (
        <div className="group">
            {/* Section header only */}
            <div className="px-2 text-[11px] uppercase tracking-wider text-slate-400 mb-2">
                {heading}
            </div>

            {/* Hidden by default, revealed on hover OR when searching */}
            <div
                className={cx(
                    "space-y-1 pl-1",
                    query.trim()
                        ? "block"
                        : "hidden group-hover:block"
                )}
            >
                {filteredItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            cx(
                                "block px-3 py-2 rounded-lg text-sm transition",
                                isActive
                                    ? "bg-slate-800 text-white"
                                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                            )
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default function Sidebar() {
    const [q, setQ] = useState("");

    return (
        <aside className="w-72 shrink-0 bg-slate-900/70 border-r border-slate-800 sticky top-0 h-screen overflow-y-auto">

            <div className="px-5 py-5 border-b border-slate-800">
                <div className="text-xl font-semibold tracking-tight">Precedent</div>
                <div className="text-xs text-slate-400 mt-1">
                    Understanding the past, interpreting the present.
                </div>

                <div className="mt-4">
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search"
                        className="w-full rounded-lg bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm outline-none focus:border-slate-600"
                    />
                </div>
            </div>

            <nav className="px-3 py-4 space-y-5">
                {navGroups.map((group) => (
                    <Section
                        key={group.heading}
                        heading={group.heading}
                        items={group.items}
                        query={q}
                    />
                ))}
            </nav>



        </aside >
    );
}
