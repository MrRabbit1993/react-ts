import React, { FC, useState } from 'react'
import classNames from 'classnames'

import { MenuProps, IMenuContext } from './type'
import { MenuContext } from './context'
const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handlerClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handlerClick
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passContext}>{children}</MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}
export default Menu
