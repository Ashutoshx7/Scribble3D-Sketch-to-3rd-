from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router as api_router
from app.core.config import settings

# Create FastAPI app with metadata
app = FastAPI(
    title="Scribble3D API",
    version="0.1.0",
    description="API for sketch enhancement, 3D generation, and editing",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router, prefix="/api")

@app.get("/")
async def root():
    """Root endpoint that confirms the API server is running."""
    return {
        "message": "Scribble3D API server running",
        "version": "0.1.0",
        "docs_url": "/docs"
    }
