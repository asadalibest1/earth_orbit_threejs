import React, { useRef } from 'react'
import { useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three';

import texture from '../assets/earthmap1k.jpg';
import texture2 from '../assets/earthbump.jpg';
import clouds from '../assets/earthCloud.png';




const Earth = (props) => {

    const earth = useRef();
    const cloudsRotate = useRef();

    useFrame(() => {
        earth.current.rotation.y -= 0.002;
        cloudsRotate.current.rotation.y -= 0.001
    })

    const colorMap = useLoader(TextureLoader, texture);
    const colorBump = useLoader(TextureLoader, texture2);
    const colorClouds = useLoader(TextureLoader, clouds);

    return (
        <>
            <mesh ref={earth} {...props}>
                <sphereGeometry attach="geometry" args={[.5, 100, 100]} />
                {/* <meshLambertMaterial attach="material" color="blue" /> */}
                <meshStandardMaterial map={colorMap} bumpMap={colorBump} />
                {/* <meshNormalMaterial attach="material" /> */}

            </mesh>
            <mesh ref={cloudsRotate} >
                <sphereGeometry attach="geometry" args={[.52, 100, 100]} />
                <meshPhongMaterial map={colorClouds} transparent={true} />
            </mesh>


        </>
    )
}

export default Earth