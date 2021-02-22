import { createContext } from 'react'
import { IMenuContext } from './type'
export const MenuContext = createContext<IMenuContext>({ index: '0' })
