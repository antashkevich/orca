import React from 'react';

const CheckBox = () => {
  return (
    <div className="additional-items">
      <input className="additional-items__checkbox" type="checkbox" id="additional-items" />
      <label className="additional-items__label" htmlFor="additional-items">Show additional items</label>
    </div>
  );
}

export default CheckBox;
