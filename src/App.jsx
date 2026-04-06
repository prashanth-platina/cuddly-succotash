import { useEffect } from 'react';
import useScrollReveal from './hooks/useScrollReveal';

import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import SidebarNav from './components/SidebarNav';
import FloatingCta from './components/FloatingCta';
import MobileMenu from './components/MobileMenu';
import MarqueeBar from './components/MarqueeBar';
import Hero from './components/Hero';
import IngredientsBar from './components/IngredientsBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Profiles from './components/Profiles';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const mainRef = useScrollReveal();

  // Parallax floating orbs on scroll
  useEffect(() => {
    const orbSpeeds = [0.03, -0.02, 0.04, -0.03, 0.025];
    const onScroll = () => {
      const orbs = document.querySelectorAll('.floating-orb');
      const scrollY = window.scrollY;
      orbs.forEach((orb, i) => {
        const speed = orbSpeeds[i % orbSpeeds.length];
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <SidebarNav />
      <FloatingCta />
      <MobileMenu />
      <MarqueeBar />

      <main id="main" ref={mainRef}>
        <Hero />
        <IngredientsBar />
        <About />
        <Skills />
        <Projects />
        <Profiles />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
