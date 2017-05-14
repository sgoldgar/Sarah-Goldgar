import React, {Component} from 'react';
import '../App.css';
import './ProjectPopup.css';

var innerPopup = {
  marginTop: '9%',
};


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

          <div className="popup">
            <div className="popup-inner" style={innerPopup}>
              <h3>{this.props.popupData.title}</h3>
              <img src={this.props.popupData.image} alt=" "></img>
              <p>{this.props.popupData.description}</p>
              <a target="_blank" href={this.props.popupData.webLink}>Live Site</a>
              <a target="_blank" href={this.props.popupData.githubLink}>Github</a>
              <p className="close" onClick={this.closePopup.bind(this)}>Close</p>
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
