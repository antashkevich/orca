import React, { useState } from 'react';
import Icon from './Icon';

const CheckLayout = () => {
  const [isListLayoutActive, setListLayoutActive] = useState(true)
  const [isGridLayoutActive, setGridLayoutActive] = useState(false)

  const checkLayout = (layout) => {
    if (layout === "list") {
      setListLayoutActive(true);
      setGridLayoutActive(false);
    } else {
      setListLayoutActive(false);
      setGridLayoutActive(true);
    }
  }

  return (
    <div className="check-container">
      <button className={`check-container__btn ${isListLayoutActive ? "check-container__btn_active" : ""}`} onClick={() => checkLayout("list")}>
        <Icon name="list" className="check-container__btn-icon" />
      </button>
      <button  className={`check-container__btn ${isGridLayoutActive ? "check-container__btn_active" : ""}`} onClick={() => checkLayout("grid")}>
        <Icon name="grid" className="check-container__btn-icon" />
      </button>
    </div>
  );
}

export default CheckLayout;
