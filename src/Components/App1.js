import { OrbitControls, Stars } from "@react-three/drei";
import Earth from './Earth.js';
// import Stars from './Stars.js';

const App1 = () => {

    const dom = document.getElementsByClassName('container')[0];


    return (
        <>
            <Earth />
            <Stars />

            <ambientLight intensity={0.3} />

            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <OrbitControls enableZoom={true} domElement={dom} />
        </>
    )
}

export default App1


{/* <Sphere visile args={[1, 100, 200]} map={colorBump} scale={2}></Sphere> */ }
{/* <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.3}
          map={colorMap}
          speed={1.5}
          roughness={0}
        /> */}