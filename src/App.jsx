import { useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, ScrollControls, Scroll } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Scene } from './components/Scene';
import { ContentSections } from './components/ContentSections';
import { Navbar } from './components/Navbar';
import { useStore } from './store';

export default function App() {
  const scrollToPage = useStore((s) => s.scrollToPage);

  // On blob click: pass the blob's targetPage to scroll to
  const handleSelect = useCallback((blob) => {
    scrollToPage(blob.targetPage ?? 0);
  }, [scrollToPage]);

  return (
    <div id="app-bg" style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Navbar />
      <Canvas
        shadows
        style={{ position: 'absolute', inset: 0 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        onCreated={({ camera }) => {
          camera.position.set(0, 10, 10);
          camera.lookAt(0, 0, 0);
        }}
      >
        <PerspectiveCamera makeDefault fov={45} near={0.1} far={100} />
        <color attach="background" args={['#000000']} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 6]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />

        {/* 3 pages: hero, toolkit, contacts */}
        <ScrollControls pages={3} damping={0.25} distance={1.2}>
          <Scene onSelect={handleSelect} />

          <Scroll html>
            <ContentSections />
          </Scroll>
        </ScrollControls>

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.2} mipmapBlur />
          <Vignette offset={0.3} darkness={0.7} blendFunction={BlendFunction.NORMAL} />
          <ChromaticAberration offset={[0.0008, 0.0008]} blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
