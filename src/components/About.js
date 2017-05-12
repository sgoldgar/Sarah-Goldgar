import React, {Component} from 'react';
import '../App.css';
import './About.css';
import AboutContent from './AboutContent.js';
// import Resume from './img/Sarah_Goldgar-Resume.pdf'


class About extends Component{
  constructor(props){
    super(props)
    this.state = {
      rotateAbout : [
        {
          tag: 'Front-end web developer with full stack knowledge.',
          intro: 'Proficient in:',
          description: 'Languages: HTML • CSS • Javascript • jQuery • C++ • Sass • Python • ES6 Frameworks: Node • React • React-Native • Angular • Express Databases: MongoDB • Firebase Other: Mongoose • React Router • Creating RESTful Apps • Auth0 • oAuth Soft Skills: Agile • Photoshop'
        },
        {
          tag: 'Former entertainment and intellectual property attorney.',
          intro: 'Specializations:',
          description: 'Copyright Registration and Protection • Trademark Protection and Registration • DMCA • Small Business Organization • LLC and Non-profit Creation • Sponsorship, Independent Contractor, Employment, and Venue Rental Agreements'
        },
        {
          title: 'Formally trained in film production.',
          intro: 'Trained in:',
          description: 'Producing small projects • Screenwriting • Final Cut Pro • Avid • Technical Operations • Film theory and design'
        }
      ],
      currentRotate: null,
      resumeClicked: false
    }
  }
  render(){
    return(
      <section className="about">

        <AboutContent aboutContentData={this.state.rotateAbout[this.state.currentRotate]}
        />

        <div className="flex-row experience">
          <div className="container">
            <div className="circle" onClick={() => {this.setState({currentRotate:0, resumeClicked: false})}}>
              <p>Web Dev</p>
            </div>
            <div className="circle" onClick={() => {this.setState({currentRotate:1, resumeClicked:false})}}>
              <p>Law</p>
            </div>
            <div className="circle" onClick={() => {this.setState({currentRotate:2, resumeClicked:false})}}>
              <p>Film</p>
            </div>
            <div className="circle" onClick={() => {this.setState({resumeClicked:true})}}><p>Resume</p></div>
          </div>
        </div>

      </section>
    )
  }
}

export default About;
