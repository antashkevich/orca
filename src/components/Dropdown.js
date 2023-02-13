import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import Icon from './Icon';

const Dropdown = (props) => {
  const [isListActive, setListActive] = useState(false)

  const toggleList = () => {
    setListActive(!isListActive)
  }
  return (
    <React.Fragment>
      <div className="dropdown-container">
        <button className="dropdown-container__btn" onClick={toggleList}>
          <Icon className="dropdown-container__icon" name={props.dropdown.icon} />
          {props.dropdown.name}
          <Icon className={`dropdown-container__icon-arrow ${isListActive ? "dropdown-container__icon-arrow_up" : ""}`} name="arrow" />
        </button>
        {isListActive && 
          <div className="dropdown-container__list-container">
            <ul className="dropdown-container__list">
              {props.dropdown.items.map((item, id) => 
                <li key={id} className="dropdown-container__list-item">
                  <button className="dropdown-container__list-btn">{item}</button>
                </li>
              )}
            </ul>
          </div>
        }
      </div>
    </React.Fragment>
  );
}

export default Dropdown;
