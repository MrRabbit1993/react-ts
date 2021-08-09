import React from 'react'
import { ThemeProps } from './../Icon'
export interface ProgressProps {
  percent: number
  strokeHeight?: number
  showText?: boolean
  styles?: React.CSSProperties
  theme?: ThemeProps
}
