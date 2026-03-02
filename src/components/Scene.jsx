import { useMemo } from 'react';
import { Environment } from '@react-three/drei';
import { FloatingBlob } from './FloatingBlob';
import { CursorLight } from './CursorLight';
import { MonolithicText } from './MonolithicText';
import { PORTFOLIO_BLOBS } from '../data/portfolio';
import { useFrame } from '@react-three/fiber';
import { ScrollRig } from './ScrollRig';
import * as THREE from 'three';

// ── Ambient Particles ────────────────────────────────────────────────────────
function Particles({ count = 60 }) {
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const radius = 20;
        for (let i = 0; i < count; i++) {
            // Distribute spherical
            const r = Math.cbrt(Math.random()) * radius;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, [count]);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#c4b5fd"
                transparent
                opacity={0.5}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

export function Scene({ onSelect }) {
    return (
        <>
            <Environment preset="night" />

            {/* Cursor-reactive light */}
            <CursorLight />

            {/* Static ambient lighting */}
            <pointLight position={[-6, 4, 2]} color="#a78bfa" intensity={8} distance={18} decay={2} />
            <pointLight position={[6, -2, 3]} color="#3b82f6" intensity={6} distance={15} decay={2} />
            <pointLight position={[0, 6, -4]} color="#2dd4bf" intensity={5} distance={15} decay={2} />

            <ScrollRig>
                <MonolithicText />

                {/* Ambient Particles */}
                <Particles count={120} />

                {/* Organic floating blobs */}
                {PORTFOLIO_BLOBS.map((blob, i) => (
                    <FloatingBlob
                        key={blob.id}
                        data={blob}
                        onSelect={onSelect}
                        index={i}
                    />
                ))}
            </ScrollRig>
        </>
    );
}
