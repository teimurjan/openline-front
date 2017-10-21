import React, {Component} from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import Header from '../common/header/Header.js';
import Footer from '../common/footer/Footer.js';

export default class App extends Component {
  static propTypes = {
    version: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div id='app'>
        <Header/>
        <div className="main">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}