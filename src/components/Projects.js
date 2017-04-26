import React, {Component} from 'react';
import '../App.css';
import './Projects.css';

class Projects extends Component{
  render(){
    return(
      <section className="projects">
        <div className="flex-row">
          <div className="container">
            <div className="image-link"><a><img src="./img/clemo.png" alt=""/></a></div>
            <div className="image-link"><a><img src="../img/fun-site.png" alt=""/></a></div>
            <div className="image-link"><a><img src="../img/easybook.png" alt=""/></a></div>
            <div className="image-link"><a><img src="./img/coming soon.jpg" alt=""/></a></div>
          </div>
        </div>
        <div className="flex-row">
          <div className="container offset">
            <div className="image-link"><a><img src="./img/coming soon.jpg" alt=""/></a></div>
            <div className="image-link"><a><img src="../img/coming soon.jpg" alt=""/></a></div>
            <div className="image-link"><a><img src="./img/coming soon.jpg" alt=""/></a></div>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;
