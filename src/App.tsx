import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

const Scene = () => {
  const boxRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.02;
    }
  });

  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <meshNormalMaterial />
      </Box>
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Scene />
    </Canvas>
  );
};

export default App;
