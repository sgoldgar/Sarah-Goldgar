import React, { Component } from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="flex-row">
              <div className="my-logo">
                <a><img src="./img/ginny.jpg" alt="ginny-logo"/></a>
              </div>
              <nav>
                <ul>
                  <li className="navigation-link"><IndexLink to="/" activeClassName="active" className="link">home</IndexLink></li>
                  <li className="navigation-link"><Link to="/about" activeClassName="active" className="link">about</Link></li>
                  <li className="navigation-link"><Link to="/projects" activeClassName="active" className="link">projects</Link></li>
                  <li className="navigation-link"><a href="https://medium.com/pear-programming">blog</a></li>
                  <li className="navigation-link"><Link to="/contact" activeClassName="active" className="link">contact</Link></li>
                </ul>
              </nav>
          </div>
        </header>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
