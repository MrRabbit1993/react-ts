import { useState, useEffect } from 'react'
/**
 * 防抖hook
 * @param value
 * @param delay 延迟时间
 */
function useDebounce(value, delay) {
  if (delay === void 0) {
    delay = 300
  }
  var _a = useState(value),
    debounceValue = _a[0],
    setDebounceVale = _a[1]
  useEffect(
    function () {
      var handler = window.setTimeout(function () {
        setDebounceVale(value)
      }, delay)
      return function () {
        clearTimeout(handler)
      }
    },
    [value, delay]
  )
  return debounceValue
}
export default useDebounce
