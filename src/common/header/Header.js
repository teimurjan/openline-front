import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/true-hero.svg';
// import moment from 'moment';
// import LoadingLine from '../loading-line/LoadingLine';
// import UserLine from '../user-line/UserLine';
import Button from '../button/Button';
import {Link} from "react-router";
import './Header.scss';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='header-container'>
        <Link to='/'>
          <img src={logo} className='logo'/>
        </Link>
        <div className='header-right'>
          <div>
            <a className='link'>Начать проект</a>
          </div>
          <div className='right'>
            <Link to='/registration' className='link'>Регистрация</Link>
            <Link to='/login' className='link'>Войти</Link>
          </div>
        </div>
      </div>
    )
  }
};

// Card.propTypes = {
//   project: PropTypes.object,
//   user: PropTypes.object,
// };
