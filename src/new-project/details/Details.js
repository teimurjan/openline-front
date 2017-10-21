import React from 'react';
import PropTypes from 'prop-types';
import {TextareaField} from "../../common/textarea-field/TextareaField";
import FileInput from "../../common/file-input/FileInput";
import './Details.scss';

export default class Details extends React.Component {
  static propTypes = {
    blocks: PropTypes.array.isRequired,
    actions: PropTypes.shape({
      addBlock: PropTypes.func.isRequired,
      changeBlock: PropTypes.func.isRequired,
      fetchImage: PropTypes.func.isRequired
    }).isRequired
  };


  render() {
    return (
      <div>
        {this.props.blocks.map((block, index) => {
          if (block.type === 'text')
            return <TextareaField textareaProps={{
              onChange: e => this.props.actions.changeBlock(index, e.target.value)
            }}/>;
          return <FileInput onChange={this.props.fetchImage}/>
        })}
        <button className='add-block-button'>+</button>
      </div>
    )
  }
}