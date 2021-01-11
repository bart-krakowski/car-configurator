import React, { Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import 'index.css'
import { Environment, OrbitControls } from 'drei'

import Car from 'components/Car'
import Lights from 'components/Lights'
// import CameraControlls from 'components/CameraControls'
// import ColorContext, { ColorProvider } from 'contexts/ColorContext'
import ColorPicker from 'components/ColorPicker/ColorPicker'
import styled from 'styled-components'


function App() {
  const [color, setColor] = useState<string>('')

  return (
    <Wrapper>
      <Canvas
        shadowMap
        camera={{
          position: [30, 0, 26],
        }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Car color={color} setColor={setColor} />
          <Environment background={false} files="hdr/parking_garage_1k.hdr" />
        </Suspense>
        {/* <CameraControlls /> */}
        <OrbitControls minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 1.8} enableZoom={true} enablePan={true} />
      </Canvas>
      <ColorPicker color={color} setColor={setColor} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #454545 0%, #2F2E2F 100%, #2F2E2F 100%);
`

export default App
