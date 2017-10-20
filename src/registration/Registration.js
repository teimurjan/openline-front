import React from 'react';
import PropTypes from 'prop-types';
import {InputField} from "../common/input-field/InputField";
import './Registration.scss';
import {Button} from "../common/button/Button";

export default class Registration extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      changeName: PropTypes.func.isRequired,
      changePassword: PropTypes.func.isRequired,
      submit: PropTypes.func.isRequired
    }).isRequired
  };

  handleNameChange = e => this.props.actions.changeName(e.target.value);
  handlePasswordChange = e => this.props.actions.changePassword(e.target.value);

  render() {
    return (
      <div id='registration'>
        <div className="wrapper">
          <InputField label='E-mail' inputProps={{onChange: this.handleNameChange, type: 'text'}}/>
          <InputField label='Пароль' inputProps={{onChange: this.handlePasswordChange, type: 'password'}}/>
          <Button onClick={this.props.actions.submit}>Зарегистрироваться</Button>
        </div>
      </div>
    );
  }
}