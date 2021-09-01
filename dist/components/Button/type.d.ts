/// <reference types="react" />
import { ButtonSize, ButtonType } from './enum'
/**
 * @desc:基本按钮Props类型
 * @Author: MrRabbit
 * @Date: 2021-02-04 15:30:22
 */
interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
/**
 * @desc:button采取交叉类型（原始类型和BaseButtonProps）
 * @Author: MrRabbit
 * @Date: 2021-02-05 10:12:07
 */
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
/**
 * @desc:button采取交叉类型（原始类型和BaseButtonProps） -- a标签模式
 * @Author: MrRabbit
 * @Date: 2021-02-05 10:12:07
 */
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
export {}
