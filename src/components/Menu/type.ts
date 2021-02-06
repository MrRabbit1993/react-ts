/**
 * @desc:Menu接口
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:26:39
 */
type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: (selectedIndex: number) => void
}

/**
 * @desc:MenuItem接口
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:26:39
 */

export interface MenuItemProps {
  index?: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}
