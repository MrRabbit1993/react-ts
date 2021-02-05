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
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

/**
 * @desc:button采取交叉类型（原始类型和BaseButtonProps） -- a标签模式
 * @Author: MrRabbit
 * @Date: 2021-02-05 10:12:07
 */
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // 用Partial 将其属性变为都可选
