import { useTexture, useGLTF, OrbitControls } from "@react-three/drei";

export default function Model() {
  const { nodes } = useGLTF("/model.glb");

  const texture = useTexture("/texture.jpg");
  texture.flipY = false;

  return (
    <>
      <color args={["#0c0b00"]} attach="background" />
      <OrbitControls autoRotate />
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.headLightA.geometry}
        position={nodes.headLightA.position}
        rotation={nodes.headLightA.rotation}
      >
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh
        geometry={nodes.headLightB.geometry}
        position={nodes.headLightB.position}
        rotation={nodes.headLightB.rotation}
      >
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh
        geometry={nodes.fogLightA.geometry}
        position={nodes.fogLightA.position}
        rotation={nodes.fogLightA.rotation}
      >
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh
        geometry={nodes.fogLightB.geometry}
        position={nodes.fogLightB.position}
        rotation={nodes.fogLightB.rotation}
      >
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </>
  );
}
