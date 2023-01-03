import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Model as Model01 } from 'models/Planet_01'
import type { Group } from 'three'

const Scene = () => {
  const el = useRef<Group>(null)
  useFrame((state, delta) => {
    if (el.current) {
      el.current.rotation.y += delta / 2
      el.current.rotation.z += delta / 8
    }
  })

  return (
    <group ref={el}>
      <Model01 />
      <ambientLight intensity={3.5} />
    </group>
  )
}

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 30] }}>
      <Stats />
      <OrbitControls />
      <Scene />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  )
}

export default App
