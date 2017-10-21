import React from 'react';
import PropTypes from 'prop-types';
import './FileInput.scss';

const FileInput = ({value, onChange, label}) => {
  const onFileUpload = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = () => onChange({name: file.name, base64: reader.result});
    reader.readAsDataURL(file);
  };

  return (
    <div className={`file-input ${value ? 'exists' : 'new'}`}>
      {label}
      <label htmlFor="fileInput">
        <span>{value.name || ''}</span>
      </label>
      <input id="fileInput" type="file" name="" onChange={onFileUpload} accept="image/*"/>
    </div>
  );
};

FileInput.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

FileInput.defaultProps = {
  label: ''
};

export default FileInput;
