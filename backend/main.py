# main.py - Updated with document, audio, and video converter support
import os
from datetime import datetime
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# Import route modules - Updated to include document and audio converters
from routers import (
    pdf_to_word, word_to_pdf, merge_pdf, pdf_to_images,
    download, png_to_webp, wav_to_mp3, image_converter,
    video_converter, document_converter, audio_converter,
    qr_code_generator, image_compressor, ocr_processor,  # Added QR Code Generator, Image Compressor, and OCR
    font_converter,  # Added Font Converter
    pdf_compressor, pdf_password,  # Added PDF Compressor and Password Protection
    split_pdf  # Added PDF Splitter
)
from utils.config import UPLOAD_DIR
from utils.dependencies import check_dependencies, cleanup_old_files, get_dependency_status

# Lifespan event handler
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("File Converter API started successfully!")
    print(f"Upload directory: {UPLOAD_DIR}")
    check_dependencies()
    cleanup_old_files()
    yield
    # Shutdown
    print("Shutting down File Converter API...")

# Create FastAPI app
app = FastAPI(
    title="File Converter API",
    description="Convert between PDF, Word, Images, Audio, Video, Document, and Font formats",  # Updated description
    version="3.0.0",  # Version bump for new features
    lifespan=lifespan
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3005","http://localhost:3001", "http://127.0.0.1:3001", "http://127.0.0.1:3005", "http://localhost:8000", "http://127.0.0.1:8000", "http://flipfilex.com", "https://flipfilex.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers - Updated to include document and audio converters
app.include_router(pdf_to_word.router, prefix="/convert", tags=["PDF to Word"])
app.include_router(word_to_pdf.router, prefix="/convert", tags=["Word to PDF"])
app.include_router(merge_pdf.router, prefix="/convert", tags=["Merge PDF"])
app.include_router(pdf_to_images.router, prefix="/convert", tags=["PDF to Images"])
app.include_router(png_to_webp.router, prefix="/convert", tags=["PNG to WebP"])
app.include_router(wav_to_mp3.router, prefix="/convert", tags=["WAV to MP3"])
app.include_router(image_converter.router, prefix="/convert", tags=["Image Converter"])
app.include_router(video_converter.router, prefix="/convert", tags=["Video Converter"])
app.include_router(document_converter.router, prefix="/convert", tags=["Document Converter"])  # New document converter
app.include_router(audio_converter.router, prefix="/convert", tags=["Audio Converter"])  # New audio converter
app.include_router(qr_code_generator.router, prefix="/convert", tags=["QR Code Generator"])  # New QR Code Generator
app.include_router(image_compressor.router, prefix="/convert", tags=["Image Compressor"])  # New Image Compressor
app.include_router(ocr_processor.router, prefix="/convert", tags=["OCR Text Extraction"])  # New OCR Processor
app.include_router(font_converter.router, prefix="/convert", tags=["Font Converter"])  # New Font Converter
app.include_router(pdf_compressor.router, prefix="/convert", tags=["PDF Compressor"])  # New PDF Compressor
app.include_router(pdf_password.router, prefix="/convert", tags=["PDF Password Protection"])  # New PDF Password Protection
app.include_router(split_pdf.router, tags=["PDF Splitter"])  # New PDF Splitter (prefix already included in router)
app.include_router(download.router, tags=["Download"])

# Root endpoint
@app.get("/")
async def root():
    return {"message": "File Converter API is running - Complete Media & Document Conversion Suite!"}

# Health endpoint - Updated to include FFmpeg and all converter status
@app.get("/health")
async def health_check():
    # Import here to avoid circular imports
    try:
        from converters.video_converter import FFMPEG_AVAILABLE
    except ImportError:
        FFMPEG_AVAILABLE = False
    
    dependencies = get_dependency_status()
    dependencies["ffmpeg"] = FFMPEG_AVAILABLE  # Add FFmpeg status
    
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "3.0.0",
        "supported_conversions": [
            "PDF ↔ Word",
            "PDF → Images",
            "PDF Merge",
            "PDF Compression",
            "PDF Password Protection",
            "Image Formats (PNG, JPG, WebP, etc.)",
            "Audio Formats (WAV, MP3, AAC, etc.)",
            "Video Formats (MP4, AVI, MOV, etc.)",
            "Document Formats (DOCX, PDF, TXT, etc.)",
            "Font Formats (TTF, OTF, WOFF, WOFF2, etc.)",
            "QR Code Generation",
            "Image Compression",
            "OCR Text Extraction"
        ],
        "dependencies": dependencies
    }

# New endpoint to list available converters
@app.get("/converters")
async def list_converters():
    return {
        "available_converters": {
            "pdf_to_word": "/convert/pdf-to-word",
            "word_to_pdf": "/convert/word-to-pdf",
            "merge_pdf": "/convert/merge-pdf",
            "pdf_to_images": "/convert/pdf-to-images",
            "png_to_webp": "/convert/png-to-webp",
            "wav_to_mp3": "/convert/wav-to-mp3",
            "image_converter": "/convert/image",
            "video_converter": "/convert/video",
            "document_converter": "/convert/document",
            "audio_converter": "/convert/audio",
            "font_converter": "/convert/font",
            "pdf_compressor": "/convert/compress-pdf",
            "pdf_password": "/convert/protect-pdf",
            "qr_code_generator": "/convert/generate-qr-code",
            "image_compressor": "/convert/compress-image",
            "ocr_processor": "/convert/extract-text"
        },
        "supported_formats": {
            "images": ["PNG", "JPG", "JPEG", "WebP", "GIF", "BMP", "TIFF"],
            "documents": ["PDF", "DOCX", "DOC", "TXT", "RTF", "ODT"],
            "audio": ["MP3", "WAV", "AAC", "FLAC", "OGG", "M4A"],
            "video": ["MP4", "AVI", "MOV", "MKV", "WMV", "FLV", "WebM"],
            "fonts": ["TTF", "OTF", "WOFF", "WOFF2", "EOT", "SVG", "PS1"],
            "qr_codes": ["PNG", "JPG", "SVG", "PDF"]
        }
    }

# Error handlers
@app.exception_handler(413)
async def file_too_large_handler(request, exc):
    return JSONResponse(
        status_code=413,
        content={"detail": "File too large"}
    )

@app.exception_handler(500)
async def internal_error_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)