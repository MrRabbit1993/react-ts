import { ButtonSize, ButtonType } from './enum'
/**
 * @desc:基本按钮Props类型
 * @Author: MrRabbit
 * @Date: 2021-02-04 15:30:22
 */
export interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
