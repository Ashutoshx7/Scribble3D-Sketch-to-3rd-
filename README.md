# Scribble3D  <img width="100" height="100" alt="ChatGPT Image Sep 11, 2025, 03_52_33 AM" src="https://github.com/user-attachments/assets/d5156f99-a89f-418e-afee-ad5b4cde6229" />


                                                  

Turn your sketches into 3D objects and worlds — No 3D skills required!
               

Live Demo / Docs: [Add Link Here]

--------------------------------------------------------
🚀 Want to Contribute?
--------------------------------------------------------
- Join our Discord server (Go to Projects → Scribble3D) to chat with contributors.
- For detailed setup instructions, coding guidelines, and the contribution process, check out CONTRIBUTING.md.

--------------------------------------------------------
🏗️ Architecture
--------------------------------------------------------
Frontend:
  - React: User interface creation
  - TailwindCSS: Styling
  - Zustand: State management

3D Rendering:
  - Three.js: Real-time 3D rendering
  - TLDraw / Fabric.js: 2D canvas drawing
  - Three.js ShapeGeometry / ExtrudeGeometry: 2D → 3D processing
  - GLTFExporter: Export 3D objects

Backend (Python):
  - FastAPI: API framework
  - Optional: AI-assisted 2D → 3D conversion

Backend (Rust via Tauri):
  - Handles file system operations and bridges frontend with local system

--------------------------------------------------------
🎯 Key Features
--------------------------------------------------------
- Intuitive 2D Drawing: create sketches easily on a canvas
- One-Click 3D Conversion: instantly extrude sketches into 3D shapes
- Interactive 3D Scene: rotate, scale, and move objects
- Standard Export Formats: .glTF and .OBJ for Blender/Unity
- Fully Open Source: beginner-friendly and customizable

--------------------------------------------------------
⚙️ Technical Stack
--------------------------------------------------------
Layer                  | Technology
-----------------------|-----------------------------------
Frontend               | React, TailwindCSS, Zustand
3D Rendering           | Three.js
Canvas                 | TLDraw / Fabric.js
Backend                | Python, FastAPI
2D → 3D Processing     | Three.js ShapeGeometry / ExtrudeGeometry
Export                 | Three.js GLTFExporter

--------------------------------------------------------
💡 About
--------------------------------------------------------
Scribble3D allows anyone — beginners, hobbyists, and educators — 
to create 3D objects and worlds from simple sketches 
without needing advanced 3D skills.

--------------------------------------------------------
📥 Quick Start
--------------------------------------------------------
