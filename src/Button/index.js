import React from 'react';


const Button = ({ onClick, className, type, children }) =>
    <button onClick={ onClick } className={ className } type={ type }>
    { children }
    </button>

Button.defaultProps = {
  className: '',
  onClick: () => {}
}

export default Button;
