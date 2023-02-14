import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import CheckLayout from './CheckLayout';
import Dropdown from './Dropdown';
import Icon from './Icon';

const Header = () => {
  const { data } = useSelector((s) => s.actions.data)

  return (
    <React.Fragment>
      <div className="container">
        <header className="header">
          <Link to="/" className="header__logo">
            <Icon name="logo" />
          </Link>

          <div className="header__settings">
            <div className="additional-items">
              <input className="additional-items__checkbox" type="checkbox" id="additional-items" />
              <label className="additional-items__label" htmlFor="additional-items">Show additional items</label>
            </div>
            <Dropdown dropdown={data.group} />
            <Dropdown dropdown={data.sort} />
            <CheckLayout />
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}

export default Header;
