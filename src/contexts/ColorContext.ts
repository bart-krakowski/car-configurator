import { createContext, Dispatch, SetStateAction } from 'react'

interface ColorContextProps {
  // isVisible: boolean
  color?: string
  setColor?: Dispatch<SetStateAction<string>>
}
const ColorContext = createContext<ColorContextProps>({})

export const ColorProvider = ColorContext.Provider
export const ColorConsumer = ColorContext.Consumer
export default ColorContext
