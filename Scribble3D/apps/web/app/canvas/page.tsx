"use client"

import { Tldraw } from "tldraw"
import 'tldraw/tldraw.css'

export default function CanvasPage() {
    return (
        <div className="fixed inset-0">
            <Tldraw />
            
            {/* Button overlay - positioned top center */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2  pointer-events-auto">
                <button 
                    className="text-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors"
                    onClick={() => {
                        console.log("Toggle 2D/3D")
                        // TODO: Add your toggle logic here
                    }}
                >
                    2D / 3D World
                </button>
            </div>
        </div>
    )
}