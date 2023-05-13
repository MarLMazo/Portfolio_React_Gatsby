import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { scroller } from 'react-scroll';
import loadable from '@loadable/component';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { intro, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ReactTypingEffect = loadable(() => import('react-typing-effect'));
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const scrollto = (loc) => {
    scroller.scrollTo(loc, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {intro || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
          </h1>
          <div className="hero-subtitle">
            <ReactTypingEffect text={subtitle} speed="100" typingDelay="0" eraseDelay="1000" />
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <button
              type="button"
              className="cta-btn cta-btn--hero"
              onClick={(e) => {
                e.preventDefault();
                scrollto('about');
              }}
            >
              <span>{cta || 'Know more'}</span>
            </button>
          </p>
        </Fade>
        <div className="waves" />
      </Container>
    </section>
  );
};

export default Header;
