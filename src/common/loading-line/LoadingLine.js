import React from 'react';
import PropTypes from 'prop-types';
import './LoadingLine.scss'

const LoadingLine = ({percents, lineColor='#24DB71', backgroundColor='#ffffff', height='4px'}) => (
  <div className="loading-line" style={{backgroundColor: backgroundColor, height}}>
    <div className="bar" style={{width: `${percents}%`, backgroundColor: lineColor}}/>
  </div>
);

LoadingLine.propTypes = {
  percents: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string
};

export default LoadingLine;