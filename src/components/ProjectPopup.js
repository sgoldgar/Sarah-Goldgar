import React, {Component} from 'react';
import '../App.css';
import './ProjectPopup.css';


class ProjectPopup extends Component{
  constructor(props){
    super(props)
  }

  closePopup(){
    console.log('clicked')
    this.props.onCloseButton()
  }

  render(){
    if (this.props.isOpen) {

      return(
          <div className="popup-row">
            <div className="popup">
              <div className="popup-inner">
                <div className="popup-content">
                  <h3 style={{color: 'white'}}>{this.props.popupData.title}</h3>
                  <img src={this.props.popupData.image} alt=" "></img>
                  <p>{this.props.popupData.description}</p>
                  <div className="popup-links">
                    <a target="_blank" href={this.props.popupData.webLink}>Live Site</a>
                    <a target="_blank" href={this.props.popupData.githubLink}>Github</a>
                  </div>
                  <p className="close" onClick={this.closePopup.bind(this)}>Close</p>
                </div>
              </div>
            </div>
          </div>

      )
    }
    else {
      return(
        null
      )
    }
  }
}

export default ProjectPopup;
