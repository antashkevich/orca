import React from 'react';
import Icon from './Icon';

const Dropdown = (props, {className = ""}) => {
  return (
    <div className={`dropdown-container ${className}`}>
      <button className="dropdown-container__btn">
        <Icon className="dropdown-container__icon" name={props.dropdown.icon} />
        {props.dropdown.name}
        <Icon className="dropdown-container__icon-arrow" name="arrow" />
      </button>
      <div className="dropdown-container__list-container">
        <ul className="dropdown-container__list">
          {props.dropdown.items.map((item, id) => 
            <li key={id} className="dropdown-container__list-item">
              <button className="dropdown-container__list-btn">{item}</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
