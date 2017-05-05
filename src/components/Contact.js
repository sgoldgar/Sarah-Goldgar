import React, {Component} from 'react';
import './Contact.css';

// var form = document.getElementsByTagName('form')[0];
// form.addEventListener('submit',contact,false);
// function contact(e) {
//   // Prevent Default Form Submission
//   e.preventDefault();
//
//   var target = e.target || e.srcElement;
//   var i = 0;
//   var message = '';
//
//   // Loop Through All Input Fields
//   for(i = 0; i < target.length; ++i) {
//      // Check to make sure it's a value. Don't need to include Buttons
//      if(target[i].type != 'text' && target[i].type != 'textarea') {
//             // Skip to next input since this one doesn't match our rules
//         continue;
//      }
//
//      // Add Input Name and value followed by a line break
//      message += target[i].name + ': ' + target[i].value + "\r\n";
//   }
//   // Modify the hidden body input field that is required for the mailto: scheme
//   target.elements["body"].value = message;
//
//   // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
//   this.submit();
// }



class Contact extends Component{
  render(){
    return(
      <section className="contact">
        <form method="GET" action="mailto:test@example.com" enctype="text/plain">
          <div>
            <p>1. Fill in your name and email.</p>
            <input id="name" type="text" name="name" value="" placeholder="Name"/>
            <input id="email" type="email" name="contact" value="" placeholder="Email"/>
          </div>
          <div>
            <p>2. Write a message!</p>
            <textarea id="message"name="name" rows="8" cols="80" placeholder="Message"></textarea>
          </div>
        </form>
        <div>
          <p>3. Send away!</p>
          <input type="submit" value="Get in touch" className="button"/>
        </div>
      </section>
    )
  }
}

export default Contact;
