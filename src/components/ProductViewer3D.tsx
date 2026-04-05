import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function DetailedBrick({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const studPositions = useMemo(() => {
    const pos: [number, number][] = [];
    for (let x = -0.6; x <= 0.6; x += 0.4) {
      for (let z = -0.2; z <= 0.2; z += 0.4) {
        pos.push([x, z]);
      }
    }
    return pos;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Main brick body */}
      <mesh castShadow>
        <boxGeometry args={[2, 0.96, 1]} />
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.05} />
      </mesh>
      {/* Studs on top */}
      {studPositions.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.52, z]} castShadow>
          <cylinderGeometry args={[0.16, 0.16, 0.12, 16]} />
          <meshStandardMaterial color={color} roughness={0.25} metalness={0.05} />
        </mesh>
      ))}
      {/* Inner bottom tubes */}
      {[-0.2, 0.2].map((x, i) => (
        <mesh key={`tube-${i}`} position={[x, -0.2, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.5, 12]} />
          <meshStandardMaterial color={new THREE.Color(color).multiplyScalar(0.85)} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

interface ProductViewer3DProps {
  color: string;
}

export default function ProductViewer3D({ color }: ProductViewer3DProps) {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas camera={{ position: [3, 2, 3], fov: 40 }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#FFB800" castShadow />
        <pointLight position={[-3, 2, -2]} intensity={0.3} color="#D4AF37" />
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
          <DetailedBrick color={color} />
        </Float>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={1}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>
    </div>
  );
}
