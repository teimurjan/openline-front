import React from 'react';

export default class AddBlockButton extends React.Component {
  state = {
    showOptions: false
  };

  handleOnClick = e => {
    this.setState({showOptions: !this.state.showOptions});
  };


  render() {
    return (
      <div>
        <button onClick={this.handleOnClick} className='add-block-button'>+</button>
        {this.state.showOptions && this.props.children}
      </div>
    )
  }
}