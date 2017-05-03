import React, { Component } from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';
import './Header.css';
import Ginny from './img/ginny.jpg'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="flex-row">
            <div className="my-logo">
              <a><Link to="/dogmom"><img src={Ginny} alt="ginny-logo"/></Link></a>
            </div>
            <nav className="tabs">
              <ul>
                <li className="navigation-link"><IndexLink to="/" activeClassName="active" className="link">home</IndexLink></li>
                <li className="navigation-link"><Link to="/about" activeClassName="active" className="link">about</Link></li>
                <li className="navigation-link"><Link to="/projects" activeClassName="active" className="link">projects</Link></li>
                <li className="navigation-link"><a target="_blank" href="https://medium.com/pear-programming">blog</a></li>
                <li className="navigation-link"><Link to="/contact" activeClassName="active" className="link">contact</Link></li>
              </ul>
            </nav>
        </div>
      </header>
    );
  }
}

export default Header;
