import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';
import * as styles from '../styles/variables';

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 30px;
  background-color: ${styles.color_white};
  border: 1px solid ${styles.color_light_grey};
  border-radius: 4px;
  transition: ${styles.transition};
  padding-left: 8px;
  padding-right: 8px;

  &:hover {
    border-color: ${styles.color_blue};
  }

  ${DropdownContainer}:hover & {
    border-color: ${styles.color_blue};
  }
`;

const Dropdown = (props, {className = ""}) => {
  debugger
  return (
    <DropdownContainer className={`dropdown-container ${className}`}>
      <DropdownBtn className="dropdown-container__btn">
        <Icon className="dropdown-container__icon" name={props.dropdown.icon} />
        {props.dropdown.name}
        <Icon className="dropdown-container__icon-arrow" name="arrow" />
      </DropdownBtn>
      <div className="dropdown-container__list-container">
        <ul className="dropdown-container__list">
          {props.dropdown.items.map((item, id) => 
            <li key={id} className="dropdown-container__list-item">
              <button className="dropdown-container__list-btn">{item}</button>
            </li>
          )}
        </ul>
      </div>
    </DropdownContainer>
  );
}

export default Dropdown;
