import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

const InputField = ({inputProps, label, wrapperClass}) => (
  <div className={`input-field-text-wrapper ${wrapperClass}`}>
    <label>{label}</label>
    <input {...inputProps}/>
  </div>
);

InputField.propTypes = {
  inputProps: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string
};

InputField.defaultProps = {
  wrapperClass: '',
  label: ''
};

export default InputField;