import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Perks from './components/Perks';
import Bespoke from './components/Bespoke';
import Guestbook from './components/Guestbook';
import Bakers from './components/Bakers';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-cocoa selection:bg-blush selection:text-cocoa">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Perks />
        <Bespoke />
        <Guestbook />
        <Bakers />
      </main>
      <Footer />
    </div>
  );
}
