import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import LoadingLine from '../loading-line/LoadingLine';
import './Card.scss';

const Card = (props) => {
  const timeLeft = moment(props.project.deadline).fromNow();
  const currentSum = Math.round(props.project.currentSum / props.project.goalSum * 100);
  return (
    <div className='project-card'>
      <div className='image' style={{backgroundImage: `url('${props.project.image}'`}}>

      </div>
      <div className="card-data">
        <div className='content'>
          <p className='target'>{props.project.target}</p>
          <p className='title'>{props.project.title}</p>
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
        </div>
        <LoadingLine percents={currentSum}/>
      </div>
    </div>
  )
};

Card.propTypes = {
  project: PropTypes.object,
  user: PropTypes.object,
};

export default Card;