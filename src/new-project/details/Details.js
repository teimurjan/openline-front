import React from 'react';
import PropTypes from 'prop-types';
import {TextareaField} from "../../common/textarea-field/TextareaField";
import FileInput from "../../common/file-input/FileInput";
import './Details.scss';
import AddBlockButton from "./AddBlockButton";

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
          if (block.type === 'text') {
            const onChange = e => this.props.actions.changeBlock(index, e.target.value);
            return <TextareaField key={index} textareaProps={{onChange}}/>;
          }
          return <FileInput key={index} onChange={image => this.props.actions.fetchImage(index, image)}/>
        })}
        <AddBlockButton>
          <button onClick={e => this.props.actions.addBlock('text')}>Текст</button>
          <button onClick={e => this.props.actions.addBlock('image')}>Фото</button>
        </AddBlockButton>
      </div>
    )
  }
}