import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import RoutesPage from './pages/Routes';
import Culture from './pages/Culture';
import Hotels from './pages/Hotels';
import Guides from './pages/Guides';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('bajhang-theme');
    return saved || 'light';
  });

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('bajhang-theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
