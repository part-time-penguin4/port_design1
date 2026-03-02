import { useState, useCallback, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export function SteadyBlock({ data, onSelect }) {
    const groupRef = useRef(null);
    const meshRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [w, h, d] = data.size;

    // Random initial rotation for a playful look, seeded so it's consistent
    const initialRotY = useRef(Math.sin(data.startPos[0]) * 0.4);
    const initialRotZ = useRef(Math.cos(data.startPos[0]) * 0.2);

    // Gentle floating animation
    useFrame((state) => {
        if (!groupRef.current) return;
        const time = state.clock.getElapsedTime();

        // Float up and down slightly
        // Use data.startPos[0] as a phase offset so they don't all move identically
        const yOffset = Math.sin(time * 1.5 + data.startPos[0]) * 0.15;
        groupRef.current.position.y = data.startPos[1] + yOffset;

        // Very slow rotation
        groupRef.current.rotation.y = initialRotY.current + Math.sin(time * 0.5 + data.startPos[0]) * 0.1;
        groupRef.current.rotation.z = initialRotZ.current + Math.cos(time * 0.4 + data.startPos[0]) * 0.05;

        // Hover scale animation
        if (meshRef.current) {
            const targetScale = hovered ? 1.08 : 1.0;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
        return () => { document.body.style.cursor = 'auto'; };
    }, [hovered]);

    return (
        <group
            ref={groupRef}
            position={data.startPos}
            onClick={(e) => {
                e.stopPropagation();
                onSelect(data);
            }}
            onPointerEnter={(e) => {
                e.stopPropagation();
                setHovered(true);
            }}
            onPointerLeave={(e) => {
                e.stopPropagation();
                setHovered(false);
            }}
        >
            {/* Main Box */}
            <group ref={meshRef}>
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[w, h, d]} />
                    <meshStandardMaterial
                        color={data.color}
                        emissive={data.color}
                        emissiveIntensity={hovered ? 0.7 : 0.4}
                        roughness={0.2}
                        metalness={0.5}
                    />
                </mesh>

                {/* Glow Shell */}
                <mesh>
                    <boxGeometry args={[w + 0.08, h + 0.08, d + 0.08]} />
                    <meshStandardMaterial
                        color={data.colorLight}
                        transparent
                        opacity={hovered ? 0.25 : 0.08}
                        roughness={0}
                        metalness={1}
                        side={THREE.BackSide}
                    />
                </mesh>
            </group>

            {/* Point Light for bloom/illumination */}
            <pointLight
                color={data.colorLight}
                intensity={hovered ? 4 : 2}
                distance={6}
                decay={2}
            />

            {/* HTML Label positioned slightly in front of the block */}
            <Html
                center
                position={[0, 0, d / 2 + 0.1]}
                distanceFactor={10}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#fff',
                        textAlign: 'center',
                        fontFamily: "'Inter', sans-serif",
                        textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                    }}
                >
                    <span style={{ fontSize: '32px', lineHeight: 1 }}>{data.emoji}</span>
                    <span
                        style={{
                            fontSize: '12px',
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                        }}
                    >
                        {data.label}
                    </span>
                </div>
            </Html>
        </group>
    );
}
