import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingBlob({ data, onSelect, index }) {
    const meshRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const { pointer } = useThree();

    // Unique seed per blob for organic motion
    const seed = useMemo(() => index * 1.7 + 0.5, [index]);

    // Choose geometry based on data
    const geometryNode = useMemo(() => {
        switch (data.geometry) {
            case 'icosahedron':
                return <icosahedronGeometry args={[1, 8]} />;
            case 'torus':
                return <torusGeometry args={[1, 0.45, 32, 64]} />;
            case 'sphere':
            default:
                return <sphereGeometry args={[1, 64, 64]} />;
        }
    }, [data.geometry]);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;

        // ── Breathing (scale oscillation) ──
        const breathe = 1 + Math.sin(t * data.speed + seed) * 0.04;
        const hoverScale = hovered ? 1.12 : 1.0;
        const s = data.scale * breathe * hoverScale;
        meshRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.08);

        // ── Floating drift ──
        const baseX = data.position[0];
        const baseY = data.position[1];
        const baseZ = data.position[2];
        const floatX = baseX + Math.sin(t * 0.3 + seed) * data.floatIntensity;
        const floatY = baseY + Math.sin(t * 0.5 + seed * 2) * data.floatIntensity * 0.6;
        const floatZ = baseZ + Math.cos(t * 0.35 + seed * 3) * data.floatIntensity * 0.4;
        meshRef.current.position.lerp(new THREE.Vector3(floatX, floatY, floatZ), 0.03);

        // ── Slow rotation ──
        meshRef.current.rotation.x += data.rotationSpeed * 0.003;
        meshRef.current.rotation.y += data.rotationSpeed * 0.005;

        // ── Magnetic cursor repulsion ──
        const mouseX = pointer.x * 8;
        const mouseY = pointer.y * 5;
        const dx = meshRef.current.position.x - mouseX;
        const dy = meshRef.current.position.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 3.5) {
            const force = (3.5 - dist) * 0.008;
            meshRef.current.position.x += dx * force;
            meshRef.current.position.y += dy * force;
        }
    });

    return (
        <mesh
            ref={meshRef}
            position={data.position}
            castShadow
            onClick={(e) => {
                e.stopPropagation();
                onSelect(data);
            }}
            onPointerEnter={(e) => {
                e.stopPropagation();
                setHovered(true);
                document.body.style.cursor = 'pointer';
            }}
            onPointerLeave={(e) => {
                e.stopPropagation();
                setHovered(false);
                document.body.style.cursor = 'auto';
            }}
        >
            {geometryNode}
            <MeshTransmissionMaterial
                backside
                samples={6}
                resolution={512}
                transmission={0.95}
                roughness={0.1}
                thickness={data.thickness}
                ior={data.ior}
                chromaticAberration={data.chromaticAberration}
                anisotropy={0.3}
                distortion={0.2}
                distortionScale={0.3}
                temporalDistortion={0.1}
                color={data.color}
                attenuationDistance={0.6}
                attenuationColor={data.colorLight}
                toneMapped={true}
            />

            {/* Floating nav label — visible on hover */}
            <Html
                center
                position={[0, data.scale * 1.6 + 0.4, 0]}
                distanceFactor={10}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
                <div
                    style={{
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? 'translateY(0px)' : 'translateY(6px)',
                        transition: 'opacity 0.25s ease, transform 0.25s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {/* Arrow */}
                    {data.targetPage === 0 && (
                        <span style={{ fontSize: 14, color: data.colorLight, opacity: 0.8 }}>↑</span>
                    )}
                    <span
                        style={{
                            padding: '5px 14px',
                            borderRadius: 20,
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: data.colorLight,
                            background: `${data.color}22`,
                            border: `1px solid ${data.colorLight}44`,
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        {data.navLabel}
                    </span>
                    {data.targetPage !== 0 && (
                        <span style={{ fontSize: 14, color: data.colorLight, opacity: 0.8 }}>↓</span>
                    )}
                </div>
            </Html>
        </mesh>
    );
}
