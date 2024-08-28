import { Canvas } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Color, MeshStandardMaterial } from 'three';
import Lenis from '@studio-freight/lenis';

const OilSlick: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      const material = meshRef.current.material as MeshStandardMaterial;
      material.color = new Color(`hsl(${(Date.now() / 100) % 360}, 50%, 50%)`);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="rgba(0,0,0,0.6)" />
    </mesh>
  );
};

const BackgroundAnimation: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <ambientLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <OilSlick />
    </Canvas>
  );
};

export default BackgroundAnimation;
