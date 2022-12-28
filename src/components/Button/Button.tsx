/**
 * @ Author: ZhengHui
 * @ Create Time: 2022-12-22 17:25:25
 * @ Modified by: ZhengHui
 * @ Modified time: 2022-12-28 10:14:31
 * @ Description:
 */

import React from 'react'
import './Button.css'

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>
}

export default Button
