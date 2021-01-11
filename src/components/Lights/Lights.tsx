import { FC } from 'react'

const Lights: FC = () => (
  <>
    <pointLight position={[40, 10, 30]} intensity={2} />
    <pointLight position={[-40, 10, -30]} intensity={2} />
  </>
)

export default Lights
