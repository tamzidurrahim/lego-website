import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function LegoBrick({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const speed = useMemo(() => 0.2 + Math.random() * 0.3, []);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed + offset) * 0.3;
    meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * speed * 0.7 + offset) * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5 + offset) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[0.8, 0.48, 0.4]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      {/* Studs */}
      {[-0.2, 0.2].map((x) => (
        <mesh key={x} position={[x, 0.28, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.08, 12]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
        </mesh>
      ))}
    </mesh>
  );
}

function FloatingBricks() {
  const bricks = useMemo(() => {
    const colors = ["#FFB800", "#D4AF37", "#FF8000", "#DC143C", "#00C853", "#64B5F6", "#76FF03"];
    return Array.from({ length: 18 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6 - 2,
      ] as [number, number, number],
      color: colors[i % colors.length],
      scale: 0.3 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <>
      {bricks.map((brick, i) => (
        <Float key={i} speed={0.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <LegoBrick {...brick} />
        </Float>
      ))}
    </>
  );
}

function GodRays() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.03 + Math.sin(state.clock.elapsedTime * 0.3) * 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[2, 3, -3]} rotation={[0, 0, -0.4]}>
      <planeGeometry args={[2, 12]} />
      <meshBasicMaterial color="#FFB800" transparent opacity={0.04} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function LegoScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#FFB800" />
        <pointLight position={[-5, 3, 3]} intensity={0.4} color="#D4AF37" />
        <spotLight position={[0, 8, 4]} angle={0.3} penumbra={1} intensity={0.5} color="#FFB800" />
        <FloatingBricks />
        <GodRays />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
