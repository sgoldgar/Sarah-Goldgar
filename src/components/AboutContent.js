import React, {Component} from 'react';
import '../App.css';
import './About.css';
import Resume from './img/Sarah_Goldgar-Resume.pdf'


class AboutContent extends Component{
  constructor(props){
    super(props);
  }
  render(){

    if (this.props.currentRotate == null) {
      return (
        <div id="personal-about">
          <p>I'm an Austin native who left to pursue a film degree, returned with a law degree, and now am focused on growing my skills and career in front-end web development. I have a dog named Virginia Woof (Ginny for short-- click her picture in the nav bar for some cute pictures) and we like to go on hikes and hang out in the backyard (I read sci-fi and mysteries and she digs up my hard work in the garden). In my spare time I take pictures, play RPGs and board games, and try my hand at pixel art and css animations.
          </p>
        </div>
      )
    }
    else if (this.props.resumeClicked){
      return(
        <div style={{display:'none'}} id="resume">
            <a href={Resume} download><i className="fa fa-download fa-5x" aria-hidden="true"></i></a>
            <a href={Resume} download>Download a copy of my resume</a>
        </div>
      )
    }
    else {
      return(
          <div style={{display:'none'}}>
            <p><strong>{this.props.aboutContentData.tag}</strong></p>
            <p>this.props.aboutContentData.intro</p>
            <p>{this.props.aboutContentData.description}</p>
          </div>
      )
    }

  }
}

export default AboutContent;
