import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionProps } from './type'

export * from './type'

const Transition: FC<TransitionProps> = (props) => {
  const { children, classNames, animation, ...restProps } = props
  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}
export default Transition
