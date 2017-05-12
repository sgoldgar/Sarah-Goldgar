import React, {Component} from 'react';
import '../App.css';
import './Projects.css';
import ProjectPopup from './ProjectPopup.js';
import clemo from "./img/clemo.png";
import easyBook from "./img/easybook.png";
import funSite from "./img/fun-site.png";
import charityProject from "./img/CharityProject.png";
import weatherapp from "./img/weatherapp.png";
import GAcards from "./img/GAcards.png";
import wethepeople from './img/Wethepeople.png';
import comingSoon from "./img/coming soon.jpg";

//splash site images for popups
import ClemoSplash from './img/Clemo splash.png';
import FunsiteSplash from './img/Funsite splash.png';
import EasyBookSplash from './img/Easybook splash.png';
import WeatherappSplash from './img/Weatherapp splash.png';
import WethepeopleSplash from './img/Wethepeople splash.png';
import CharityprojectSplash from './img/Charityproject splash.png';
import GAcardSplash from './img/GAcard splash.png';


var innerPopup = {
  marginTop: '10%',
};

class Projects extends Component{
  constructor(props){
    super(props)
    this.state = {
      popups : [
        {
          title: 'GA Cards',
          description: 'Class lab to build a React app to make Cards Against Humanity style cards, stored in Firebase database, deployed on Firebase',
          image: GAcardSplash,
          webLink: 'https://ga-cards-7ceed.firebaseapp.com/#/',
          githubLink: 'https://github.com/sgoldgar/ga-cards-react'
        },
        {
          title: 'Circle Theme',
          description: 'Personal site with a fun circle layout',
          image: FunsiteSplash,
          webLink: 'https://sgoldgar.github.io/fun_layout_site/',
          githubLink: 'https://github.com/sgoldgar/fun_layout_site'
        },
        {
          title: 'Easy Book',
          description: 'General Assembly UX Circuit final project -- easy flight booking on the go',
          image: EasyBookSplash,
          webLink: 'https://sgoldgar.github.io/Easy-Book/',
          githubLink: 'https://www.canva.com/design/DACGDjbjycQ/UK-WAR13Zp5NJPXF7G9_uA/view?utm_content=DACGDjbjycQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'
        },
        {
          title: 'Charity Wish',
          description: 'Project with UX class to create site that connects charities and donors',
          image: CharityprojectSplash,
          webLink: 'https://github.com/sgoldgar/charityProject',
          githubLink: 'https://github.com/sgoldgar/charityProject'
        },
        {
          title: 'Weather App',
          description: 'Weather App using Open Weather API and Google Maps API',
          image: WeatherappSplash,
          webLink: 'https://sgoldgar.github.io/weatherapp-customization/',
          githubLink: 'https://github.com/sgoldgar/weatherapp-customization/tree/master'
        },
        {
          title: 'We the People',
          description: 'Group project, React Native iphone app to help people get in touch with their representatives',
          image: WethepeopleSplash,
          webLink: '',
          githubLink: 'https://github.com/sgoldgar/wethepeople'
        },
        {
          title: 'COMING SOON',
          description: 'A Unity game for childen and a splash site with mini-game',
          image: comingSoon,
          webLink: '',
          githubLink: ''
        }
      ],
      currentPopupIndex: null
    }
  }

  render(){
    return(

      <section className="projects">
        <ProjectPopup
          popupData={this.state.popups[this.state.currentPopupIndex]}
          isOpen={this.state.currentPopupIndex !== null}
          onCloseButton={() => {this.setState({currentPopupIndex: null})}}
          />

        <div className="flex-row">
          <div className="container">

            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:0})}}>
              <img src={GAcards} alt=""/>
            </div>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:1})}}>
              <img src={funSite} alt=""/>
            </div>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:2})}}>
              <img src={easyBook} alt=""/>
            </div>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:3})}}>
              <img src={charityProject} alt=""/>
            </div>

          </div>
        </div>

        <div className="flex-row">
          <div className="container offset">
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:4})}}>
              <img src={weatherapp} alt=""/>
            </div>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:5})}}>
              <img src={wethepeople} alt=""/>
            </div>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:6})}}>
              <img src={comingSoon} alt=""/>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Projects;
