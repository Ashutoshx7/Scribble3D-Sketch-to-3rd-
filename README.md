# Scribble3D 🎨✨
### Turn your sketches into 3D objects and worlds — No 3D skills required!

[![License: AGPL](https://img.shields.io/badge/License-AGPL-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-orange.svg)](https://threejs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green.svg)](https://fastapi.tiangolo.com/)

---

## 📺 Project Demo
https://github.com/user-attachments/assets/a3c804e1-b208-4855-b285-d571bedf1f3e

---

## 🚀 The Vision
Scribble3D is an AI-powered creative suite that removes the technical barriers to 3D modeling. Whether you're a professional designer or someone who just likes to doodle, Scribble3D allows you to transform simple sketches into rich, interactive 3D environments in seconds.

## ✨ Key Features

### 1. Dual AI Generation Engines
- **Standard Mode (Claude 3.7)**: Generates procedural Three.js JavaScript code. This creates lightweight, editable models that you can refine using procedural logic.
- **Thinking Mode (Trellis)**: Utilizes deep-reasoning foundation models to generate high-fidelity GLTF assets from complex drawings. Perfect for organic or highly detailed shapes.

### 2. Magic "Wow" Workflow
- **Automatic Teleportation**: Once your 3D model is ready, the app automatically switches your view from the 2D canvas to the 3D world.
- **Instant Scene Integration**: Generated objects are parsed and placed into your persistence-backed 3D world immediately.

### 3. Iterative Sketch-to-Edit
- Select any 3D model in your world, draw a modification on the 2D canvas, and click **"Edit 3D"**. Claude will intelligently update the Three.js code or Trellis will re-generate the model to match your vision.

### 4. Interactive 3D World
- **First-Person Controls**: Explore your world with standard WASD controls.
- **Premium Aesthetics**: Features glassmorphism UI, interactive grids, and a dynamic Ocean environment for your models to live in.
- **Multi-device Support**: Includes optimized joystick controls for mobile and tablet browsing.

---

## 🛠️ Tech Stack

**Frontend:**
- **Framework**: Next.js 15 (Turbopack)
- **2D Canvas**: [tldraw](https://tldraw.dev/)
- **3D Engine**: Three.js + [React Three Fiber](https://r3.docs.pmnd.rs/)
- **State Management**: Zustand
- **Styling**: Vanilla CSS with Modern Glassmorphism

**Backend:**
- **API Framework**: FastAPI (Python 3.10+)
- **Task Queue**: Celery + Redis
- **AI Providers**: Claude 3.7 (Anthropic), Gemini (Google), LLaMA 3.3 (Cerebras), Trellis (PiAPI)

---

## 🏃 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.10+
- Redis (running locally or via Docker)

### 1. Clone the repository
```bash
git clone https://github.com/Ashutoshx7/Scribble3D-Sketch-to-3rd-.git
cd Scribble3D-Sketch-to-3rd-
```

### 2. Backend Setup
```bash
cd vibe-draw-main/vibe-draw-main/backend

# Create environment file
cp .env.example .env
# Edit .env with your API keys (ANTHROPIC_API_KEY, GOOGLE_API_KEY, CEREBRAS_API_KEY, TRELLIS_API_KEY)

# Install dependencies
pip install -r requirements.txt

# Start Redis & Worker (Separate terminals)
# Terminal 1: Start Redis
docker run -p 6379:6379 redis

# Terminal 2: Start API Server
uvicorn app.main:app --reload --port 8000

# Terminal 3: Start Celery Worker
celery -A app.core.celery_app worker --loglevel=info -P solo
```

### 3. Frontend Setup
```bash
cd Scribble3D

# Install dependencies
pnpm install

# Start the development server
pnpm --filter web dev
```

Visit `http://localhost:3000` to start creating!

---

## 🎨 How to Use
1. **Sketch**: Use the 2D canvas to draw your object.
2. **Improve**: (Optional) Use the "Improve Drawing" button to let Gemini polish your sketch.
3. **Make 3D**: Click the glowing button. 
   - **Brain Icon ON**: High-fidelity Foundation models.
   - **Brain Icon OFF**: Editable Three.js code.
4. **Explore**: Once the 3D world loads, use **WASD** to walk and **Mouse** to look around.
5. **Manage**: Select objects and press **Backspace** to delete or use the Transform Controls to move them.

---

## 📜 License
This project is licensed under the [AGPL License](LICENSE).

---

## ✨ Credits
Created with ❤️ by the Scribble3D team. Special thanks to the teams at Anthropic, Google DeepMind, and PiAPI for the world-class AI models that power this experience.
