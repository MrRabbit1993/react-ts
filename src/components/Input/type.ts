import { ReactElement, InputHTMLAttributes } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
/**
 * @desc:Input接口约束
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:45:17
 */
export type InputSize = 'lg' | 'sm'

//Omit  忽略掉size
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  prepand?: string | ReactElement
  append?: string | ReactElement
}
