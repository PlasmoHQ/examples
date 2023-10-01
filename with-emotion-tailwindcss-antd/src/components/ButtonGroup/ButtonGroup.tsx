import styled from "@emotion/styled"
import React, { cloneElement, useState } from "react"

import type { ButtonGroupProps, ButtonItemProps } from "./type"

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  const [current, setCurrent] = useState(0)
  const childDisplayName = "ButtonItem"

  return (
    <StyledButtonGroup>
      {React.Children.map(
        children as React.ReactElement<ButtonItemProps>,
        (child, index) => {
          if (child && child.type["displayName"] === childDisplayName) {
            return cloneElement(child, {
              isSelect: current === index,
              onClick: () => {
                setCurrent(index)
              }
            })
          }
        }
      )}
    </StyledButtonGroup>
  )
}

const StyledButtonGroup = styled.div`
  position: relative;
  width: 302px;
  background: #fff;
  box-shadow:
    0 0 1px #00000014,
    1px 2px 14px 1px #73727826;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 2147483647;
`

ButtonGroup.displayName = "ButtonGroup"

export default ButtonGroup
