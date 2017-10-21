import React from 'react';
import PropTypes from 'prop-types';

export default class NewProject extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
  };

  render() {
    const isCommonActive = this.props.location.pathname === '/project/new';
    const isDetailsActive = this.props.location.pathname.match(/^\/project\/new\/\d+$/);
    return (
      <div>
        <ul>
          <li className={`${isCommonActive ? 'active' : ''}`}>Общая информация</li>
          <li className={`${isDetailsActive ? 'active' : ''}`}>Детали</li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}