import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function WorldMap() {
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        let cancelled = false;

        async function loadSvg() {
            const res = await fetch("/maps/world.svg");
            const svgText = await res.text();
            if (cancelled) return;

            container.innerHTML = svgText;

            const svg = container.querySelector("svg");
            if (!svg) return;

            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "100%");
            svg.classList.add("map-svg");

            const bind = (id, to) => {
                const el = svg.querySelector(`#${CSS.escape(id)}`);
                if (!el) return;

                el.classList.add("map-region");
                el.style.cursor = "pointer";

                el.addEventListener("click", () => navigate(to));
                el.addEventListener("keydown", (e) => {
                    if (e.key === "Enter" || e.key === " ") navigate(to);
                });

                el.setAttribute("tabindex", "0");
                el.setAttribute("role", "link");
                el.setAttribute("aria-label", `Go to ${id} region page`);
            };

            bind("africa", "/map-navigation/africa");
            bind("europe", "/map-navigation/europe");
            bind("southeast-asia", "/map-navigation/southeast-asia");
        }

        loadSvg();

        return () => {
            cancelled = true;
            if (container) container.innerHTML = "";
        };
    }, [navigate]);

    return (
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="p-4 border-b border-slate-200">
                <div className="text-sm font-medium text-slate-900">Interactive Map</div>
                <div className="text-xs text-slate-600 mt-1">
                    Click a highlighted region to navigate.
                </div>
            </div>

            <div ref={ref} className="w-full h-[420px] bg-slate-50" />
        </div>
    );
}
