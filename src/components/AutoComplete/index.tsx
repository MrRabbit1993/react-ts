import React, { ChangeEvent, FC, useState, useEffect, KeyboardEvent, useRef } from 'react'
import classNames from 'classnames'
import Input from '../Input'
import Icon from '../Icon'
import { AutoCompleteProps, DataSourceType } from './type'
import useDebounce from './../../hooks/useDebounce'
import useClickOutside from './../../hooks/useClickOutside'
export * from './type'

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props
  const [inputValue, setInputValue] = useState<string>(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [highLightIndex, setHighLightIndex] = useState<number>(-1)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debounceValue = useDebounce(inputValue, 500)

  useClickOutside(componentRef, () => {
    setSuggestions([])
  })
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const results = fetchSuggestions(debounceValue)
      if (results instanceof Promise) {
        //是一个promise链
        setLoading(true)
        results.then((data) => {
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
  }, [debounceValue])

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }
  // 下拉菜单选中事件
  const onHandleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    onSelect?.(item)
    triggerSearch.current = false
  }

  const highLight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighLightIndex(index)
  }
  //键盘事件
  const onHandleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
  const renderTemple = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const classnames = classNames('suggestion-item', {
            'is-active': index === highLightIndex
          })
          return (
            <li key={index} onClick={() => onHandleSelect(item)} className={classnames}>
              {renderTemple(item)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="auto-complete" ref={componentRef}>
      <Input value={inputValue} onChange={onHandleChange} onKeyDown={onHandleKeyDown} {...restProps} />
      {loading ? (
        <ul>
          <Icon icon="spinner" spin />
        </ul>
      ) : null}
      {suggestions.length > 0 ? generateDropdown() : null}
    </div>
  )
}

export default AutoComplete
