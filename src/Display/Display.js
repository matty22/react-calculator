import React from 'react';
import './Display.css';

const display = (props) => (
  <div className="display">
    <p>{ props.calc }</p>
    <p>{ props.answer }</p>
  </div>
);

export default display;