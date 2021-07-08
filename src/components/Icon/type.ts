import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
/**
 * @desc:Icon主题类型
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:26:39
 */

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

/**
 * @desc:Icon属性接口
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:26:39
 */
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}
