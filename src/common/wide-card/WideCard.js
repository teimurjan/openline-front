import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import LoadingLine from '../loading-line/LoadingLine';
import UserLine from '../user-line/UserLine';
import Button from '../button/Button';
import {Link} from "react-router";
import './WideCard.scss';

const WideCard = props => {
  const timeLeft = moment(props.project.deadline).fromNow();
  const currentSum = Math.round(props.project.currentSum / props.project.goalSum * 100);
  return (
    <div className='project-wide-card-container'>
      <div className='project-wide-card'>
        <div className='image' style={{backgroundImage: `url('${props.project.image}'`}}/>
        <div className="card-data">
          <div className='content'>
            <p className='target'>{props.project.target}</p>
            <p className='title'>{props.project.title}</p>
            <p className='description'>{props.project.description}</p>
            <div className='details'>
              <p className='goalSum'>
                <span className='key'>Необходимо: </span>
                <span className='value'>{props.project.goalSum} сом</span>
              </p>
              <p className='currentSum'>
                <span className='key'>Собрано: </span>
                <span className='value'>{currentSum}%</span>
              </p>
              <p className='timeLeft'>
                <span className='key'>Осталось времени: </span>
                <span className='value'>{timeLeft}</span>
              </p>
            </div>
            <div className='loading-line-container'>
              <LoadingLine percents={currentSum} backgroundColor='#E0E0E0' height="6px"/>
            </div>
            <div className='user-line-container'>
              <UserLine user={props.user}/>
            </div>
          </div>
        </div>
      </div>
      <div className='floating-button'>
        <Link to='/'>
          <Button className='smaller-button green-color-button'>
            Поддержать
          </Button>
        </Link>
      </div>
    </div>
  )
};

WideCard.propTypes = {
  project: PropTypes.object,
  user: PropTypes.object,
};

export default WideCard;