import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import * as styles from '../styles/variables'
import { changeLayout } from '../store/actions';
import Icon from './Icon';

const Container = styled.div`
  display: flex;
  height: 30px;
  width: 60px;
  gap: 4px;
  background-color: ${styles.color_white};
  border: 1px solid ${styles.color_light_grey};
  border-radius: 4px;
  box-sizing: border-box;
  transition: ${styles.transition};
  padding: 1px;
`

const StyledIcon = styled(Icon)`
  width: 12px;
  height: 12px;
  fill: ${styles.color_black};
  transition: ${styles.transition};
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  border-radius: 2px;
  transition: ${styles.transition};

  &:hover {
    ${StyledIcon} {
      fill: ${styles.color_blue};
    }
  }

  ${(props) => {
    if(props.className === "active") {
      return `
        background-color: ${styles.color_blue};
        ${StyledIcon} {
          fill: ${styles.color_white};
        }

        &:hover {
          box-shadow: 0px 0px 0px 1px ${styles.color_white_grey};

          ${StyledIcon} {
            fill: ${styles.color_white};
          }
        }
      `
    }
  }}
`

const CheckLayout = () => {
  const dispatch = useDispatch()
  const [isListLayoutActive, setListLayoutActive] = useState(true)

  const checkLayout = (layout) => {
    if (layout === "list") {
      setListLayoutActive(true);
      dispatch(changeLayout(layout))
    } else {
      setListLayoutActive(false);
      dispatch(changeLayout(layout))
    }
  }

  return (
    <Container>
      <Button className={`${isListLayoutActive ? "active" : ""}`} onClick={() => checkLayout("list")}>
        <StyledIcon name="list" />
      </Button>
      <Button  className={`${!isListLayoutActive ? "active" : ""}`} onClick={() => checkLayout("grid")}>
        <StyledIcon name="grid" />
      </Button>
    </Container>
  );
}

export default CheckLayout;
