import React from 'react';
import PropTypes from 'prop-types';
import InputField from "../common/input-field/InputField";
import './Login.scss';
import Button from "../common/button/Button";
import {Link} from "react-router";

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
      <div id='login'>
        <div className="wrapper">
          <InputField label='E-mail' inputProps={{onChange: this.handleNameChange, type: 'email'}}/>
          <InputField label='Пароль' inputProps={{onChange: this.handlePasswordChange, type: 'password'}}/>
          <Link to='/registration'>
            <Button disabled={this.props.isLoading}>Регистрация</Button>
          </Link>
          <Button disabled={this.props.isLoading} onClick={this.props.actions.submit}>Вход</Button>
        </div>
      </div>
    );
  }
}