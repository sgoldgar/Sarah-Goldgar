import React, {Component} from 'react';
import '../App.css';
import comingSoon from "./img/coming soon.jpg";
import ClemoSplash from './img/Clemo splash.png';

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

class ProjectPopups extends Component{
  render(){
    return(
      <div>

        <div style={{display:'none'}} className="popup" id="project1">
          <div className="popup-inner" style={innerPopup}>
            <h3>Clemo</h3>
            <img src={ClemoSplash} alt=""></img>
            <p>Class exercise to build site for design firm based on mockups and design notes.</p>
            <a href="https://sgoldgar.github.io/clemo/">Site</a>
            <a href="https://github.com/sgoldgar/clemo">Github</a>
            <p className="close" onClick={closePopup}>Close</p>
          </div>
        </div>

        <div style={{display:'none'}} className="popup" id="project2">
          <div className="popup-inner" style={innerPopup}>
            <h3>Circle Layout Site</h3>
            <img src={ClemoSplash} alt=""></img>
            <p>Personal site with a fun circle layout</p>
            <a href="https://sgoldgar.github.io/fun_layout_site/">Site</a>
            <a href="https://github.com/sgoldgar/fun_layout_site">Github</a>
            <p className="close" onClick={closePopup}>Close</p>
          </div>
        </div>

        <div style={{display:'none'}} className="popup" id="project3">
          <div className="popup-inner" style={innerPopup}>
            <h3>Easy Book</h3>
            <img src={ClemoSplash} alt=""></img>
            <p>General Assembly UX Circuit final project -- easy flight booking on the go</p>
            <a href="https://sgoldgar.github.io/Easy-Book/">Site</a>
            <a href="https://www.canva.com/design/DACGDjbjycQ/UK-WAR13Zp5NJPXF7G9_uA/view?utm_content=DACGDjbjycQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">Github</a>
            <p className="close" onClick={closePopup}>Close</p>
          </div>
        </div>

        <div style={{display:'none'}} className="popup" id="project4">
          <div className="popup-inner" style={innerPopup}>
            <h3>Charity Project</h3>
            <img src={ClemoSplash} alt=""></img>
            <p>Project with UX class to create site that connects charities and donors</p>
            <a href="https://github.com/sgoldgar/charityProject">Site</a>
            <a href="https://github.com/sgoldgar/charityProject">Github</a>
            <p className="close" onClick={closePopup}>Close</p>
          </div>
        </div>

        <div style={{display:'none'}} className="popup" id="project5">
          <div className="popup-inner" style={innerPopup}>
            <h3>Weather App</h3>
            <img src={ClemoSplash} alt=""></img>
            <p>Weather App using Open Weather API and Google Maps API</p>
            <a href="https://sgoldgar.github.io/weatherapp-customization/">Site</a>
            <a href="https://github.com/sgoldgar/weatherapp-customization/tree/master">Github</a>
            <p className="close" onClick={closePopup}>Close</p>
          </div>
        </div>

        <div style={{display:'none'}} className="popup" id="project6">
          <div className="popup-inner" style={innerPopup}>
            <h3>GA Cards</h3>
            <img src={ClemoSplash} alt=""></img>
            <p>Cards Against Humanity style cards made for lab</p>
            <a href="https://ga-cards-7ceed.firebaseapp.com/#/">Site</a>
            <a href="https://github.com/sgoldgar/ga-cards-react">Github</a>
            <p className="close" onClick={closePopup}>Close</p>
          </div>
        </div>

        <div style={{display:'none'}} className="popup" id="project7">
          <div className="popup-inner" style={innerPopup}>
            <h3>COMING SOON</h3>
            <img src={comingSoon} alt=""></img>
            <p>A Unity game for childen and a splash site with mini-game</p>
            <a>Site</a>
            <a>Github</a>
            <p className="close" onClick={closePopup}>Close</p>
          </div>
        </div>
        
      </div>
    )
  }
}

export default ProjectPopups;
