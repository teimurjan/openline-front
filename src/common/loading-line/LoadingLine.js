import React from 'react';
import PropTypes from 'prop-types';
import './LoadingLine.scss'

const LoadingLine = ({percents, backgroundColor='#24DB71'}) => (
  <div className="loading-line" >
    <div className="bar" style={{width: `${percents}%`, backgroundColor}}/>
  </div>
);

LoadingLine.propTypes = {
  percents: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string
};

export default LoadingLine;