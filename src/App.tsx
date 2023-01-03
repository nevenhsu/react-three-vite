import { useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Effects, OrbitControls } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import { Model as Model01 } from 'models/Planet_01'
import type { Group } from 'three'

extend({ UnrealBloomPass })

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
      <ambientLight intensity={1} />
    </group>
  )
}

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 30] }}>
      <OrbitControls />
      <Scene />
      <Effects>
        <unrealBloomPass threshold={0.75} strength={1} radius={0.5} />
      </Effects>
    </Canvas>
  )
}

export default App
