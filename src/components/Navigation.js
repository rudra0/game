import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import {Link} from 'react-scroll'
import './Navigation.css'
import the from './asset/the.png'
const Navigation = () => {
   return (
        <Nav className="navbar navbar-expand-sm bg-light navbar-dark sticky-top" >
          
          <Link className="navbar-brand" to="gamedikha"><img src={the} height="50" width="40"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="home">
                    <NavLink to='/' >Home</NavLink>
                </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="about">
                    <NavLink to='/about'>About</NavLink>
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  <NavLink to='/contact'>Contact</NavLink>
                </Link>
              </li>
            </ul>
          </div>
        </Nav>




    );
}

export { Navigation };
