import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li><a target="_blank" href="https://github.com/sgoldgar">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/sgoldgar/">
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a></li>
          <li><a target="_blank" href="http://codepen.io/sgoldgar/">
            <i className="fa fa-codepen fa-2x" aria-hidden="true"></i>
          </a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
