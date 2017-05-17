import React, {Component} from 'react';
import '../App.css';
import './About.css';
import AboutContent from './AboutContent.js';
import Resume from './img/Sarah_Goldgar-Resume.pdf'


class About extends Component{
  constructor(props){
    super(props)
    this.state = {
      rotateAbout : [
        {
          id: 'personal-about',
          tag:'',
          description: 'I\'m an Austin native who left to pursue a film degree, returned with a law degree, and now am focused on growing my skills and career in front-end web development. I have a dog named Virginia Woof and we like to go on hikes and hang out in the backyard. In my spare time I take pictures, play RPGs and board games, and try my hand at pixel art and css animations.'
        },
        {
          id: 'webdev',
          tag: 'Front-end web developer with full stack knowledge.',
          description: 'HTML • CSS • Javascript • jQuery • C++ • Sass • Python • ES6 • Node • React • React-Native • Angular • Express • MongoDB • Firebase • Mongoose • React Router • REST Apps • Auth0 • oAuth • Agile • Photoshop'
        },
        {
          id: 'law',
          tag: 'Former entertainment and intellectual property attorney.',
          description: 'Copyright Registration and Protection • Trademark Protection and Registration • DMCA • Small Business Organization • LLC and Non-profit Creation • Sponsorship, Independent Contractor, Employment, and Venue Rental Agreements'
        },
        {
          id: 'film',
          tag: 'Formally trained in film production.',
          description: 'Producing small projects • Screenwriting • Final Cut Pro • Avid • Technical Operations • Film theory and design'
        },
        {
          id: 'resume',
          tag: <a href={Resume} download><i className="fa fa-download fa-5x" aria-hidden="true"></i></a>,
          description: <a href={Resume} download>Download a copy of my resume</a>
        }
      ],
      currentRotate: 0
    }
  }
  render(){
    return(
      <section className="about">

        <AboutContent aboutContentData={this.state.rotateAbout[this.state.currentRotate]}/>

        <div className="flex-row experience">
          <div className="container">
            <div className="circle" onClick={() => {this.setState({currentRotate:1})}}>
              <p>Web Dev</p>
            </div>
            <div className="circle" onClick={() => {this.setState({currentRotate:2})}}>
              <p>Law</p>
            </div>
            <div className="circle" onClick={() => {this.setState({currentRotate:3})}}>
              <p>Film</p>
            </div>
            <div className="circle" onClick={() => {this.setState({currentRotate:4})}}>
              <p>Resume</p>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default About;
