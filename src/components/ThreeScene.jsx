"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function FruitSlice({ position, color, rotationSpeed, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x += rotationSpeed * 0.01;
    meshRef.current.rotation.y += rotationSpeed * 0.02;
    meshRef.current.position.y += Math.sin(time * 0.5 + position[0]) * 0.002;
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Rind */}
        <mesh>
          <cylinderGeometry args={[1, 1, 0.1, 32]} />
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </mesh>
        {/* Flesh */}
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 0.05, 32]} />
          <meshStandardMaterial color="#fff7ed" roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.06, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 0.05, 32]} />
          <meshStandardMaterial color="#fff7ed" roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

function PowderParticles({ count = 200 }) {
  const mesh = useRef();
  const light = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.1, 0]} />
        <meshStandardMaterial color="#fb923c" transparent opacity={0.8} />
      </instancedMesh>
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <fog attach="fog" args={['#fff', 10, 40]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffedd5" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />
        
        <Environment preset="sunset" />

        {/* Floating Fruit Slices */}
        <FruitSlice position={[-4, 2, -2]} color="#f97316" rotationSpeed={1.5} scale={1.5} /> {/* Orange */}
        <FruitSlice position={[4, -3, -4]} color="#eab308" rotationSpeed={2} scale={1.2} /> {/* Lemon */}
        <FruitSlice position={[5, 3, -5]} color="#22c55e" rotationSpeed={1} scale={1.3} /> {/* Lime */}
        <FruitSlice position={[-5, -2, 0]} color="#ef4444" rotationSpeed={2.5} scale={1.4} /> {/* Blood Orange */}
        <FruitSlice position={[0, 5, -6]} color="#f97316" rotationSpeed={1} scale={1} />
        
        {/* Powder/Dust Effect */}
        <Sparkles count={150} scale={12} size={4} speed={0.4} opacity={0.5} color="#fdba74" />
        <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.3} color="#22c55e" />
        
        {/* Distant Particles */}
        <PowderParticles count={50} />
      </Canvas>
    </div>
  );
}
