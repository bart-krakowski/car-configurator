import { Dispatch, FC, SetStateAction } from 'react'
import { HexColorPicker } from 'react-colorful'
import 'react-colorful/dist/index.css'
import styled from 'styled-components'

interface ColorPickerProps {
  color: string
  setColor: Dispatch<SetStateAction<string>>
}
const ColorPicker: FC<ColorPickerProps> = ({ color, setColor }) => (
  <Wrapper>
    <StyledHexColorPicker
      color={color}
      onChange={(color) => setColor?.(color)}
    />
  </Wrapper>
)

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
