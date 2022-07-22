import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './App.js';
import clouds from './assets/earthCloud.png';
import { TextureLoader } from 'three';

const Box = () => {


  const colorClouds = useLoader(TextureLoader, clouds);
  const model = useRef();

  // useEffect(() => {
  //   model.current.geometry.translate(1, 0, 0);
  //   model.current.position.set(-1, 0, 0);

  // }, [])

  useFrame(() => {
    model.current.rotation.y += 0.01
  })

  return (
    <Suspense fallback={null}>
      <Canvas className="canvas" style={{ height: "100vh", width: '100%', background: 'black' }}>
       

        <mesh rotation={[90, 0, 20]}>
          <sphereGeometry attach="geometry" args={[.52, 100, 100]} />
          <meshPhongMaterial map={colorClouds} transparent={true} />
        </mesh>



        {/* <Sphere visile args={[1, 100, 200]} map={colorBump} scale={2}></Sphere> */}
        {/* <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.3}
          map={colorMap}
          speed={1.5}
          roughness={0}
        /> */}

        <ambientLight intensity={0.5} />

        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </Suspense>
  )
}

export default Box