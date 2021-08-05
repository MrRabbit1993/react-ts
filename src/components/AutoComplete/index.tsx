import react, { ChangeEvent, FC, useState } from 'react'
import Input from '../Input'
import { AutoCompleteProps, DataSourceType } from './type'
export * from './type'

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      const results = fetchSuggestions(value)
      setSuggestions(results)
    } else {
      setSuggestions([])
    }
  }
  // 下拉菜单选中事件
  const onHandleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    onSelect?.(item)
  }
  const renderTemple = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => onHandleSelect(item)}>
              {renderTemple(item)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="auto-complete">
      <Input value={inputValue} onChange={onHandleChange} {...restProps} />
      {suggestions.length > 0 ? generateDropdown() : null}
    </div>
  )
}

export default AutoComplete
