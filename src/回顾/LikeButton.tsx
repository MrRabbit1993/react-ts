import React, { useState, FC, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from './app'
const LikeButton: FC = () => {
  const [count, setCount] = useState(0)
  const couts = useRef(0)
  const inputDom = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  console.log('========', theme)
  function handler() {
    setTimeout(() => {
      alert(couts.current)
    }, 3000)
  }
  useEffect(() => {
    console.log('查找结点')
    if (inputDom.current) {
      console.log(inputDom.current)
      inputDom.current.focus()
      console.log('聚合')
    }
  })
  useEffect(() => {
    document.title = `当前title${count}次`
  })
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
          couts.current++
        }}>
        {count}
      </button>
      <button onClick={handler}>按钮</button>
      <input ref={inputDom} />
    </>
  )
}
export default LikeButton
