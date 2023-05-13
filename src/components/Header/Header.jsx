import React, { useContext, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { header } = useContext(PortfolioContext);
  const { menus } = header;

  const [iconToggle, seticonToggle] = useState(true);
  const toggleIcon = () => {
    seticonToggle(!iconToggle);
  };

  return (
    <header id="header" className="header">
      <Navbar sticky="top" expand="lg" bg="light" variant="light">
        {/* <a className="navbar-brand" href="#">{(img !== null || img !== '') ? <img src={img} alt="image alt" /> : title}</a>  */}
        <Navbar.Brand>
          <Link className="navbar-brand" to="hero" smooth duration={1000}>
            marlmazo
          </Link>
          {/* <LogoImg alt="profile picture" filename='main_logo.png' /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          className={iconToggle ? 'navbar-toggler' : 'navbar-toggler active'}
          onClick={toggleIcon}
          aria-controls="basic-navbar-nav"
        >
          <span className="toggle-icon" />
          <span className="toggle-icon" />
          <span className="toggle-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <ul className="navbar-nav">
            {menus &&
              menus.map((menu) => {
                const { title, location, samePage } = menu;
                if (samePage) {
                  return (
                    <li key={`menu-${title}`} className="nav-item">
                      <Link className="nav-link" to={location} smooth duration={1000}>
                        {title}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li className="nav-item">
                    <a href={location} className="nav-link">
                      {title}
                    </a>
                  </li>
                );
              })}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
