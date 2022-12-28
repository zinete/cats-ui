/**
 * @ Author: ZhengHui
 * @ Create Time: 2022-12-22 17:25:25
 * @ Modified by: ZhengHui
 * @ Modified time: 2022-12-28 13:06:35
 * @ Description: Button
 */

import React from 'react'
import styled from 'styled-components'
import { ButtonProps } from './Button.types'

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    font-size: 16px;
    border-radius: 3px;
    display: inline-block;
    transition: background-color 0.25s ease-out;
    padding: ${props => props.size === 'small' ? '7px 25px 8px' : (props.size === 'medium' ? '9px 30px 11px' : '14px 30px 16px')};
    color: ${props => props.primary ? '#1b116e' : '#ffffff'};
    background-color: ${props => props.primary ? '#6bedb5' : '#1b116e'};
    opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    &:hover {
      background-color: ${props => props.primary ? '#55bd90' : '#6bedb5'};
    }
    &:active {
      border: solid 2px #1b116e;
      padding: ${props => props.size === 'small' ? '5px 23px 6px' : (props.size === 'medium' ? '7px 28px 9px' : '12px 28px 14px')};
    }
`

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.text}</StyledButton>
}

export default Button
