import React, { FC } from 'react'
import classNames from 'classnames'

import { MenuItemProps } from './type'
const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, index, disabled, children, style } = props
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled
  })
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}
MenuItem.defaultProps = {}
export default MenuItem
