import React from 'react';


interface ButtonProps{ 
  onClickProp:()=>void
  className:string
  children:string
  disabled?:boolean
 }

const Button = ({
  onClickProp,
  className,
  children,
  disabled,
}:ButtonProps ) => {
  return (
    <button className={`common__button--${className} ${disabled? "common__button--disabled" : ''}`} onClick={onClickProp} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;