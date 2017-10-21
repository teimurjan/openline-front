import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/true-hero.svg';
// import moment from 'moment';
// import LoadingLine from '../loading-line/LoadingLine';
// import UserLine from '../user-line/UserLine';
import Button from '../button/Button';
import {Link} from "react-router";
import './Footer.scss';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
     <div className='footer-container'>
         <div className='content'>
            <div className='column'>
                <a className='link title'>О НАС</a>
                <a className='link'>Кто мы?</a>
                <a className='link'>Фаилы</a>
                <a className='link'>Спецпроекты</a>
                <a className='link'>Партнеры</a>
            </div>
             <div className='column'>
                 <a className='link title'>СПОНСОРАМ</a>
                 <a className='link'>Все проекты</a>
                 <a className='link'>Новые проекты</a>
                 <a className='link'>Способы оплаты</a>
                 <a className='link'>Возврат средств</a>
             </div>
             <div className='column'>
                 <a className='link'>Контакты</a>
                 <a className='link'>Правила сервиса</a>
                 <a className='link'>Задать вопрос</a><br/>
                 <Link to='/'>
                     <img src={logo} className='logo'/>
                 </Link>
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
