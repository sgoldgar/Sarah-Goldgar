import React, {Component} from 'react';
import './Contact.css';





class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email : '',
      message : '',
      messageShown : false
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
      this.setState({
        messageShown: true,
        name: '',
        email: '',
        message: ''
      })
    })
  }

  render(){
    return(
      <div>
      <section className="contact">
        <form className="form"  action="https://formspree.io/sgoldgar@gmail.com" method="POST" role="form">
          <p id="contact-title">Get in touch</p>
          <div>
            <p>1. Fill in your name and email.</p>
            <input value={this.state.name}
              onChange={(e) => {this.setState({name: e.target.value})}}
              id="name"
              type="name"
              name="_replyto"
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
          <input onClick={this.sendEmail.bind(this)} type="submit" value="Get in touch" className="mobile-button"/>
        </form>
        <div>
          <p>3. Send away!</p>
          <input onClick={this.sendEmail.bind(this)} type="submit" value="Get in touch" className="button"/>
        </div>

      </section>
      {this.state.messageShown ?
      <p className="confirmation" >Message sent!</p>
      : null
      }
      </div>
    )
  }
}

export default Contact;
