"use client"

import { useState } from "react"
import { Tldraw } from "tldraw"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Sphere, Plane } from "@react-three/drei"
import 'tldraw/tldraw.css'

export default function CanvasPage() {
    const [is3D, setIs3D] = useState(false)

    return (
        <div className="fixed inset-0">
            {/* 2D World - Tldraw */}
            {!is3D && <Tldraw />}

            {/* 3D World - Three.js */}
            {is3D && (
                <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    
                    {/* Sample 3D objects */}
                    <Box position={[-2, 0.5, 0]} args={[1, 1, 1]}>
                        <meshStandardMaterial color="orange" />
                    </Box>
                    
                    <Sphere position={[2, 0.5, 0]} args={[0.5, 32, 32]}>
                        <meshStandardMaterial color="hotpink" />
                    </Sphere>
                    
                    <Box position={[0, 0.5, 2]} args={[1, 1, 1]}>
                        <meshStandardMaterial color="cyan" />
                    </Box>

                    {/* Ground plane */}
                    <Plane 
                        rotation={[-Math.PI / 2, 0, 0]} 
                        position={[0, 0, 0]} 
                        args={[20, 20]}
                    >
                        <meshStandardMaterial color="#333" />
                    </Plane>

                    {/* Grid helper */}
                    <gridHelper args={[20, 20, "#666", "#444"]} />

                    {/* Camera controls */}
                    <OrbitControls enableDamping />
                </Canvas>
            )}
            
            {/* Toggle Button - positioned top center */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] pointer-events-auto">
                <button 
                    className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 
                               hover:from-violet-500 hover:to-indigo-500 text-white font-semibold 
                               rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/25
                               transition-all duration-300 ease-out hover:scale-105 
                               border border-white/20 backdrop-blur-sm
                               flex items-center gap-3"
                    onClick={() => setIs3D(!is3D)}
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 
                                    opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <span className="relative text-2xl transition-transform duration-300 group-hover:scale-110">
                        {is3D ? "🎨" : "🧊"}
                    </span>
                    
                    {/* Text */}
                    <span className="relative text-lg tracking-wide">
                        {is3D ? "Switch to 2D" : "Switch to 3D"}
                    </span>
                    
                    {/* Arrow indicator */}
                    <svg 
                        className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>

            {/* Mode indicator */}
            <div className="absolute bottom-4 left-4 z-[1000] pointer-events-none">
                <div className="px-5 py-3 bg-black/60 backdrop-blur-md text-white rounded-xl 
                                border border-white/10 shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-medium">
                        {is3D ? "3D World Mode" : "2D Drawing Mode"}
                    </span>
                </div>
            </div>
        </div>
    )
}