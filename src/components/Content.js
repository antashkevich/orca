import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as styles from '../styles/variables';
import Icon from './Icon';
import { changeItemId } from '../store/actions'
import Dropdown from './Dropdown';

const ContentContainer = styled.div`
  ${(props) => {
    switch (props.name) {
      case "list":
        return `
          ${Header} {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
          }

          ${ContentBody} {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          ${ItemsRow} {
            height: 60px;
            cursor: pointer;

            &:hover {
              background-color: ${styles.color_black};
        
              ${ItemIconContainer},
              ${ItemCopy} {
                border-color: ${styles.color_white};
              }
        
              ${ItemIcon},
              ${ItemCopyIcon},
              ${ItemLinkDecorateIcon},
              ${ItemLinkIcon} {
                fill: ${styles.color_white};
              }
        
              ${ItemText},
              ${ItemText} ${ItemSpan} {
                color: ${styles.color_white};
              }
        
              ${ItemLinkBtn}:hover ${ItemText},
              ${ItemLinkBtn}:hover ${ItemLinkText} {
                transition: ${styles.transition};
                color: ${styles.color_blue};
              }
        
              ${ItemCopyBtn}:hover ${ItemCopyIcon},
              ${ItemLinkBtn}:hover ${ItemLinkIcon} {
                fill: ${styles.color_blue}
              }
            }
          }

          ${ItemIconContainer} {
            width: 24px;
            height: 24px;
          }

          ${ItemIcon} {
            width: 12px;
            height: 12px;
          }

          ${ItemStatusName} {
            display: none;
          }

          ${ItemCopy} {
            max-width: 100%;
          }

          ${InfoPopupHeader} {
            display: none;
          }

          ${InfoBody} {
            &::-webkit-scrollbar-track {
              border-radius: 0;
              background-color: ${styles.color_scrollbar};
              border-bottom-right-radius: 4px;
              box-sizing: content-box;
              margin-top: 8px;
            }
          
            &::-webkit-scrollbar {
              width: 12px;
              background-color: transparent;
            }
          
            &::-webkit-scrollbar-thumb {
              width: 6px;
              box-sizing: border-box;
              border: 3px solid ${styles.color_scrollbar};
              border-radius: 100px;
              background-color: ${styles.color_scrollbar_thumb};
            }
          }

          ${InfoBtnCancel} {
            display: none;
          }
        `
      case "grid":
        return `
          ${Header} {
            display: none;
          }

          ${ContentBody} {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          ${ItemsContainer} {
            display: flex;
          }

          ${ItemsRow} {
            display: grid;
            grid-template-columns: 2fr 3fr;
            align-content: flex-start;
            gap: 8px 32px;
            height: auto;
            box-sizing: border-box;
            padding: 24px 32px;
          }

          ${ItemStatus} {
            display: flex;
            align-items: center;
          }

          ${ItemIconContainer} {
            width: 16px;
            height: 16px;
            border-color: ${styles.color_light_grey};
            margin-right: 4px;
          }

          ${ItemIcon} {
            width: 8px;
            height: 8px;
          }

          ${ItemCopy} {
            max-width: max-content;
          }

          ${ItemLinkBtn} {
            max-width: max-content;
          }

          ${InfoPopupHeader} {
            display: flex;
            height: 80px;
            align-items: center;
            position: relative;
            border-bottom: 1px solid ${styles.color_light_grey};
            padding: 0 24px;
          }

          ${InfoBtnCancel} {
            color: ${styles.color_black};
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            background-color: ${styles.color_white};
            border-radius: 4px;
            border: 1px solid ${styles.color_light_grey};
            transition: ${styles.transition};
            padding: 0 8px;

            &:hover {
              border-color: ${styles.color_blue};
            }
          }

          ${InfoPopup} {
            width: 96%;
            max-width: 900px;
            height: 96%;
            max-height: 492px;
            background-color: ${styles.color_white};
            border-radius: 4px;
            display: flex;
            flex-direction: column;
          }
        `
      default:
        return ``
    }
  }}
`

const Header = styled.div``

const ContentBody = styled.div``

const ItemsContainer = styled.div``

const ItemName = styled.p``

const ItemStatus = styled.div``

const ItemStatusName = styled.p``

const ItemIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border: 1px solid transparent;
  border-radius: 4px;

  ${(props) => {
    switch (props.name) {
      case "high":
        return `
          border-color: ${styles.color_high};
          fill: ${styles.color_high};
        `
      case "medium":
        return `
          border-color: ${styles.color_medium};
          fill: ${styles.color_medium};
        `
      case "low":
        return `
          border-color: ${styles.color_low};
          fill: ${styles.color_low};
        `
      default:
        return ``
    }
  }}  
`

const ItemText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ItemSpan = styled.span`
  color: ${styles.color_light_grey};
  margin-left: 4px;
`

const ItemCopy = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  border: 1px solid ${styles.color_light_grey};
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 8px;
`

const ItemCopyIcon = styled(Icon)`
  width: 100%;
  height: 100%;
  fill: ${styles.color_light_grey};
  transition: ${styles.transition};
`

const ItemCopyBtn = styled.button`
  width: 10px;
  height: 12px;
  flex-shrink: 0;
  margin-left: 8px;

  &:hover {
    ${ItemCopyIcon} {
      fill: ${styles.color_blue};
    }
  }
`

const ItemIcon = styled(Icon)``

const ItemLinkText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ItemLinkDecorateIcon = styled(Icon)`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  fill: ${styles.color_light_grey};
  margin-right: 4px;
`

const ItemLinkIcon = styled(Icon)`
  width: 9px;
  height: 12px;
  flex-shrink: 0;
  fill: ${styles.color_light_grey};
  transition: ${styles.transition};
  margin-left: 4px;
`

const ItemLinkBtn = styled.button`
  display: flex;
  align-items: center;
  overflow: hidden;

  ${ItemText} {
    display: flex;
    align-items: center;
    transition: ${styles.transition};
  }

  &:hover {
    ${ItemText},
    ${ItemLinkText} {
      color: ${styles.color_blue};
    }

    ${ItemLinkIcon} {
      fill: ${styles.color_blue};
    }
  }
`

const ItemAdditionalInfoBtn = styled.button`
  color: ${styles.color_white};
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2/3;
  height: 30px;
  background-color: ${styles.color_blue};
  border-radius: 4px;
  transition: ${styles.transition};
  padding: 0 8px;
  margin-top: 8px;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${styles.color_white_grey};
  }

  @media all and (max-width: 1080px) {
    grid-column: 1/3;
  }
`

const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${styles.color_white};
  border: 1px solid ${styles.color_light_grey};
  border-radius: 4px;
  position: relative;
  z-index: 5;
  transition: ${styles.transition};
`

const itemWidth1 = "58"
const itemWidth2 = "10"
const itemWidth3 = "14.3"
const itemWidth4 = "13.6"
const itemWidth5 = "16.2"
const itemWidth6 = "24.5"

const Item = styled.div`
  ${Header} && {
    ${(props) => {
      switch (props.count) {
        case "1":
          return `
            width: ${itemWidth1}px;
          `
        case "2":
          return `
            width: ${itemWidth2}%;
          `
        case "3":
          return `
            width: ${itemWidth3}%;
          `
        case "4":
          return `
            width: ${itemWidth4}%;
          `
        case "5":
          return `
            width: ${itemWidth5}%;
          `
        case "6":
          return `
            width: ${itemWidth6}%;
            padding-right: 24px;
          `
        default:
          return ``
      }
    }}
  }

  ${(props) => {
    if (props.name === "list") {
      const styles_1 = (props.count === "1" && `
        box-sizing: border-box;
        padding-left: 32px;
      `)

      const styles_2 = (props.count === "2" && `
        width: ${itemWidth2}%;
      `)

      const styles_3 = (props.count === "3" && `
        width: ${itemWidth3}%;
      `)

      const styles_4 = (props.count === "4" && `
        width: ${itemWidth4}%;
      `)

      const styles_5 = (props.count === "5" && `
        width: ${itemWidth5}%;
      `)

      const styles_6 = (props.count === "6" && `
        width: ${itemWidth6}%;
        padding-right: 24px;
      `)
      
      const styles_7 = (props.count === "7" && `
        display: none;
      `)
      return `
        display: flex;
        align-items: center;
        ${styles_1 || styles_2 || styles_3 || styles_4 || styles_5 || styles_6 || styles_7}

        ${ItemName} {
          display: none;
        }

        ${InfoBodyValue} {
          margin-bottom: 16px;
        }
      `
    }

    if (props.name === "grid") {
      const styles_1 = (props.count === "1" && `
        grid-column: 1/1;
        grid-row: 1/1;
      `)

      const styles_2 = (props.count === "2" && `
        grid-column: 1/1;
        grid-row: 2/3;
      `)

      const styles_3 = (props.count === "3" && `
        grid-column: 1/1;
        grid-row: 3/4;
      `)

      const styles_4 = (props.count === "4" && `
        grid-column: 2/3;
        grid-row: 1/1;
      `)

      const styles_5 = (props.count === "5" && `
        grid-column: 2/3;
        grid-row: 2/3;
      `)

      const styles_6 = (props.count === "6" && `
        grid-column: 2/3;
        grid-row: 3/4;
      `)

      const styles_7 = (props.count === "7" && `
        grid-column: 2/3;
        grid-row: 4/5;
      `)
      
      return `
        display: grid;
        grid-template-columns: 1.1fr 2fr;
        align-items: center;
        gap: 8px;
        min-height: 26px;
        ${styles_1 || styles_2 || styles_3 || styles_4 || styles_5 || styles_6 || styles_7}

        ${ItemName} {
          color: ${styles.color_grey};
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex-shrink: 0;
        }
      `
    }
  }}
`

const HeaderText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const InfoContainer = styled.div`
  width: 100%;
  position: relative;
  top: -8px;
  background: ${styles.color_white};
  border: 1px solid ${styles.color_light_grey};
  border-radius: 4px;
  box-sizing: border-box;
  display: none;

  ${(props) => {
    if (props.name === "list" && props.value === "open") {
      return `
        display: block;
        margin-bottom: -8px;

        ${InfoBody} {
          height: 100%;
          max-height: 208px;
        }
      `
    }

    if (props.name === "grid" && props.value === "open") {
      return `
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0;
        background-color: rgba(16, 17, 29, 0.3);
        z-index: 30;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        ${InfoBody} {
          flex-grow: 1;
        }
      `
    }
  }}
`

const InfoPopup = styled.div``

const InfoPopupHeader = styled.div``

const InfoPopupHeaderIconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 12px;

  ${(props) => {
    switch (props.value) {
      case "high":
        return `
          background-color: ${styles.color_high};
        `
      case "medium":
        return `
          background-color: ${styles.color_medium};
        `
      case "low":
        return `
          background-color: ${styles.color_low};
        `
      default:
        return ``
    }
  }}
`

const InfoPopupHeaderIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  fill: ${styles.color_white};
`

const InfoPopupHeaderName = styled.p`
  font-size: 24px;
`

const InfoPopupCloseIcon = styled(Icon)`
  fill: ${styles.color_light_grey};
  width: 100%;
  height: 100%;
  transition: ${styles.transition};
`

const InfoPopupCloseBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding: 4px;

  &:hover {
    ${InfoPopupCloseIcon} {
      fill: ${styles.color_blue};
    }
  }
`

const InfoBody = styled.div`
  box-sizing: border-box;
  overflow: auto;
  overflow-x: hidden;
  margin-bottom: 16px;
`

const InfoBodyContainer = styled.div`
  position: relative;
  padding: 24px 24px 0;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -12px;
    height: 100%;
    width: 12px;
    border-left: 1px solid ${styles.color_light_grey};
    background-color: ${styles.color_scrollbar};
  }
`

const InfoBodyTitle = styled.h2`
  line-height: 18px;
  color: ${styles.color_grey};
  margin-bottom: 8px;
`

const InfoBodyValue = styled.div`
  line-height: 18px;
  word-break: break-all;
`

const InfoBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 0 24px 24px;
  z-index: 20;
`

const InfoBtnDownload = styled.button`
  color: ${styles.color_white};
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2/3;
  height: 30px;
  background-color: ${styles.color_blue};
  border-radius: 4px;
  transition: ${styles.transition};
  padding: 0 8px;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${styles.color_white_grey};
  }
`

const InfoBtnCancel = styled.button`
`

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
    <ContentContainer name={`${layout}`}>
      <Header>
        <Item count="1"></Item>
        {data.sort.items.map((item, id) => 
          <Item key={id} count={`${id + 2}`}>
            <HeaderText>{item}</HeaderText>
          </Item>
        )}
      </Header>

      <ContentBody>
        {data.info.map((item, id) =>
          <ItemsContainer key={id}>
            <ItemsRow onClick={layout === "list" ? (() => toggleAdditionalContainer(id)) : undefined}>
              <Item count="1" name={`${layout}`}>
                <ItemName>Risk level:</ItemName>
                <ItemStatus>
                  <ItemIconContainer name={`${item.status}`}>
                    <ItemIcon name={item.status} />
                  </ItemIconContainer>
                  <ItemStatusName>{capitalizeFirst(item.status)}</ItemStatusName>
                </ItemStatus>
              </Item>

              <Item count="2" name={`${layout}`}>
                <ItemName>Name:</ItemName>
                <ItemText>{item.name}</ItemText>
              </Item>

              <Item count="3" name={`${layout}`}>
                <ItemName>File name:</ItemName>
                <ItemText>
                  {item.name}.{item.file_name}<ItemSpan>({item.file_size})</ItemSpan>
                </ItemText>
              </Item>

              <Item count="4" name={`${layout}`}>
                <ItemName>IP Address v4:</ItemName>
                <ItemCopy>
                  <ItemText>{item.ip_address_v4}</ItemText>
                  <ItemCopyBtn onClick={(e) => e.stopPropagation()}>
                    <ItemCopyIcon name="copy" />
                  </ItemCopyBtn>
                </ItemCopy>
              </Item>

              <Item count="5" name={`${layout}`}>
                <ItemName>IP Address v6:</ItemName>
                <ItemCopy>
                  <ItemText>{item.ip_address_v6}</ItemText>
                  <ItemCopyBtn onClick={(e) => e.stopPropagation()}>
                    <ItemCopyIcon name="copy" />
                  </ItemCopyBtn>
                </ItemCopy>
              </Item>

              <Item count="6" name={`${layout}`}>
                <ItemName>Scan source:</ItemName>
                <ItemLinkBtn onClick={(e) => e.stopPropagation()}>
                  <ItemLinkDecorateIcon name="target" />
                  <ItemText>
                    <ItemLinkText>{item.source}</ItemLinkText>
                    <ItemLinkIcon name="link" />
                  </ItemText>
                </ItemLinkBtn>
              </Item>

              <Item count="7" name={`${layout}`}>
                <ItemAdditionalInfoBtn onClick={() => toggleAdditionalContainer(id)}>Show additional info</ItemAdditionalInfoBtn>
              </Item>
            </ItemsRow>

            <InfoContainer value={`${(idItem === id && isOpen ) ? "open" : ""}`} name={`${layout}`}>
              <InfoPopup>
                <InfoPopupHeader>
                  <InfoPopupHeaderIconContainer value={`${item.status}`}>
                    <InfoPopupHeaderIcon name={item.status} />
                  </InfoPopupHeaderIconContainer>
                  <InfoPopupHeaderName>{capitalizeFirst(item.name)}</InfoPopupHeaderName>
                  <InfoPopupCloseBtn onClick={() => toggleAdditionalContainer(id)}>
                    <InfoPopupCloseIcon name="close" />
                  </InfoPopupCloseBtn>
                </InfoPopupHeader>
                <InfoBody>
                  <InfoBodyContainer>
                    <InfoBodyTitle>Additional info</InfoBodyTitle>
                    <InfoBodyValue>{item.additional_info}</InfoBodyValue>
                  </InfoBodyContainer>
                </InfoBody>
                <InfoBtnsContainer>
                  <InfoBtnDownload>Download</InfoBtnDownload>
                  <Dropdown color="blue" isOpenUp={true} dropdown={data.download} />
                  <InfoBtnCancel onClick={() => toggleAdditionalContainer(id)}>Cancel</InfoBtnCancel>
                </InfoBtnsContainer>
              </InfoPopup>
            </InfoContainer>
          </ItemsContainer>
        )}         
      </ContentBody>
    </ContentContainer>
  );
}

export default Content;
