import React from 'react';
import PropTypes from 'prop-types';
import Block from './block/Block';
import './Blocks.scss'

const Blocks = (props) => {
  return (
    <div className="blocks">
      {props.blocks.map((block) => <Block key={block.id} block={block}/>)}
    </div>
  )
};

Blocks.propTypes = {
  blocks: PropTypes.array.isRequired
};

export default Blocks;