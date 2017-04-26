import React, {Component} from 'react';
import './Contact.css'

class Contact extends Component{
  render(){
    return(
      <section className="contact">
        <form action="contact.html">
          <input type="text" name="name" value="" placeholder="Name"/>
          <input type="email" name="contact" value="" placeholder="Email"/>
          <textarea name="name" rows="8" cols="80" placeholder="Message"></textarea>
        </form>
        <input type="submit" value="Submit" className="button"/>
      </section>
    )
  }
}

export default Contact;
