import React from 'react';
import PropTypes from 'prop-types';
import './TextareaField.scss';

export const TextareaField = ({textareaProps, label, wrapperClass}) => (
  <div className={`textarea-field-text-wrapper ${wrapperClass}`}>
    <label>{label}</label>
    <textarea {...textareaProps}/>
  </div>
);

TextareaField.propTypes = {
  textareaProps: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string
};

TextareaField.defaultProps = {
  wrapperClass: '',
  label: ''
};