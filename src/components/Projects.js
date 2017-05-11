import React, {Component} from 'react';
import '../App.css';
import './Projects.css';
import ProjectPopups from './ProjectPopups.js';
import clemo from "./img/clemo.png";
import easyBook from "./img/easybook.png";
import funSite from "./img/fun-site.png";
import charityProject from "./img/CharityProject.png";
import weatherapp from "./img/weatherapp.png";
import GAcards from "./img/GAcards.png";
import comingSoon from "./img/coming soon.jpg";


function project1(){
  document.getElementById('project1').style.display='block';
  document.getElementById('project2').style.display='none';
  document.getElementById('project3').style.display='none';
  document.getElementById('project4').style.display='none';
  document.getElementById('project5').style.display='none';
  document.getElementById('project6').style.display='none';
  document.getElementById('project7').style.display='none';
}

function project2(){
  document.getElementById('project2').style.display='block';
  document.getElementById('project1').style.display='none';
  document.getElementById('project3').style.display='none';
  document.getElementById('project4').style.display='none';
  document.getElementById('project5').style.display='none';
  document.getElementById('project6').style.display='none';
  document.getElementById('project7').style.display='none';
}

function project3(){
  document.getElementById('project3').style.display='block';
  document.getElementById('project1').style.display='none';
  document.getElementById('project2').style.display='none';
  document.getElementById('project4').style.display='none';
  document.getElementById('project5').style.display='none';
  document.getElementById('project6').style.display='none';
  document.getElementById('project7').style.display='none';
}

function project4(){
  document.getElementById('project4').style.display='block';
  document.getElementById('project1').style.display='none';
  document.getElementById('project2').style.display='none';
  document.getElementById('project3').style.display='none';
  document.getElementById('project5').style.display='none';
  document.getElementById('project6').style.display='none';
  document.getElementById('project7').style.display='none';
}

function project5(){
  document.getElementById('project5').style.display='block';
  document.getElementById('project1').style.display='none';
  document.getElementById('project2').style.display='none';
  document.getElementById('project3').style.display='none';
  document.getElementById('project4').style.display='none';
  document.getElementById('project6').style.display='none';
  document.getElementById('project7').style.display='none';
}

function project6(){
  document.getElementById('project6').style.display='block';
  document.getElementById('project1').style.display='none';
  document.getElementById('project2').style.display='none';
  document.getElementById('project3').style.display='none';
  document.getElementById('project4').style.display='none';
  document.getElementById('project5').style.display='none';
  document.getElementById('project7').style.display='none';
}

function project7(){
  document.getElementById('project7').style.display='block';
  document.getElementById('project1').style.display='none';
  document.getElementById('project2').style.display='none';
  document.getElementById('project3').style.display='none';
  document.getElementById('project4').style.display='none';
  document.getElementById('project5').style.display='none';
  document.getElementById('project6').style.display='none';
}

function closePopup(){
  document.getElementById('project1').style.display='none';
  document.getElementById('project2').style.display='none';
  document.getElementById('project3').style.display='none';
  document.getElementById('project4').style.display='none';
  document.getElementById('project5').style.display='none';
  document.getElementById('project6').style.display='none';
  document.getElementById('project7').style.display='none';
  console.log('clicked')
}

var innerPopup = {
  marginTop: '10%',
};

class Projects extends Component{
  render(){
    return(
      <section className="projects">

        <ProjectPopups/>

        <div className="flex-row">
          <div className="container">

            <div className="image-link" onClick={project1}>
              <img src={clemo} alt=""/>
            </div>
            <div className="image-link" onClick={project2}>
              <img src={funSite} alt=""/>
            </div>
            <div className="image-link" onClick={project3}>
              <img src={easyBook} alt=""/>
            </div>
            <div className="image-link" onClick={project4}>
              <img src={charityProject} alt=""/>
            </div>

          </div>
        </div>

        <div className="flex-row">
          <div className="container offset">
            <div className="image-link" onClick={project5}>
              <img src={weatherapp} alt=""/>
            </div>
            <div className="image-link" onClick={project6}>
              <img src={GAcards} alt=""/>
            </div>
            <div className="image-link" onClick={project7}>
              <img src={comingSoon} alt=""/>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Projects;
