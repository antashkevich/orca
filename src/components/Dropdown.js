import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';
import * as styles from '../styles/variables';

const DropdownContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled(Icon)`
  fill: ${styles.color_light_grey};
  transition: ${styles.transition};

  ${(props) => {
    switch (props.name) {
      case "symbol-sort":
      case "arrows-sort":
        return `
          width: 12px;
          height: 12px;
        `;
      case "download":
        return `
          width: 12px;
          height: 12px;
        `;
      case "arrow":
        return `
          width: 8px;
          height: 6px;

          ${DropdownContainer}:hover && {
            transform: rotate(180deg);
          }
        `;
      default:
        return `
          fill: ${styles.color_white};
        `;
    }
  }}
`

const DropdownBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 30px;
  border: 1px solid ${styles.color_light_grey};
  border-radius: 4px;
  transition: ${styles.transition};
  padding-left: 8px;
  padding-right: 8px;

  ${(props) => {
    switch (props.color) {
      case "blue":
        return `
          color: ${styles.color_white};
          border-color: ${styles.color_blue};
          background-color: ${styles.color_blue};

          ${StyledIcon} {
            fill: ${styles.color_white};
          }

          ${DropdownContainer}:hover && {
            box-shadow: 0px 0px 0px 2px ${styles.color_white_grey};

            ${StyledIcon} {
              fill: ${styles.color_white};
            }
          }
        `;
      default:
        return `
          background-color: ${styles.color_white};

          ${DropdownContainer}:hover && {
            border-color: ${styles.color_blue};
        
            ${StyledIcon} {
              fill: ${styles.color_blue};
            }
          }
        `;
    }
  }}
`;

const DropdownContainerList = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 30;

  ${DropdownContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }

  ${(props) => {
    switch (props.color) {
      case "blue":
        return `
          width: 100%;
        `;
      default:
        return `
          width: 124%;
        `;
    }
  }}

  ${(props) => {
    if(props.isOpenUp) {
      return `
        @media all and (max-height: 680px) {
          bottom: 100%;
          top: auto;

          ${DropdownList} {
            margin-top: 0;
            margin-bottom: 4px;
          }
        }
      `
    }
  }}
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${styles.color_white};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 4px;
`

const DropdownListItem = styled.li`
  line-height: 18px;
`

const DropdownListBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  transition: ${styles.transition};
  padding: 5px 16px;

  &:hover {
    color: ${styles.color_blue};
    background-color: ${styles.color_white_grey};
  }
`

const Dropdown = (props) => {
  return (
    <DropdownContainer>
      <DropdownBtn color={props.color}>
        <StyledIcon name={props.dropdown.icon} />
        {props.dropdown.name}
        <StyledIcon name="arrow" />
      </DropdownBtn>
      <DropdownContainerList color={props.color} isOpenUp>
        <DropdownList>
          {props.dropdown.items.map((item, id) => 
            <DropdownListItem key={id}>
              <DropdownListBtn>{item}</DropdownListBtn>
            </DropdownListItem>
          )}
        </DropdownList>
      </DropdownContainerList>
    </DropdownContainer>
  );
}

export default Dropdown;
