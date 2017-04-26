import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="big-container">
        <Header/>
        <div className="content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
