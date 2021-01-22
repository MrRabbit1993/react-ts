import React, { useState, FC, useEffect } from 'react'
const LikeButton: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `当前title${count}次`
  })
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}>
      {count}
    </button>
  )
}
export default LikeButton
