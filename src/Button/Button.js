import React from 'react';
import './Button.css';


const button = (props) => {
  return <button 
            className="button" 
            value={ props.value } 
            onClick={ props.click }
            disabled={ !props.status }>{ props.value }</button>
};

  



export default button;