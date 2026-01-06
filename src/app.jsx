import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout.jsx";

import Home from "./pages/home.jsx";
import FurtherReadings from "./pages/further-readings.jsx";
import MapNavigation from "./pages/map-navigation.jsx";
import RegionAfrica from "./pages/region-africa.jsx";
import RegionEurope from "./pages/region-europe.jsx";
import RegionSoutheastAsia from "./pages/region-southeast-asia.jsx";



import About from "./pages/about.jsx";
import AboutConceptToPlatform from "./pages/about-concept-to-platform.jsx";

import CasePowerControlAuthority from "./pages/case-power-control-authority.jsx";
import CaseScrambleForAfrica from "./pages/case-scramble-for-africa.jsx";
import CaseAseanFormation from "./pages/case-asean-formation.jsx";
import CaseCooperationAndDiplomacy from "./pages/case-cooperation-and-diplomacy.jsx";
import CasePoliticalIdentity from "./pages/case-political-identity.jsx";


import News from "./pages/news.jsx";
import Events from "./pages/events.jsx";
import NotFound from "./pages/not-found.jsx";

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/further-readings" element={<FurtherReadings />} />

                <Route path="/map-navigation" element={<MapNavigation />} />
                <Route path="/map-navigation/africa" element={<RegionAfrica />} />
                <Route path="/map-navigation/europe" element={<RegionEurope />} />
                <Route path="/map-navigation/southeast-asia" element={<RegionSoutheastAsia />} />



                <Route path="/about" element={<About />} />
                <Route path="/about/concept-to-platform" element={<AboutConceptToPlatform />} />

                <Route path="/case-studies/power-control-authority" element={<CasePowerControlAuthority />} />
                <Route path="/case-studies/scramble-for-africa" element={<CaseScrambleForAfrica />} />
                <Route path="/case-studies/cooperation-and-diplomacy" element={<CaseCooperationAndDiplomacy />} />
                <Route path="/case-studies/political-identity" element={<CasePoliticalIdentity />} />




                <Route path="/case-studies/asean-formation" element={<CaseAseanFormation />} />


                <Route path="/news" element={<News />} />
                <Route path="/events" element={<Events />} />

                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}
