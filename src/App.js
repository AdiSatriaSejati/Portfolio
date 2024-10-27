import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Certifications from "./pages/Certifications/CertificationsPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectGame from "./pages/Project/ProjectGame";

/* Components */
import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"; // Import MusicPlayer
import Cursor from "./components/Cursor/Cursor"; // Import Cursor component

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);

        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === "visible") {
                document.title = "Adi Satria Sejati";
                document.querySelector("#favicon").setAttribute("href", "https://ik.imagekit.io/AdiSatriaSejati/Adi-Satria-Sejati.ico?updatedAt=1730032961594");
            } else {
                document.title = "Come Back";
                document.querySelector("#favicon").setAttribute("href", "https://ik.imagekit.io/AdiSatriaSejati/folded.png?updatedAt=1729174775087");
            }
        });

        return () => {
            document.removeEventListener('visibilitychange', function () {});
        };
    }, []);

    return (
        <>
            <RouterScrollTop />
            <MusicPlayer />
            <Cursor /> {}
            {loading ? (
                <div className='loading-pag'>
                    <div className="loader">
                        <span className="typing-animation">Wa'alaikumsalam</span>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Certifications" element={<Certifications />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/project/app" element={<ProjectApp />} />
                    <Route path="/project/game" element={<ProjectGame />} />
                </Routes>
            )}
        </>
    )
}

export default App;
