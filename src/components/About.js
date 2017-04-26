import React, {Component} from 'react';
import '../App.css';
import './About.css';

function showWebDev(){
  document.getElementById('webdev').style.display='block';
  document.getElementById('law').style.display='none';
  document.getElementById('film').style.display='none';

}

function showLaw(){
  document.getElementById('law').style.display='block';
  document.getElementById('webdev').style.display='none';
  document.getElementById('film').style.display='none';
}

function showFilm(){
  document.getElementById('film').style.display='block';
  document.getElementById('law').style.display='none';
  document.getElementById('webdev').style.display='none';
}

class About extends Component{
  render(){
    return(
      <section className="about">
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
            <div className="circle"><a target="_blank" href="../public/resume.html">Resume</a></div>
          </div>
        </div>

        <div style={{display:'none'}} id="webdev">This is the lightbox content for webdev.</div>
        <div style={{display:'none'}} id="law">This is the lightbox content for law.</div>
        <div style={{display:'none'}} id="film">This is the lightbox content for film.</div>

      </section>
    )
  }
}

export default About;
