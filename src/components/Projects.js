import React, {Component} from 'react';
import '../App.css';
import './Projects.css';
import clemo from "./img/clemo.png";
import easyBook from "./img/easybook.png";
import funSite from "./img/fun-site.png";
import charityProject from "./img/CharityProject.png";
import weatherapp from "./img/weatherapp.png";
import GAcards from "./img/GAcards.png";
import comingSoon from "./img/coming soon.jpg";
import ClemoSplash from './img/Clemo splash.png'


class Projects extends Component{
  render(){
    return(
      <section className="projects">
        <div style={{display:'none'}} className="popup" id="project1">
            <img src={ClemoSplash}/>
            <p>Description</p>
            <a target="_blank" href="https://github.com/sgoldgar/clemo"></a>
        </div>

        <div className="flex-row">
          <div className="container">
            <div className="image-link"><a target="_blank" href="https://github.com/sgoldgar/clemo"><img src={clemo} alt=""/></a></div>
            <div className="image-link"><a target="_blank" href="https://github.com/sgoldgar/fun_layout_site"><img src={funSite} alt=""/></a></div>
            <div className="image-link"><a target="_blank" href="https://www.canva.com/design/DACGDjbjycQ/UK-WAR13Zp5NJPXF7G9_uA/view?utm_content=DACGDjbjycQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"><img src={easyBook} alt=""/></a></div>
            <div className="image-link"><a target="_blank" href="https://github.com/sgoldgar/charityProject"><img src={charityProject} alt=""/></a></div>
          </div>
        </div>
        <div className="flex-row">
          <div className="container offset">
            <div className="image-link"><a traget="_blank" href="https://github.com/sgoldgar/weatherapp-customization"><img src={weatherapp} alt=""/></a></div>
            <div className="image-link"><a href="https://ga-cards-7ceed.firebaseapp.com/#/"><img src={GAcards} alt=""/></a></div>
            <div className="image-link"><a><img src={comingSoon} alt=""/></a></div>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;
