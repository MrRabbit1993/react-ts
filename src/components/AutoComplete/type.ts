import { InputProps } from '../Input'
/**
 * @desc:AutoComplete Props类型
 * @Author: MrRabbit
 * @Date: 2021-08-02 15:30:22
 */
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[]
  onSelect?: (item: string) => void
}
