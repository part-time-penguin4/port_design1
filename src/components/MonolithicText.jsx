import { Center, Text3D } from '@react-three/drei';
import { useFrame, extend } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Custom gradient shader material for the PORTFOLIO text
class GradientTextMaterial extends THREE.ShaderMaterial {
    constructor() {
        super({
            uniforms: {
                uTime: { value: 0 },
                uColorA: { value: new THREE.Color('#ec4899') }, // pink
                uColorB: { value: new THREE.Color('#a78bfa') }, // purple
                uColorC: { value: new THREE.Color('#3b82f6') }, // blue edge
            },
            vertexShader: /* glsl */`
                varying vec2 vUv;
                varying vec3 vPosition;
                void main() {
                    vUv = uv;
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: /* glsl */`
                uniform float uTime;
                uniform vec3 uColorA;
                uniform vec3 uColorB;
                uniform vec3 uColorC;
                varying vec2 vUv;
                varying vec3 vPosition;

                void main() {
                    // Animate gradient slowly
                    float t = (vPosition.x + 12.0) / 24.0 + sin(uTime * 0.3) * 0.08;
                    t = clamp(t, 0.0, 1.0);
                    vec3 col = mix(uColorA, uColorB, t);
                    col = mix(col, uColorC, pow(1.0 - t, 3.0) * 0.4);

                    // Emissive brightness boost
                    float emissive = 0.35 + sin(uTime * 0.5 + vPosition.x * 0.3) * 0.1;
                    col *= (1.0 + emissive);

                    gl_FragColor = vec4(col, 1.0);
                }
            `,
        });
    }
}

extend({ GradientTextMaterial });

export function MonolithicText() {
    const textRef = useRef(null);
    const matRef = useRef(null);

    useFrame((state) => {
        if (!textRef.current) return;
        const t = state.clock.elapsedTime;
        // Subtle floating/breathing animation
        textRef.current.position.y = Math.sin(t * 0.5) * 0.1;
        // Advance shader time
        if (matRef.current) matRef.current.uniforms.uTime.value = t;
    });

    return (
        <group position={[0, 0, -7]}>
            <Center>
                <Text3D
                    ref={textRef}
                    font="/fonts/Outfit_Bold.json"
                    size={4.5}
                    height={1.4}
                    curveSegments={32}
                    bevelEnabled
                    bevelThickness={0.1}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    PORTFOLIO
                    <gradientTextMaterial ref={matRef} />
                </Text3D>
            </Center>

            {/* Dark gradient plane behind text for contrast */}
            <mesh position={[0, 0, -2]}>
                <planeGeometry args={[60, 30]} />
                <meshBasicMaterial color="#000000" transparent opacity={0.55} />
            </mesh>
        </group>
    );
}
