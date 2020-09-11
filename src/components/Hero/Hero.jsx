import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link, scroller } from 'react-scroll';
import PortfolioContext from '../../context/context';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const scrollto = (loc) =>{
    scroller.scrollTo(loc, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
          </h1>
          <p className="hero-subtitle">
            <ReactTypingEffect text={subtitle} speed="200" typingDelay="0" eraseDelay="300"/>
          </p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <button
              type="button"
              className="cta-btn cta-btn--hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollto('about');
                }}>
              <span duration={1000} tabIndex="0">
                {cta || 'Know more'}
              </span>
            </button>
          </p>
        </Fade>
        <div className="waves"></div>
      </Container>
      
    </section>
  );
};

export default Header;
