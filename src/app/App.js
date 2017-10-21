import React, {Component} from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import Header from '../common/header/Header.js'

export default class App extends Component {
  static propTypes = {
    version: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div id='app'>
        <Header></Header>
        {this.props.children}
      </div>
    );
  }
}