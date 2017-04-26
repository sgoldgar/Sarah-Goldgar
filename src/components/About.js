import React, {Component} from 'react';
import '../App.css';
import './About.css';

class About extends Component{
  render(){
    return(
      <section className="about">
        <div className="flex-row experience">
          <div className="container">
            <div className="circle"><a>Web Dev</a></div>
            <div className="circle"><a>Law</a></div>
            <div className="circle"><a>Film</a></div>
            <div className="circle"><a>Resume</a></div>
          </div>
        <div className="row">
          <p className="more-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
      </section>
    )
  }
}

export default About;
