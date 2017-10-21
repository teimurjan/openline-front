import React from 'react';
import PropTypes from 'prop-types';
import './Block.scss'

const VIDEO = 'video';
const IMAGE = 'image';
const TEXT = 'text';

const Block = (props) => {
  if (props.block.type === VIDEO) {
    return false;
  }
  if (props.block.type === IMAGE) {
    return (
      <div className="block block-image" style={{backgroundImage: `url(${props.block.content})`}}/>
    );
  }
  if (props.block.type === TEXT) {
    return (
      <p className="block block-text">
        {props.block.content}
      </p>
    );
  }
  return false;
};

Block.propTypes = {
  block: PropTypes.object.isRequired
};

export default Block;