import React, {Component} from 'react';
import '../App.css';
import './Projects.css';
import clemo from "./img/clemo.png";
import easyBook from "./img/easybook.png";
import funSite from "./img/fun-site.png";
import comingSoon from "./img/coming soon.jpg";

class Projects extends Component{
  render(){
    return(
      <section className="projects">
        <div className="flex-row">
          <div className="container">
            <div className="image-link"><a><img src={clemo} alt=""/></a></div>
            <div className="image-link"><a><img src={funSite} alt=""/></a></div>
            <div className="image-link"><a><img src={easyBook} alt=""/></a></div>
            <div className="image-link"><a><img src={comingSoon} alt=""/></a></div>
          </div>
        </div>
        <div className="flex-row">
          <div className="container offset">
            <div className="image-link"><a><img src={comingSoon} alt=""/></a></div>
            <div className="image-link"><a><img src={comingSoon} alt=""/></a></div>
            <div className="image-link"><a><img src={comingSoon} alt=""/></a></div>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;
