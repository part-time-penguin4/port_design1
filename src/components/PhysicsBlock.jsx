import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export function PhysicsBlock({ data, onSelect }) {
    const rigidRef = useRef(null);
    const meshRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [w, h, d] = data.size;

    // Use startPos directly for zero-gravity floating
    const [startX, startY, startZ] = data.startPos;
    const initialPos = [startX, startY, startZ];

    // Apply only a gentle spin so cubes rotate in place
    const hasAppliedInitial = useRef(false);
    useEffect(() => {
        if (!rigidRef.current || hasAppliedInitial.current) return;
        hasAppliedInitial.current = true;

        // Gentle slow spin around Y axis only — no drift
        const torque = {
            x: 0,
            y: (Math.random() - 0.5) * 0.3,
            z: 0,
        };
        rigidRef.current.wakeUp();
        rigidRef.current.applyTorqueImpulse(torque, true);
    }, []);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
        return () => { document.body.style.cursor = 'auto'; };
    }, [hovered]);

    // Hover scale animation handled manually on the mesh group to avoid nested RigidBody issues
    const currentScale = useRef(1);
    useFrame(() => {
        if (!meshRef.current) return;
        const targetScale = hovered ? 1.08 : 1.0;
        currentScale.current += (targetScale - currentScale.current) * 0.15;
        meshRef.current.scale.set(currentScale.current, currentScale.current, currentScale.current);
    });

    return (
        <RigidBody
            ref={rigidRef}
            colliders={false} // Use explicit child collider
            position={initialPos}
            restitution={0.8} // bouncy
            friction={0.3}
            linearDamping={0.05}
            angularDamping={0.05}
        >
            <CuboidCollider args={[w / 2, h / 2, d / 2]} />

            <group
                ref={meshRef}
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
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[w, h, d]} />
                    <meshStandardMaterial
                        color={data.color}
                        emissive={data.color}
                        emissiveIntensity={hovered ? 0.6 : 0.3}
                        roughness={0.15}
                        metalness={0.5}
                    />
                </mesh>

                {/* Glow Shell */}
                <mesh>
                    <boxGeometry args={[w + 0.08, h + 0.08, d + 0.08]} />
                    <meshStandardMaterial
                        color={data.colorLight}
                        transparent
                        opacity={hovered ? 0.25 : 0.06}
                        roughness={0}
                        metalness={1}
                        side={THREE.BackSide}
                    />
                </mesh>

                <pointLight color={data.colorLight} intensity={hovered ? 5 : 2} distance={6} decay={2} />

            </group>
        </RigidBody>
    );
}
