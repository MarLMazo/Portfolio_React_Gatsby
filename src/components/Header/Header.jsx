import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';


const Header = () => {
  const { header } = useContext(PortfolioContext);
  const {logo, menus} = header;
  const [iconToggle, seticonToggle]= useState(true);

  const toggleIcon = () =>{
    seticonToggle(!iconToggle);
  }
  
  return (
    <header id="header" className="header">
      <Navbar sticky="top" expand="lg" bg="light" variant="light">
         {/* <a className="navbar-brand" href="#">{(img !== null || img !== '') ? <img src={img} alt="image alt" /> : title}</a>  */}
        <Navbar.Brand>
          <Link className="navbar-brand" to='hero' smooth duration={1000}>MarLMazo</Link>
        </Navbar.Brand>
        <Navbar.Toggle className={(iconToggle) ? "navbar-toggler" : "navbar-toggler active"} onClick={toggleIcon} aria-controls="basic-navbar-nav" >
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <ul className="navbar-nav">
            {menus && menus.map((menu, index)=>{
                      const {title, location, samePage} = menu;
                      if(samePage){
                        return(
                          <li key={index} className="nav-item"><Link className="nav-link" to={location} smooth duration={1000}>{title}</Link></li>
                        )
                      }else{
                        return(
                          <li key={index} className="nav-item"><a href={location} className="nav-link">{title}</a></li >
                        )       
                      }
                      
                      })}  
            </ul>
           {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </Navbar.Collapse >
      </Navbar> 
    

    </header>
  );
};

export default Header;
