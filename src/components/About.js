import React, {Component} from 'react';
import '../App.css';
import './About.css';

class About extends Component{
  render(){
    return(
      <section className="about">
        <h1>About Me</h1>
        <div className="flex-row experience">
          <div className="container">
            <div className="circle grey"><a>Web Dev</a></div>
            <div className="circle cream"><a>Law</a></div>
            <div className="circle grey"><a>Film</a></div>
            <div className="circle cream"><a>Resume</a></div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
