import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ParticleSystem from './ParticleSystem';
import LandingPage from './pages/Landing';
import SubHero from './pages/components/SubHero';
import Pricing2 from './pages/components/Pricing2';
import Maps from './pages/components/Maps';
import Action from './pages/components/Call2Action';
import Testimonials from "./pages/components/Testimonials";

function App() {

  

    return (
        <div className="App">
            <LandingPage/>
            <ParticleSystem />
            <SubHero />
            {/* <Pricing /> */}
            <Pricing2 />
            <div className="map-outer">
                <Maps />
            </div>
            <Action />
            <Testimonials />
        </div>
    );
}

export default App;

