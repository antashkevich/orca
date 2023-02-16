import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import CheckBox from './Checkbox';
import CheckLayout from './CheckLayout';
import Dropdown from './Dropdown';
import Icon from './Icon';

const Header = () => {
  const { data } = useSelector((s) => s.actions.data)

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <Icon name="logo" />
      </Link>

      <div className="header__settings">
        <CheckBox />
        <Dropdown dropdown={data.group} />
        <Dropdown dropdown={data.sort} />
        <CheckLayout />
      </div>
    </header>
  );
}

export default Header;
