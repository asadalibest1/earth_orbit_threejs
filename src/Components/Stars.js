import React, { useRef } from 'react'
import { useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three';
import * as THREE from 'three';

const Stars = (props) => {

    return (
        <>
            {
                Array(200).fill().map(() => {
                    return <mesh position={[...Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))]}>
                        <sphereGeometry attach="geometry" args={[.2, 200, 200]} />
                        <meshStandardMaterial color={0xffffff} />
                    </mesh>
                })

            }
        </>
    )
}

export default Stars