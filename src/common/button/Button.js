import React from 'react';
import './Button.scss';

export const Button = props => (
  <button {...props}>{props.children}</button>
);