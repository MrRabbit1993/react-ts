import React, { FC } from 'react'
import classNames from 'classnames'

import { MenuProps } from './type'
const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex } = props
  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}
export default Menu
