import { Dispatch, FC, SetStateAction, useContext, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import 'react-colorful/dist/index.css'
import styled from 'styled-components'

import ColorContext from 'contexts/ColorContext'

interface ColorPickerProps {
  color: string
  setColor: Dispatch<SetStateAction<string>>
}
const ColorPicker: FC<ColorPickerProps> = ({ color, setColor}) => {
  // const { color, setColor } = useContext(ColorContext)

  useEffect(() => {
    console.log('color', color)
  }, [color])

  return (
    <Wrapper>
      <StyledHexColorPicker
        color={color}
        onChange={(color) => setColor?.(color)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
`

const StyledHexColorPicker = styled(HexColorPicker)`
  position: absolute !important;
  top: 74px;
  left: 70px;
  width: 90px !important;
  height: 90px !important;
`

export default ColorPicker
