import React, {Component} from 'react';
import './App.scss';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    version: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div id='app'>
        {this.props.children}
      </div>
    );
  }
}