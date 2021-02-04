import React, { FC } from 'react'
import classNames from 'classnames'
import { BaseButtonProps } from './type'
import { ButtonType } from './enum'
export * from './enum'
const Button: FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, size, children, href } = props
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
