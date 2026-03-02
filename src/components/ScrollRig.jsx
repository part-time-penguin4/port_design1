import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useStore } from '../store';

export function ScrollRig({ children }) {
    const groupRef = useRef(null);
    const scroll = useScroll();
    const scrollTargetPage = useStore((s) => s.scrollTargetPage);
    const clearScrollTarget = useStore((s) => s.clearScrollTarget);
    const isScrollingToPage = useRef(false);
    const targetScrollTop = useRef(0);

    useEffect(() => {
        if (scrollTargetPage !== null) {
            const el = scroll.el;
            if (el) {
                // 3 pages: each page is 1/3 of total scrollable height
                const pageCount = 3;
                const maxScroll = el.scrollHeight - el.clientHeight;
                targetScrollTop.current = (scrollTargetPage / (pageCount - 1)) * maxScroll;
                isScrollingToPage.current = true;
                clearScrollTarget();
            }
        }
    }, [scrollTargetPage, clearScrollTarget, scroll]);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Animate scroll to target page
        if (isScrollingToPage.current) {
            const el = scroll.el;
            if (el) {
                el.scrollTop += (targetScrollTop.current - el.scrollTop) * 0.08;
                if (Math.abs(el.scrollTop - targetScrollTop.current) < 1.5) {
                    el.scrollTop = targetScrollTop.current;
                    isScrollingToPage.current = false;
                }
            }
        }

        const s = scroll.offset;

        // Rotate scene as user scrolls
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, s * Math.PI * 1.5, 0.05);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, s * Math.PI * 0.2, 0.05);

        // Camera shift
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -s * 5 + 10, 0.05);
        state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, s * 2 + 10, 0.05);
        state.camera.lookAt(0, 0, 0);
    });

    return <group ref={groupRef}>{children}</group>;
}
