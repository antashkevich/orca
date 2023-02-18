import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from './Icon';
import { changeItemId } from '../store/actions'
import Dropdown from './Dropdown';

const Content = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((s) => s.actions.data)
  const { idItem, isOpen, layout } = useSelector((s) => s.actions)

  const toggleAdditionalContainer = (id) => {
    if (id !== idItem) {
      dispatch(changeItemId(id, true))
    } else {
      dispatch(changeItemId(id, !isOpen))
    }
  }

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={`content content_${layout}`}>
      <div className="content__header">
        <div className="content__header-item content__item_1"></div>
        {data.sort.items.map((item, id) => 
          <div key={id} className={`content__header-item content__item_${id + 2}`}>
            <p>{item}</p>
          </div>
        )}
      </div>

      <div className="content__body">
        {data.info.map((item, id) =>
          <div 
            key={id} 
            className="content-item-container">

            <div 
              className="content-item-row"
              onClick={layout === "list" ? (() => toggleAdditionalContainer(id)) : undefined}>
              <div className="content-item content__item_1">
                <p className="content-item__name">Risk level:</p>
                <div className="content-item__status-container">
                  <div className={`content-item__icon-container content-item__icon-container_${item.status}`}>
                    <Icon className="content-item__icon" name={item.status} />
                  </div>
                  <p className="content-item__status">{capitalizeFirst(item.status)}</p>
                </div>
              </div>

              <div className="content-item content__item_2">
                <p className="content-item__name">Name:</p>
                <p className="content-item__text">{item.name}</p>
              </div>

              <div className="content-item content__item_3">
                <p className="content-item__name">File name:</p>
                <p className="content-item__text">
                  {item.name}.{item.file_name}<span>({item.file_size})</span>
                </p>
              </div>

              <div className="content-item content__item_4">
                <p className="content-item__name">IP Address v4:</p>
                <div className="content-item__copy">
                  <p className="content-item__text">{item.ip_address_v4}</p>
                  <button className="content-item__btn-copy" onClick={(e) => e.stopPropagation()}><Icon className="content-item__btn-copy-icon" name="copy" /></button>
                </div>
              </div>

              <div className="content-item content__item_5">
                <p className="content-item__name">IP Address v6:</p>
                <div className="content-item__copy">
                  <p className="content-item__text">{item.ip_address_v6}</p>
                  <button className="content-item__btn-copy" onClick={(e) => e.stopPropagation()}><Icon className="content-item__btn-copy-icon" name="copy" /></button>
                </div>
              </div>

              <div className="content-item content__item_6">
                <p className="content-item__name">Scan source:</p>
                <button className="content-item__btn-link" onClick={(e) => e.stopPropagation()}>
                  <Icon className="content-item__btn-link-devorate-icon" name="target" />
                  <p className="content-item__text">
                    <span className="content-item__link">{item.source}</span>
                    <Icon className="content-item__btn-link-icon" name="link" />
                  </p>
                </button>
              </div>

              <div className="content-item content__item_7">
                <button className="content-item__additional-info-btn" onClick={() => toggleAdditionalContainer(id)}>Show additional info</button>
              </div>
            </div>

            <div className={`content-item__additional-info ${(idItem === id && isOpen ) ? "content-item__additional-info_open" : ""}`}>
              <div className="content-item__additional-info-popup">
                <div className="content-item__additional-info-header">
                  <div className={`content-item__additional-info-icon-container content-item__additional-info-icon-container_${item.status}`}>
                    <Icon className="content-item__additional-info-icon" name={item.status} />
                  </div>
                  <p className="content-item__additional-info-name">{capitalizeFirst(item.name)}</p>
                  <button className="content-item__additional-info-close-btn" onClick={() => toggleAdditionalContainer(id)}>
                    <Icon className="content-item__additional-info-close-btn-icon" name="close" />
                  </button>
                </div>
                <div className="content-item__additional-info-container">
                  <div>
                    <h2 className="content-item__additional-info-title">Additional info</h2>
                    <div className="content-item__additional-info-link">{item.additional_info}</div>
                  </div>
                </div>
                <div className="content-item__additional-info-btns">
                  <button className="content-item__additional-download-btn">Download</button>
                  <Dropdown color="blue" dropdown={data.download} />
                  <button className="content-item__additional-cancel-btn" onClick={() => toggleAdditionalContainer(id)}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}         
      </div>
    </div>
  );
}

export default Content;
