import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as styles from '../styles/variables'
import CheckBox from './Checkbox';
import CheckLayout from './CheckLayout';
import Dropdown from './Dropdown';
import Icon from './Icon';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid ${styles.color_light_grey};
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 32px;
`

const StyledLink = styled(Link)`
  width: 94px;
  height: 40px;
  display: flex;
  transition: ${styles.transition};
`

const StyledIcon = styled(Icon)`
  width: 100%;
  height: 100%;

  ${StyledLink}:hover & {
    opacity: 0.8;
  }
`

const HeaderSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Header = () => {
  const { data } = useSelector((s) => s.actions.data)

  return (
    <StyledHeader>
      <StyledLink to="/">
        <StyledIcon name="logo" />
      </StyledLink>

      <HeaderSettings>
        <CheckBox />
        <Dropdown dropdown={data.group} />
        <Dropdown dropdown={data.sort} />
        <CheckLayout />
      </HeaderSettings>
    </StyledHeader>
  );
}

export default Header;
