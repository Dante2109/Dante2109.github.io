"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Float } from "@react-three/drei";
import * as THREE from "three";

function ArchitecturalShape({ position, scale, color, speed = 1, theme }: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1 * speed;
      meshRef.current.rotation.y = time * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} scale={scale} ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={theme === "dark" ? 0.12 : 0.04}
          emissive={color}
          emissiveIntensity={theme === "dark" ? 0.8 : 0.05}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Float>
  );
}

function Scene({ theme }: { theme: "dark" | "light" }) {
  const gridRef = useRef<THREE.Mesh>(null!);
  const accentColor = theme === "dark" ? "#ffffff" : "#050505";
  const dimColor = theme === "dark" ? "#ffffff" : "#000000";

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.position.z = (time * 1.5) % 2; // Moving grid effect
    }
  });

  return (
    <group>
      {/* Prominent Floating Structures */}
      <ArchitecturalShape position={[-8, 4, -10]} scale={[4, 4, 4]} color={accentColor} speed={0.4} theme={theme} />
      <ArchitecturalShape position={[8, -4, -10]} scale={[5, 5, 5]} color={accentColor} speed={0.3} theme={theme} />
      <ArchitecturalShape position={[0, 0, -15]} scale={[8, 8, 8]} color={accentColor} speed={0.2} theme={theme} />
      
      {/* Heavy Industrial Grid */}
      <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
        <planeGeometry args={[100, 100, 40, 40]} />
        <meshBasicMaterial 
          color={dimColor} 
          wireframe 
          transparent 
          opacity={theme === "dark" ? 0.15 : 0.05} 
        />
      </mesh>

      {/* Dynamic Lighting */}
      <pointLight position={[10, 10, 10]} intensity={theme === "dark" ? 2.5 : 0.5} color={accentColor} />
      <pointLight position={[-10, -10, 10]} intensity={theme === "dark" ? 1.5 : 0.3} color={accentColor} />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={theme === "dark" ? 5 : 1.2} color={accentColor} />

      {/* Dense Particle Field */}
      <Particles count={2500} theme={theme} />
    </group>
  );
}

function Particles({ count, theme }: { count: number; theme: "dark" | "light" }) {
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color={theme === "dark" ? "#ffffff" : "#000000"}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === "dark" ? 0.2 : 0.04}
      />
    </points>
  );
}

export default function Experience({ theme }: { theme: "dark" | "light" }) {
  const bgColor = theme === "dark" ? "#050505" : "#f8f8f8";
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
        <Scene theme={theme} />
        <color attach="background" args={[bgColor]} />
      </Canvas>
      {/* Strong vignetting to keep center readable */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)] opacity-100' : 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] opacity-100'}`} />
      <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-transparent to-[#050505]' : 'bg-gradient-to-b from-transparent via-transparent to-[#f8f8f8]'}`} />
    </div>
  );
}

