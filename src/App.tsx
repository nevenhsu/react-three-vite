import { useRef, forwardRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { Model as Model01 } from 'models/Planet_01'
import type { Group } from 'three'
import type { OrbitControlsProps } from '@react-three/drei'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

const Controls = forwardRef<OrbitControlsImpl, OrbitControlsProps>(
  (props, ref) => {
    const { gl, camera } = useThree()
    return (
      <OrbitControls
        ref={ref}
        makeDefault
        target={[0, 0, -30]}
        args={[camera, gl.domElement]}
        {...props}
      />
    )
  }
)

const Scene = () => {
  const groupRef = useRef<Group>(null)
  const { z } = useControls('Camera', {
    z: {
      value: 30,
      min: 10,
      max: 100,
    },
  })

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta / 2
      groupRef.current.rotation.z += delta / 8
    }
  })

  const pos = [0, 0, -z] as unknown as THREE.Vector3

  return (
    <>
      <Controls target={pos} />
      <group ref={groupRef} position={pos}>
        <Model01 />
        <ambientLight intensity={3.5} />
      </group>
    </>
  )
}

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 0] }}>
      <Stats />
      <Scene />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  )
}

export default App
