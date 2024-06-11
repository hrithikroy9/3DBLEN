// ModelViewer.js
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import RobotExpressive from "../src/assets/RobotExpressive.glb"


// const Model = ({ url }) => {
//     const { scene } = useGLTF(url);
//     const modelRef = useRef();

//      Auto-rotate the model
//      useFrame(() => {
//          if (modelRef.current) {
//              modelRef.current.rotation.x += 0.01; //  x-axis
//              modelRef.current.rotation.y += 0.01; //  y-axis
//              modelRef.current.rotation.z += 0.01; // Z-axis
//          }
//      });

//     return <primitive ref={modelRef} object={scene} />;
// };



const ModelViewerr = ({ url }) => {
    const modelRef = useRef();
    return (
        <>
        <div>
            <model-viewer src={RobotExpressive} ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1" autoplay animation-name="Death">
                <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                    View in your space
                </button>
                <div id="ar-prompt">
                    <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
                </div>
            </model-viewer>
        </div>        
        </>
    );
};

export default ModelViewerr;



