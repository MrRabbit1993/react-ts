import React, { FC, useState, DragEvent } from 'react'
import classNames from 'classnames'
import { DraggerProps } from './dragType'
const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props
  const [dragOver, setDragOver] = useState<boolean>(false)

  const klass = classNames('viking-uploader-dragger', {
    'is-dragover': dragOver
  })
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  return (
    <div
      className={klass}
      onDragOver={(e) => handleDrag(e, true)}
      onDragLeave={(e) => handleDrag(e, false)}
      onDrop={handleDrop}>
      {children}
    </div>
  )
}
export default Dragger
