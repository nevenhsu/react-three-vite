import React, { useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Effects, OrbitControls } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import { Model as Model01 } from 'models/Planet_01'
import type { Mesh } from 'three'

extend({ UnrealBloomPass })

const Scene = () => {
  const boxRef = useRef<Mesh>(null)
  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.02
    }
  })

  return (
    <>
      <Model01 />
      <ambientLight intensity={1} />
    </>
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
