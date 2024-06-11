// ModelViewer.js
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef();

    // Auto-rotate the model
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.x += 0.00; // Adjust the speed of rotation for the x-axis
            modelRef.current.rotation.y += 0.00; // Adjust the speed of rotation for the y-axis
            modelRef.current.rotation.z += 0.00;
        }
    });

    return <primitive ref={modelRef} object={scene} />;
};

const ModelViewer = ({ url }) => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Model url={url} />
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Model url={url} />
            </Suspense> */}
            <OrbitControls />
        </Canvas>
    );
};

export default ModelViewer;



