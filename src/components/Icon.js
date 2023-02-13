import React from 'react';
import sprite from '../assets/images/sprite.svg';
  
export default function Icon(props) {
  return (
    <svg className={props.className}>
      <use xlinkHref={`${sprite}#icon-${props.name}`} />
    </svg>
  );
}
