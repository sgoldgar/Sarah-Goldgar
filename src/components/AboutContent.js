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
          <p><strong>{this.props.aboutContentData.tag}</strong></p>
          <p>{this.props.aboutContentData.description}</p>
        </div>
      )
  }
}

export default AboutContent;
