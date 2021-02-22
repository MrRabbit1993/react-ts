/**
 * @desc:Menu接口
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:26:39
 */
type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: (selectedIndex: string) => void
  defaultOpenSubMenus?: string[]
}

/**
 * @desc:MenuItem接口
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:26:39
 */

export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

/**
 * @desc:MenuContext接口约束
 * @Author: MrRabbit
 * @Date: 2021-02-06 10:45:17
 */
export interface IMenuContext {
  index: string
  onSelect?: (selectedIndex: string) => void
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}

/**
 * @desc:SubMenuProps
 * @Author: MrRabbit
 * @Date: 2021-02-22 10:36:27
 */
export interface SubMenuProps {
  index?: string
  title: string
  className?: string
}
