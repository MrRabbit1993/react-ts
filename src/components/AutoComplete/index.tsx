import react, { ChangeEvent, FC, useState } from 'react'
import Input from '../Input'
import Icon from '../Icon'
import { AutoCompleteProps, DataSourceType } from './type'
export * from './type'

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      const results = fetchSuggestions(value)
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
