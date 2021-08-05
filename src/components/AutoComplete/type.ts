import { ReactElement } from 'react'
import { InputProps } from '../Input'

export interface DataSourceObject {
  value: string
}

//直接生成一个泛形来控制类型 交叉类型
export type DataSourceType<T = {}> = T & DataSourceObject

/**
 * @desc:AutoComplete Props类型
 * @Author: MrRabbit
 * @Date: 2021-08-02 15:30:22
 */
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}
