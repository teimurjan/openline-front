import React from 'react';
import PropTypes from 'prop-types';
import {InputField} from "../common/input-field/InputField";
import './Registration.scss';
import {Button} from "../common/button/Button";
import img from "../assets/images/lightning.svg";

export default class Registration extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
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
          <img src={img} className='title-icon'/>
          <div className='title'>Регистрация</div>
          <InputField className='input-signup' label='E-mail' inputProps={{onChange: this.handleNameChange, type: 'email'}}/>
          <InputField label='Пароль' inputProps={{onChange: this.handlePasswordChange, type: 'password'}}/>
          <Button className='primary-button signup-button' disabled={this.props.isLoading} onClick={this.props.actions.submit}>Зарегистрироваться</Button>
        </div>
      </div>
    );
  }
}
