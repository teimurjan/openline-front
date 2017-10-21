import React from 'react';
import PropTypes from 'prop-types';
import InputField from "../../common/input-field/InputField";
import FileInput from "../../common/file-input/FileInput";
import {TextareaField} from "../../common/textarea-field/TextareaField";
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import {DATE_FORMAT} from "../../utils/settings";
import Button from "../../common/button/Button";

export default class CommonInformation extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    image: PropTypes.object,
    goalSum: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    actions: PropTypes.shape({
      changeName: PropTypes.func.isRequired,
      changeTarget: PropTypes.func.isRequired,
      changeImage: PropTypes.func.isRequired,
      changeGoalSum: PropTypes.func.isRequired,
      changeDescription: PropTypes.func.isRequired,
      changeDeadline: PropTypes.func.isRequired,
      submit: PropTypes.func.isRequired
    }).isRequired
  };

  handleChangeName = e => this.props.actions.changeName(e.target.value);
  handleChangeTarget = e => this.props.actions.changeTarget(e.target.value);
  handleChangeGoalSum = e => this.props.actions.changeGoalSum(e.target.value);
  handleChangeDescription = e => this.props.actions.changeDescription(e.target.value);

  render() {
    return (
      <div id='common-information'>
        <div className='first-half'>
          <InputField label='Название проекта' inputProps={{onChange: this.handleChangeName, type: 'text'}}/>
          <InputField label='Предназначение' inputProps={{onChange: this.handleChangeTarget, type: 'text'}}/>
          <FileInput label='Загрузить изображение' value={this.props.image} onChange={this.props.actions.changeImage}/>
          <InputField label='Финансовая цель' inputProps={{onChange: this.handleChangeGoalSum, type: 'number'}}/>
        </div>
        <div className='second-half'>
          <TextareaField textareaProps={{rows: 5, onChange: this.handleChangeDescription}} label='Краткое описание'/>
          <label>Окончание сбора</label>
          <Datetime value={this.props.deadline} onChange={this.props.actions.changeDeadline}
                    closeOnSelect
                    className={'input-field-text-wrapper'}
                    inputProps={{
                      value: this.props.deadline ? this.props.deadline.format(DATE_FORMAT) : '',
                      onChange: () => false,
                    }}/>
        </div>
        <Button onClick={this.props.actions.submit}
                disabled={this.props.isLoading}
                className='primary-button green-color-button p-md'>
          Следующий шаг
        </Button>
      </div>
    )
  }
}