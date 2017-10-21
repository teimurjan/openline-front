import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import LoadingLine from '../loading-line/LoadingLine';
import UserLine from '../user-line/UserLine';
import Button from '../button/Button';
import {Link} from "react-router";
import './Card.scss';

export default class Card extends React.Component {
  renderFloatingButton() {
    if (this.state.showButton) {
      return (<div className='floating-button'>
        <Link to='/'>
          <Button className='smaller-button green-color-button'>
            Поддержать
          </Button>
        </Link>
      </div>)
    }
    return false;
  }

  constructor() {
    super();
    this.state = {
      showButton: false
    };
  }

  onMouseEnter = () => this.setState({showButton: true});

  onMouseOut = () => this.setState({showButton: false});

  render() {
    const timeLeft = moment(this.props.project.deadline).fromNow();
    const currentSum = Math.round(this.props.project.currentSum / this.props.project.goalSum * 100);
    return (
      <div className='project-card' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseOut}>
        <div className="image-container">
          <div className='image' style={{backgroundImage: `url('${this.props.project.image}'`}}/>
          {this.renderFloatingButton()}
        </div>
        <div className="card-data">
          <div className='content'>
            <p className='target'>{this.props.project.target}</p>
            <p className='title'>{this.props.project.title}</p>
            <div className='details'>
              <p className='goalSum'>
                <span className='key'>Необходимо: </span>
                <span className='value'>{this.props.project.goalSum} сом</span>
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
            <UserLine user={this.props.user}/>
          </div>
          <LoadingLine percents={currentSum}/>
        </div>
      </div>
    )
  }
};

Card.propTypes = {
  project: PropTypes.object,
  user: PropTypes.object,
};
