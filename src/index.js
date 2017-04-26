import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';
import './App.css';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="contact" component={Contact}/>
      <Route path="projects" component={Projects}/>
      <Route path="about" component={About}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>),
  document.getElementById('root')
);
