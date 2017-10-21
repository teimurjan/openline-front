import React from 'react';
import PropTypes from 'prop-types';
import './SupportLayout.scss';
import moment from 'moment';
import {Link} from 'react-router';

import LoadingLine from '../../../common/loading-line/LoadingLine'
import Button from '../../../common/button/Button'
import heart from "../../../assets/images/heart.svg";

const SupportBlock = ({project}) => {
  const timeLeft = moment(project.deadline).fromNow(true);
  const currentSumPercentage = Math.round(project.currentSum / project.goalSum * 100);
  return (
    <div className="support-layout">
      <div className="top-part">
        <div className="field">
          <div className="label">Поддержало</div>
          <div className="value">{project.donates} человек</div>
        </div>
        <img src={heart} alt=''/>
      </div>
      <div className="field">
        <div className="label">Осталось</div>
        <div className="value">{timeLeft}</div>
      </div>
      <LoadingLine percents={currentSumPercentage} backgroundColor='#E0E0E0' height="6px"/>
      <div className="currentSum">
        {project.currentSum} сом
      </div>
      <div className="goalSum">
        Необходимо <span>{project.goalSum} сом</span>
      </div>
      <Link to='/'>
        <Button className='smaller-button green-color-button support'>
          Поддержать
        </Button>
      </Link>
    </div>
  )
};

SupportBlock.propTypes = {
  project: PropTypes.object.isRequired
};

export default SupportBlock;