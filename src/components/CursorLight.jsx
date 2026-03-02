import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

export function CursorLight() {
    const lightRef = useRef(null);
    const { pointer } = useThree();

    useFrame(() => {
        if (!lightRef.current) return;
        // Map pointer to 3D space
        const targetX = pointer.x * 10;
        const targetY = pointer.y * 6;
        lightRef.current.position.x += (targetX - lightRef.current.position.x) * 0.05;
        lightRef.current.position.y += (targetY - lightRef.current.position.y) * 0.05;
    });

    return (
        <pointLight
            ref={lightRef}
            position={[0, 0, 6]}
            color="#e0d4ff"
            intensity={15}
            distance={20}
            decay={2}
        />
    );
}
