import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Input from '../Input'
import Icon from '../Icon'
import useDebounce from './../../hooks/useDebounce'
import useClickOutside from './../../hooks/useClickOutside'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]]
      }
    return t
  }
export * from './type'
var AutoComplete = function (props) {
  var fetchSuggestions = props.fetchSuggestions,
    onSelect = props.onSelect,
    value = props.value,
    renderOption = props.renderOption,
    restProps = __rest(props, ['fetchSuggestions', 'onSelect', 'value', 'renderOption'])
  var _a = useState(value),
    inputValue = _a[0],
    setInputValue = _a[1]
  var _b = useState([]),
    suggestions = _b[0],
    setSuggestions = _b[1]
  var _c = useState(false),
    loading = _c[0],
    setLoading = _c[1]
  var _d = useState(-1),
    highLightIndex = _d[0],
    setHighLightIndex = _d[1]
  var triggerSearch = useRef(false)
  var componentRef = useRef(null)
  var debounceValue = useDebounce(inputValue, 500)
  useClickOutside(componentRef, function () {
    setSuggestions([])
  })
  useEffect(
    function () {
      if (debounceValue && triggerSearch.current) {
        var results = fetchSuggestions(debounceValue)
        if (results instanceof Promise) {
          //是一个promise链
          setLoading(true)
          results.then(function (data) {
            setSuggestions(data)
            setLoading(false)
          })
        } else {
          setSuggestions(results)
        }
      } else {
        setSuggestions([])
      }
      setHighLightIndex(-1)
    },
    [debounceValue]
  )
  var onHandleChange = function (e) {
    var value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }
  // 下拉菜单选中事件
  var onHandleSelect = function (item) {
    setInputValue(item.value)
    setSuggestions([])
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(item)
    triggerSearch.current = false
  }
  var highLight = function (index) {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighLightIndex(index)
  }
  //键盘事件
  var onHandleKeyDown = function (e) {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highLightIndex]) {
          onHandleSelect(suggestions[highLightIndex])
        }
        break
      case 38:
        highLight(highLightIndex - 1)
        break
      case 40:
        highLight(highLightIndex + 1)
        break
      case 27:
        setSuggestions([])
        break
      default:
        break
    }
  }
  var renderTemple = function (item) {
    return renderOption ? renderOption(item) : item.value
  }
  var generateDropdown = function () {
    return React.createElement(
      'ul',
      null,
      suggestions.map(function (item, index) {
        var classnames = classNames('suggestion-item', {
          'is-active': index === highLightIndex
        })
        return React.createElement(
          'li',
          {
            key: index,
            onClick: function () {
              return onHandleSelect(item)
            },
            className: classnames
          },
          renderTemple(item)
        )
      })
    )
  }
  return React.createElement(
    'div',
    { className: 'auto-complete', ref: componentRef },
    React.createElement(
      Input,
      __assign(
        {
          value: inputValue,
          onChange: onHandleChange,
          onKeyDown: onHandleKeyDown
        },
        restProps
      )
    ),
    loading ? React.createElement('ul', null, React.createElement(Icon, { icon: 'spinner', spin: true })) : null,
    suggestions.length > 0 ? generateDropdown() : null
  )
}
export default AutoComplete
