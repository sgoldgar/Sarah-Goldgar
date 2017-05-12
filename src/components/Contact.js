import React, {Component} from 'react';
import './Contact.css';





class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email : '',
      message : ''
    };
  }

  sendEmail(){
    fetch('/contact', {
      method: 'POST',
      headers:  {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => {

    })
  }

  render(){
    return(
      <section className="contact">
        <form className="form" method="POST" id="mailgun" role="form">
          <p id="contact-title">Get in touch</p>
          <div>
            <p>1. Fill in your name and email.</p>
            <input value={this.state.name}
              onChange={(e) => {this.setState({name: e.target.value})}}
              id="name"
              type="name"
              name="name"
              placeholder="Name"
              required/>
            <input value={this.state.email}
              onChange={(e) => {this.setState({email: e.target.value})}}
              id="email"
              type="email"
              name="contact"
              placeholder="Email"
              required/>
          </div>
          <div>
            <p>2. Write a message!</p>
            <textarea value={this.state.message}
              onChange={(e) => {this.setState({message: e.target.value})}}
              id="message"
              name="message"
              rows="8"
              cols="80"
              placeholder="Message"
              required></textarea>
          </div>
          <button type="submit" value="Get in touch" className="mobile-button"/>
        </form>
        <div>
          <p>3. Send away!</p>
          <input type="submit" value="Get in touch" className="button"/>
        </div>
        <p className="confirmation">Message sent!</p>
      </section>
    )
  }
}

export default Contact;
