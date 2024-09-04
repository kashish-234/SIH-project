import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { Mesh, Vector3 }from 'three';
import Lenis from '@studio-freight/lenis';
import { TextureLoader } from 'three';

const Earth: React.FC = () => {
  const earthRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={new TextureLoader().load('/8k_earth_daymap.jpg')}
        color="white"
        roughness={0.6}
        metalness={0.4}
      />
    </mesh>
  );
};

const OilSpillMarkers: React.FC = () => {
  const spillPositions = [
    new Vector3(0.5, 0.2, -0.5),
    new Vector3(-0.7, -0.3, 0.6),
    new Vector3(0.3, -0.6, -0.7),
  ];

  return (
    <>
      {spillPositions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
      ))}
    </>
  );
};

const EarthAnimation: React.FC = () => {
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
      camera={{ position: [0, 0, 3], fov: 75 }}
    >
      <ambientLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Earth />
      <OilSpillMarkers />
    </Canvas>
  );
};

export default EarthAnimation;
