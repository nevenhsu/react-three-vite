import { ReactThreeFiber } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'

/* eslint-disable no-unused-vars */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: ReactThreeFiber.Object3DNode<
        UnrealBloomPass,
        typeof UnrealBloomPass
      >
    }
  }
}
/* eslint-enable no-unused-vars */
