// Types for the PDF Converter Application

export interface ConversionResponse {
  message: string;
  download_url: string;
  filename: string;
}

export interface PdfToImagesResponse extends ConversionResponse {
  image_count: number;
}

export interface ApiError {
  detail: string;
}

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface FileWithId {
  file: File;
  id: string;
  progress: number;
  status: 'pending' | 'uploading' | 'processing' | 'completed' | 'error';
  error?: string;
  downloadUrl?: string;
}

export type ConversionType = 'pdf-to-word' | 'word-to-pdf' | 'merge-pdf' | 'pdf-to-images';

export interface ConversionOptions {
  type: ConversionType;
  files: File[];
}

export interface HealthStatus {
  status: string;
  timestamp: string;
  version: string;
  dependencies: {
    aiofiles: boolean;
    PyPDF2: boolean;
    reportlab: boolean;
    'python-docx': boolean;
    pdf2image: boolean;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface DropzoneProps {
  acceptedFileTypes: string[];
  maxFiles: number;
  onFilesSelected: (files: File[]) => void;
  isProcessing?: boolean;
  title: string;
  description: string;
}