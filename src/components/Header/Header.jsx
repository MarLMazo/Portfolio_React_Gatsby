import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';


const Header = () => {
  const { header } = useContext(PortfolioContext);
  const {logo, menus} = header;

  return (
    <header id="header" className="header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">{(img !== null || img !== '') ? <img src={img} alt="image alt" /> : title}</a> */}
        <Link className="navbar-brand" to='hero' smooth duration={1000}>MarLMazo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
          {menus && menus.map((menu, index)=>{
                    const {title, location} = menu;
                    return(
                        <li key={index} className="nav-item active"><Link className="nav-link" to={location} smooth duration={1000}>{title}</Link></li>
                    )
                    })}  
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    

    </header>
  );
};

export default Header;
