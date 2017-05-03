import React, {Component} from 'react';
import '../App.css';
import './Home.css';
// import './Home.scss';


class Home extends Component{
  render(){
    return(
      <section className="home">
        <section id="welcome-container">
          <div id="panda">
            <div id="head">
              <div id="left-ear"></div>
              <div id="right-ear"></div>
              <div id="left-eye-outer"></div>
              <div id="right-eye-outer"></div>
              <div id="nose"></div>
            </div>
              <div id="body">
                <div id="inner-body"></div>
              </div>
            <div id="left-arm"></div>
            <div id="right-arm"></div>
            <div id="left-leg"></div>
            <div id="right-leg"></div>

            <div id="sign">
              <p id="welcome">Welcome</p>
            </div>
            <div id="signpost"></div>
          </div>
        </section>
      </section>
    )
  }
}

export default Home;
