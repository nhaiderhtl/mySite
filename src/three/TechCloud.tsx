import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { allTech, type Tech } from '../data/tech';

// --- texture builder ---------------------------------------------------------
// Each logo (or text fallback) becomes a transparent SVG -> sprite texture.
function techToSvg(tech: Tech): string {
  if (tech.path) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="${tech.path}" fill="${tech.color}"/></svg>`;
  }
  // text-chip fallback for trademarked / icon-less techs (C#, SQL, Prolog, ...)
  const label = tech.name.replace(' IDEs', '').replace(' & ', '&');
  const size = label.length > 4 ? 4.2 : 6;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <rect x="1" y="6" width="22" height="12" rx="3" fill="none"
      stroke="${tech.color}" stroke-width="1.2"/>
    <text x="12" y="12.2" fill="${tech.color}" font-family="monospace"
      font-size="${size}" font-weight="700" text-anchor="middle"
      dominant-baseline="central">${label}</text></svg>`;
}

function useTechTextures(): { tech: Tech; texture: THREE.Texture }[] {
  return useMemo(() => {
    const loader = new THREE.TextureLoader();
    return allTech.map((tech) => {
      const uri = 'data:image/svg+xml;utf8,' + encodeURIComponent(techToSvg(tech));
      const texture = loader.load(uri);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 4;
      return { tech, texture };
    });
  }, []);
}

// fibonacci sphere -> evenly spread points on a sphere of given radius
function spherePoints(count: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius));
  }
  return pts;
}

// --- scene -------------------------------------------------------------------
function Cloud({ paused }: { paused: boolean }) {
  const group = useRef<THREE.Group>(null);
  const items = useTechTextures();
  const { viewport } = useThree();
  const positions = useMemo(() => spherePoints(items.length, 4.2), [items.length]);

  // shrink the whole cloud on narrow viewports so it never overflows
  const scale = Math.min(1, viewport.width / 9);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!paused) group.current.rotation.y += delta * 0.12;
    // gentle pointer parallax
    const px = state.pointer.x * 0.25;
    const py = state.pointer.y * 0.25;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py, 0.05);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px, 0.05);
  });

  return (
    <group ref={group} scale={scale}>
      {items.map(({ tech, texture }, i) => (
        <sprite key={tech.name} position={positions[i]} scale={[1.1, 1.1, 1.1]}>
          <spriteMaterial
            map={texture}
            transparent
            opacity={0.92}
            depthWrite={false}
            toneMapped={false}
          />
        </sprite>
      ))}
    </group>
  );
}

export default function TechCloud({ paused = false }: { paused?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Cloud paused={paused} />
    </Canvas>
  );
}
