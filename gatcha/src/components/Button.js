import React from 'react'
import './Button.css'
const Button =({onClick,children,className='',type='button'}) =>{
    return (
        <button type={type} onClick={onClick} className={'custom-button ${className}'}>
            {children}
        </button>
    );
};export default Button;