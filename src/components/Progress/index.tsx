import React, { FC } from 'react'
import { ProgressProps } from './type'
export * from './type'

const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props
  return (
    <div className="viking-progress-bar" style={styles}>
      <div className="viking-progress-bar-outer" style={{ height: `${strokeHeight}px` }}>
        <div className={`viking-progress-bar-inner color-${theme}`} style={{ width: `${percent}%` }}>
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary'
}
export default Progress
