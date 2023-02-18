import React from 'react';
import styled from 'styled-components'
import * as styles from '../styles/variables'
import icon from '../assets/images/icon-check.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const Label = styled.label`
  line-height: 18px;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    background: ${styles.color_white_light};
    border: 1px solid ${styles.color_light_grey};
    border-radius: 2px;
    box-sizing: border-box;
    transition: ${styles.transition};
  }

  &:hover {
    &:after {
      background-color: ${styles.color_white};
      border: 1px solid ${styles.color_blue};
    }
  }
`

const Input = styled.input`
  appearance: none;

  &:checked {
    & + ${Label} {
      &:after {
        background-color: ${styles.color_blue};
        border-color: ${styles.color_blue};
        background-image: url("${icon}");
        background-size: 8px auto;
        background-repeat: no-repeat;
        background-position: center;
      }

      &:hover {
        &:after {
          box-shadow: 0px 0px 0px 2px ${styles.color_white_grey};
        }
      }
    }
  }
`

const CheckBox = () => {
  return (
    <Container>
      <Input type="checkbox" id="additional-items" />
      <Label htmlFor="additional-items">Show additional items</Label>
    </Container>
  );
}

export default CheckBox;
