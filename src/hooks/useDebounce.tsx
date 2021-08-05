import { useState, useEffect } from 'react'

/**
 * 防抖hook
 * @param value
 * @param delay 延迟时间
 */
function useDebounce(value: any, delay: number = 300) {
  const [debounceValue, setDebounceVale] = useState(value)
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebounceVale(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debounceValue
}
export default useDebounce
