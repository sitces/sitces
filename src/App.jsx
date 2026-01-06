import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import Vision from './components/Vision.jsx';
import Events from './components/Events.jsx';
import Team from './components/Team.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <Navbar />
      <Home />
      <AboutUs />
      <Vision />
      <Events />
      <Team />
      <Footer />
        {/* Decorative Elements */}
      <div className="absolute top-20 right-40 w-32 h-32 border-2 border-purple-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-purple-400 rounded-full opacity-20"></div>
    </div>
  );
}