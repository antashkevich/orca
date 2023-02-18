import React from 'react';
import sprite from '../assets/images/sprite.svg';

const Icon = (props) => {
  return (
    <svg className={props.className}>
      <use xlinkHref={`${sprite}#icon-${props.name}`} />
    </svg>
  );
}

export default Icon;
