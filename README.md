Scribble3D

Turn your sketches into 3D objects and worlds — no 3D skills required!

🚀 Project Overview

Scribble3D is an open-source tool that lets you:

Draw freely on a 2D canvas.

Convert your sketches into 3D objects.

Place & manipulate them in a 3D world.

Export your creations in standard 3D formats (.glTF, .OBJ) for Blender, Unity, or any other 3D software.

This project makes 3D creation accessible to everyone — beginners, hobbyists, and educators alike.

🎯 Features (MVP)

Draw on a 2D canvas using your mouse.

Save sketches as PNG/SVG.

Extrude sketches into basic 3D shapes.

View and manipulate objects in a 3D scene (rotate, scale, move).

Export 3D models in .glTF or .OBJ format.

⚙️ Tech Stack
Layer	Technology
Frontend	React, TailwindCSS, Zustand, Three.js
Canvas	TLDraw or Fabric.js
Backend	FastAPI, Python
2D → 3D Processing	Three.js ShapeGeometry / ExtrudeGeometry
Export	Three.js GLTFExporter

Fully free & open-source tech stack.

📥 Quick Start
Frontend
cd frontend
npm install
npm run dev


Visit http://localhost:5173 in your browser.

Backend
cd backend
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload


Visit http://127.0.0.1:8000 for backend health check.

🛠️ Future Roadmap

AI-powered sketch enhancement (Hugging Face models).

Sketch + text → realistic 3D model.

Save/load user projects with a database.

Multi-object world editing.

AR/VR export support.

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add feature')

Push to the branch (git push origin feature-name)

Open a Pull Request

📄 License

MIT License © 2025 YOUR_NAME
