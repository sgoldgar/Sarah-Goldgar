import React, {Component} from 'react';
import '../App.css';
import About from './About.js';
import './About.css';
import Resume from './img/Sarah_Goldgar-Resume.pdf';



class AboutContent extends Component{
  constructor(props){
    super(props);
  }
  render(){
      return (
        <div id={this.props.aboutContentData.id}>
          <p>{this.props.aboutContentData.tag}</p>
          <p className="skillset">{this.props.aboutContentData.description}</p>
        </div>
      )
  }
}

export default AboutContent;
