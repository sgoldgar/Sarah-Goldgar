import React, {Component} from 'react';
import '../App.css';
import './About.css';

function showWebDev(){
  document.getElementById('webdev').style.display='block';
  document.getElementById('law').style.display='none';
  document.getElementById('film').style.display='none';
  document.getElementById('personal-about').style.display='none';
  document.getElementById('resume').style.display='none';
}

function showLaw(){
  document.getElementById('law').style.display='block';
  document.getElementById('webdev').style.display='none';
  document.getElementById('film').style.display='none';
  document.getElementById('personal-about').style.display='none';
  document.getElementById('resume').style.display='none';
}

function showFilm(){
  document.getElementById('film').style.display='block';
  document.getElementById('law').style.display='none';
  document.getElementById('webdev').style.display='none';
  document.getElementById('personal-about').style.display='none';
  document.getElementById('resume').style.display='none';
}

function showResume(){
  document.getElementById('resume').style.display='block';
  document.getElementById('film').style.display='none';
  document.getElementById('law').style.display='none';
  document.getElementById('webdev').style.display='none';
  document.getElementById('personal-about').style.display='none';
}

class About extends Component{
  render(){
    return(
      <section className="about">
        <div id="personal-about">
          I'm an Austin native who left to pursue a film degree, returned with a law degree, and now am focused on
          growing my skills and career in front-end web development. I have a dog named Virginia Woof (Ginny for short-- click her picture in the nav bar for some cute pictures) and we like to go on hikes and read mysteries or sci-fi books in the backyard. In my spare time I make pixel art or css animations of cute animals, take pictures, and play RPGs or board games.
        </div>
        <div style={{display:'none'}} id="webdev">
          <strong>Front-end web developer with full stack knowledge.</strong>
          <br></br><br></br>
          Languages: HTML | CSS | Javascript | jQuery | C++ | Sass | Python | ES6 <br></br>
          Frameworks: Node | React | React-Native | Angular | Express <br></br>
          Databases: MongoDB | Firebase <br></br>
          Other: Mongoose | React Router | Creating RESTful Apps | Auth0 | oAuth <br></br>
          Soft Skills: Agile | Photoshop
        </div>
        <div style={{display:'none'}} id="law">
          <strong>Former entertainment and intellectual property attorney.</strong> <br></br><br></br>
          Specializations: <br></br>
          Copyright Registration and Protection | Trademark Protection and Registration <br></br>
          DMCA | Small Business Organization | LLC and Non-profit Creation <br></br>
          Sponsorship, Independent Contractor, Employment, and Venue Rental Agreements
        </div>
        <div style={{display:'none'}} id="film">
          <strong>Formally trained in film production.</strong> <br></br><br></br>
          Trained in: <br></br>
          Producing small projects | Screenwriting <br></br>
          Final Cut Pro | Avid | Technical Operations <br></br>
          Film theory and design
        </div>
        <div style={{display:'none'}} id="resume">
            <a href="./static/Sarah-Goldgar-Resume.pdf" download><i className="fa fa-download fa-5x" aria-hidden="true"></i></a>
            <a href="./static/Sarah-Goldgar-Resume.pdf" download>Download a copy of my resume</a>
        </div>

        <div className="flex-row experience">
          <div className="container">
            <div className="circle">
              <a onClick={showWebDev}>Web Dev</a>
            </div>
            <div className="circle">
              <a onClick={showLaw}>Law</a>
            </div>
            <div className="circle">
              <a onClick={showFilm}>Film</a>
            </div>
            <div className="circle"><a onClick={showResume}>Resume</a></div>
          </div>
        </div>

      </section>
    )
  }
}

export default About;
