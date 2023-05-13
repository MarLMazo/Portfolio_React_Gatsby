import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  headerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [header, setHeader] = useState({});
  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });

    setProjects([...projectsData]);

    setContact({ ...contactData });
    setFooter({ ...footerData });
    setHeader({ ...headerData });
  }, []);

  return (
    <PortfolioProvider value={{ header, hero, about, projects, contact, footer }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
