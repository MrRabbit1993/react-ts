import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './context'
import { MenuItemProps } from './type'
const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, index, disabled, children, style } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index === context.index
  })
  const handlerClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handlerClick}>
      {children}
    </li>
  )
}
MenuItem.defaultProps = {}
export default MenuItem
