import React from 'react';
import RobotExpressive from "../src/assets/RobotExpressive.glb";
import mk55 from '/mk55.glb';
import ModelViewer from './ModelViewer';


const Viewer = () => {
    return (
        <div className='rar'>
            <ModelViewer url={mk55} />
            <model-viewer src={RobotExpressive} ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1" autoplay animation-name="Death">
                <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                    View in your space
                </button>
                <div id="ar-prompt">
                    {/* <img src="https://modelviewer.dev/shared-assets/icons/hand.png" /> */}
                </div>
            </model-viewer>
        </div>
    )
}

export default Viewer;
