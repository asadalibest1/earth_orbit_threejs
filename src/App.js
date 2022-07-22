import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import './App.css';
import App1 from './Components/App1'
import Profile from './Components/Profile.js';


const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas className="canvas" style={{ height: "100vh", width: '100%', background: 'black' }}>
        <App1 />
      </Canvas>
      <Profile />
    </Suspense>
  )
}

export default App