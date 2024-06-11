
import { Canvas } from '@react-three/fiber'
import './App.css'
import ModelViewer from './ModelViewer';
import RobotExpressive from '../src/assets/RobotExpressive.glb';
// import BrainStem from '../public/BrainStem.glb';
import Lkl from './lkl';
import mk55 from '/mk55.glb'
import { Center } from '@react-three/drei';
import supra from './assets/supra.png';
import face from './assets/face.png';
import ModelViewerr from './ModelViewerr';
import Viewer from './Viewer';


// const App = () => {
//   return (
//     <Canvas>
//       <directionalLight position={[1, 2, 3]} />


//       <mesh position={[1, 0, 0]}>     <boxGeometry />   <meshStandardMaterial color={"yellow"} />
//       </mesh>



//     </Canvas>
//   )
// }


const App = () => {

  return (
    <>
    <div className='arar' style={{ height: '100vh' }}>
      {/* <ModelViewerr url={RobotExpressive}/> */}
      <Viewer />
      {/* <ModelViewer url ={mk55}/>  */}
    </div>
    <div className='text' style={{filter:'drop-shadow(30px 10px 4px #4444dd)', justifyContent:'center'}}>
      <img src={supra} id="photoh"/>
      <table>
        <tr>
            <th>Toyota</th>
            <th>STUTUTUTUTUTU</th>
        </tr>
    </table>
    {/* <ModelViewer url ={mk55}/> */}
    {/* <img src= {face} id="photoh" alt="img"/> */}
    AEY MACHA
    </div>
    </>
  );
};



export default App;

