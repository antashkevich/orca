import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from './Icon';
import { changeItemId } from '../store/actions'
import Dropdown from './Dropdown';

const Content = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((s) => s.actions.data)
  const { idItem } = useSelector((s) => s.actions)
  const { isOpen } = useSelector((s) => s.actions)

  const toggleAdditionalContainer = (id) => {
    if (id !== idItem) {
      dispatch(changeItemId(id, true))
    } else {
      dispatch(changeItemId(id, !isOpen))
    }
  }

  return (
    <div className="content">
      <div className="content__header">
        {data.sort.items.map((item, id) => 
          <div key={id} className={`content__header-item content__item_${id + 1}`}>
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
              onClick={() => toggleAdditionalContainer(id)}>
              <div className={`content-item content__item_1`}>
                <div className={`content-item__icon-container content-item__icon-container_${item.status}`}>
                  <Icon className="content-item__icon" name={item.status} />
                </div>
                <p className="content-item__text">{item.name}</p>
              </div>

              <div className="content-item content__item_2">
                <p className="content-item__text">
                  {item.name}.{item.file_name}<span>({item.file_size})</span>
                </p>
              </div>

              <div className="content-item content__item_3">
                <div className="content-item__copy">
                  <p className="content-item__text">{item.ip_address_v4}</p>
                  <button className="content-item__btn-copy" onClick={(e) => e.stopPropagation()}><Icon className="content-item__btn-copy-icon" name="copy" /></button>
                </div>
              </div>

              <div className="content-item content__item_4">
                <div className="content-item__copy">
                  <p className="content-item__text">{item.ip_address_v6}</p>
                  <button className="content-item__btn-copy" onClick={(e) => e.stopPropagation()}><Icon className="content-item__btn-copy-icon" name="copy" /></button>
                </div>
              </div>

              <div className="content-item content__item_5">
                <button className="content-item__btn-link" onClick={(e) => e.stopPropagation()}>
                  <Icon className="content-item__btn-link-devorate-icon" name="target" />
                  <p className="content-item__text">{item.source}</p>
                  <Icon className="content-item__btn-link-icon" name="link" /></button>
              </div>
            </div>

            <div className={`content-item__additional-info ${(idItem === id && isOpen ) ? "content-item__additional-info_open" : ""}`}>
              <div className="content-item__additional-info-container">
                <div>
                  <h2 className="content-item__additional-info-title">Additional info</h2>
                  <div className="content-item__additional-info-link">{item.additional_info}</div>
                </div>
              </div>
              <div className="content-item__additional-info-btns">
                <button>Download</button>
                <Dropdown dropdown={data.download} />
              </div>
            </div>
          </div>
        )}         
      </div>
    </div>
  );
}

export default Content;
