import { Canvas } from "@react-three/fiber";
import Model from "./Model";

export default function App() {
  return (
    <Canvas
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 50,
        position: [0, 4, 12]
      }}
    >
      <Model />
    </Canvas>
  );
}
