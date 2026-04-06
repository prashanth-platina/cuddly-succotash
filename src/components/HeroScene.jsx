import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingShape({ geometry, material, position, speed, offset, baseY }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const mesh = meshRef.current;
    mesh.rotation.x += 0.005 * speed;
    mesh.rotation.y += 0.008 * speed;
    mesh.position.y = baseY + Math.sin(t * speed + offset) * 0.15;
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry} material={material} />
  );
}

function CodeLines() {
  const linesRef = useRef([]);

  const linesData = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      width: 0.5 + Math.random() * 1.5,
      x: -0.6 + Math.random() * 0.3,
      y: 0.55 + i * 0.22,
      speed: 0.3 + Math.random() * 0.5,
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    linesRef.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.material.opacity = 0.4 + Math.sin(t * 2 + i * 0.8) * 0.25;
      }
    });
  });

  return (
    <>
      {linesData.map((line, i) => (
        <mesh
          key={i}
          ref={(el) => (linesRef.current[i] = el)}
          position={[line.x, line.y, -0.82]}
          rotation={[-0.15, 0, 0]}
        >
          <boxGeometry args={[line.width, 0.06, 0.02]} />
          <meshBasicMaterial color="#f0e8dd" transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  );
}

function Dots() {
  const dotsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(80 * 3);
    for (let i = 0; i < 80; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []);

  useFrame(() => {
    const d = dotsRef.current;
    d.rotation.y += 0.0015;
    d.rotation.x += 0.0005;
  });

  return (
    <points ref={dotsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={80}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#e8a87c" size={0.05} transparent opacity={0.5} />
    </points>
  );
}

function AccentLight() {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    lightRef.current.position.x = 3 + Math.sin(t * 0.5) * 2;
    lightRef.current.position.y = -1 + Math.cos(t * 0.7) * 1.5;
  });

  return <pointLight ref={lightRef} color="#98c1d9" intensity={0.4} distance={50} position={[3, -1, 4]} />;
}

function Scene() {
  const cameraTarget = useRef({ x: 0, y: 0 });
  const groupRef = useRef();

  // Materials (shared)
  const matMint = useMemo(() => new THREE.MeshStandardMaterial({ color: 0x98c1d9, roughness: 0.3, metalness: 0.1 }), []);
  const matPink = useMemo(() => new THREE.MeshStandardMaterial({ color: 0xffb7b2, roughness: 0.3, metalness: 0.1 }), []);
  const matPeach = useMemo(() => new THREE.MeshStandardMaterial({ color: 0xffdac1, roughness: 0.3, metalness: 0.1 }), []);
  const matOrange = useMemo(() => new THREE.MeshStandardMaterial({ color: 0xe8a87c, roughness: 0.3, metalness: 0.1 }), []);
  const matDark = useMemo(() => new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5, metalness: 0.3 }), []);

  // Geometries (shared)
  const torusGeo = useMemo(() => new THREE.TorusGeometry(0.4, 0.12, 16, 100), []);
  const sphereGeo = useMemo(() => new THREE.SphereGeometry(0.35, 32, 32), []);
  const icoGeo = useMemo(() => new THREE.IcosahedronGeometry(0.3, 0), []);
  const cubeGeo = useMemo(() => new THREE.BoxGeometry(0.45, 0.45, 0.45), []);
  const octaGeo = useMemo(() => new THREE.OctahedronGeometry(0.3, 0), []);
  const coneGeo = useMemo(() => new THREE.ConeGeometry(0.25, 0.5, 6), []);

  useFrame(({ camera, pointer }) => {
    cameraTarget.current.x = pointer.x * 1.5;
    cameraTarget.current.y = -pointer.y * 0.8 + 2;
    camera.position.x += (cameraTarget.current.x - camera.position.x) * 0.02;
    camera.position.y += (cameraTarget.current.y - camera.position.y) * 0.02;
    camera.lookAt(0, 0.8, 0);
  });

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <ambientLight color="#fff5e6" intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} />
      <pointLight color="#e8a87c" intensity={0.5} distance={50} position={[-3, 2, 3]} />
      <AccentLight />

      {/* Laptop */}
      <mesh position={[0, 0, 0]} geometry={new THREE.BoxGeometry(3, 0.15, 2)} material={matDark} />
      <mesh position={[0, 1.1, -0.96]} rotation={[-0.15, 0, 0]} geometry={new THREE.BoxGeometry(2.8, 2, 0.08)} material={matDark} />

      {/* Code lines */}
      <CodeLines />

      {/* Floating shapes */}
      <FloatingShape geometry={torusGeo} material={matMint} position={[-2.5, 1.8, 0.5]} speed={0.8} offset={0} baseY={1.8} />
      <FloatingShape geometry={sphereGeo} material={matPink} position={[2.2, 2.2, -0.3]} speed={1.2} offset={1} baseY={2.2} />
      <FloatingShape geometry={icoGeo} material={matPeach} position={[-1.8, -0.5, 1.5]} speed={0.6} offset={2} baseY={-0.5} />
      <FloatingShape geometry={cubeGeo} material={matOrange} position={[2.8, 0, 1]} speed={1} offset={3} baseY={0} />
      <FloatingShape geometry={octaGeo} material={matMint} position={[0.5, 2.8, 0.8]} speed={0.9} offset={4} baseY={2.8} />
      <FloatingShape geometry={coneGeo} material={matPink} position={[-2, 2.8, -0.5]} speed={0.7} offset={5} baseY={2.8} />

      {/* Dots */}
      <Dots />
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-3d" id="hero3d">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
