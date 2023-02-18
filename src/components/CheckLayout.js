import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeLayout } from '../store/actions';
import Icon from './Icon';

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
    <div className="check-container">
      <button className={`check-container__btn ${isListLayoutActive ? "check-container__btn_active" : ""}`} onClick={() => checkLayout("list")}>
        <Icon name="list" className="check-container__btn-icon" />
      </button>
      <button  className={`check-container__btn ${!isListLayoutActive ? "check-container__btn_active" : ""}`} onClick={() => checkLayout("grid")}>
        <Icon name="grid" className="check-container__btn-icon" />
      </button>
    </div>
  );
}

export default CheckLayout;
