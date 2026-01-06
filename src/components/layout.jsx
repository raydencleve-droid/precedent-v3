import React from "react";
import Sidebar from "./sidebar.jsx";
import Hero from "./hero.jsx";


export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Hero />
                <main className="flex-1 bg-white">
                    <div className="mx-auto max-w-6xl px-6 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
