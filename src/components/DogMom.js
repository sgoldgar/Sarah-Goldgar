import React, {Component} from 'react';
import './DogMom.css';
import dogpic1 from "./img/ginnypic1.jpg";
import dogpic2 from "./img/ginnypic2.jpg";
import dogpic3 from "./img/ginnypic3.jpg";
import dogpic4 from "./img/ginnypic4.jpg";
import dogpic5 from "./img/ginnypic5.JPG";


class DogMom extends Component{
  render(){
    return(
      <section className="ginnypics">
        <img className="sideways" src={dogpic1} alt="puppy"></img>
        <img src={dogpic2} alt="puppy"></img>
        <img className="sideways" src={dogpic3} alt="puppy"></img>
        <img className="sideways" src={dogpic4} alt="puppy"></img>
        <img src={dogpic5} alt="puppy"></img>
      </section>
    )
  }
}

export default DogMom;
