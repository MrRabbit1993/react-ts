import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

/**
 * @desc:动画类型
 * @Author: MrRabbit
 * @Date: 2021-07-06 10:26:39
 */

// export interface TransitionProps extends CSSTransitionProps {
//   animation?: AnimationName
// }
export type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName
}
