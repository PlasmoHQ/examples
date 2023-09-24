import React from 'react';
import styled from '@emotion/styled';

import type { ButtonItemProps } from "./type"

// type Props = {
//   isSelect: boolean
//   title: string
//   desc: string
//   //   children?: (isSelect: boolean) => React.ReactNode
// }

// type ButtonItemProps = Props & typeof defaultProps

// const defaultProps = {
//   isSelect: false
// }

const ButtonItem: React.FC<ButtonItemProps> = (props: ButtonItemProps) => {
  return (
    <StyledButtonItem $isSelect={props.isSelect} onClick={props.onClick}>
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
      <div className="icon">Default</div>
    </StyledButtonItem>
  )
}

const StyledButtonItem = styled.div<{ $isSelect: boolean }>`
  box-sizing: border-box;
  position: relative;
  padding: 12px;
  background: ${(props) => (props.$isSelect ? "#f8fcff" : "#ffffff")};
  border: ${(props) =>
    props.$isSelect ? "1px solid #4082ff8c" : "1px solid #e6eaf2"};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    border-color: #4082ff8c;
  }

  .title {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: #212b36;
  }

  .desc {
    font-size: 14px;
    line-height: 1.3;
    color: #595959;
  }

  .icon {
    position: absolute;
    top: 0;
    right: 0;
    height: 24px;
    padding: 0 10px;
    text-align: center;
    line-height: 24px;
    background: linear-gradient(112.58deg, #4082ff -5.16%, #454cff 105.31%);
    border-radius: 0 6px 0 12px;
    font-size: 12px;
    color: #fff;
    display: ${(props) => (props.$isSelect ? "block" : "none")};
  }
`

ButtonItem.displayName = "ButtonItem"
ButtonItem.defaultProps = {
  isSelect: false
}

export default ButtonItem
