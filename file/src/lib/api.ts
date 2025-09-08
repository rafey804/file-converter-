import axios from 'axios';
import { ConversionResponse, ConversionType, HealthStatus, UploadProgress } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
// Create axios instance with better error handling
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Reduced timeout for health check (10 seconds)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for debugging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      config: {
        url: error.config?.url,
        method: error.config?.method,
        baseURL: error.config?.baseURL,
      }
    });
    return Promise.reject(error);
  }
);

// Progress callback type
type ProgressCallback = (progress: UploadProgress) => void;

export class ApiService {
  
  static async checkHealth(): Promise<HealthStatus> {
    try {
      console.log('Checking API health at:', `${API_BASE_URL}/health`);
      
      const response = await apiClient.get('/health');
      
      console.log('Health check successful:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Health check failed:', error);
      
      // More specific error messages
      if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
        throw new Error(`Cannot connect to API server at ${API_BASE_URL}. Please ensure the backend server is running.`);
      } else if (error.code === 'ENOTFOUND') {
        throw new Error(`API server not found at ${API_BASE_URL}. Please check the server URL.`);
      } else if (error.response?.status === 404) {
        throw new Error('Health check endpoint not found. Please verify the API implementation.');
      } else if (error.response?.status >= 500) {
        throw new Error(`Server error (${error.response.status}): ${error.response.statusText}`);
      }
      
      throw new Error(`API health check failed: ${error.message}`);
    }
  }

  static async convertPdfToWord(
    file: File, 
    onProgress?: ProgressCallback
  ): Promise<ConversionResponse> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await apiClient.post('/convert/pdf-to-word', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 300000, // 5 minutes for conversions
        onUploadProgress: (event: any) => {
          if (onProgress && event.total) {
            const progress: UploadProgress = {
              loaded: event.loaded,
              total: event.total,
              percentage: Math.round((event.loaded * 100) / event.total)
            };
            onProgress(progress);
          }
        }
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.detail) {
        throw new Error(error.response.data.detail);
      }
      if (error.code === 'ECONNREFUSED') {
        throw new Error('Cannot connect to conversion service. Please try again later.');
      }
      throw new Error('PDF to Word conversion failed');
    }
  }

  static async convertWordToPdf(
    file: File, 
    onProgress?: ProgressCallback
  ): Promise<ConversionResponse> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await apiClient.post('/convert/word-to-pdf', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 300000, // 5 minutes for conversions
        onUploadProgress: (event: any) => {
          if (onProgress && event.total) {
            const progress: UploadProgress = {
              loaded: event.loaded,
              total: event.total,
              percentage: Math.round((event.loaded * 100) / event.total)
            };
            onProgress(progress);
          }
        }
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.detail) {
        throw new Error(error.response.data.detail);
      }
      if (error.code === 'ECONNREFUSED') {
        throw new Error('Cannot connect to conversion service. Please try again later.');
      }
      throw new Error('Word to PDF conversion failed');
    }
  }

  static async mergePdfs(
    files: File[], 
    onProgress?: ProgressCallback
  ): Promise<ConversionResponse> {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await apiClient.post('/convert/merge-pdf', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 300000, // 5 minutes for conversions
        onUploadProgress: (event: any) => {
          if (onProgress && event.total) {
            const progress: UploadProgress = {
              loaded: event.loaded,
              total: event.total,
              percentage: Math.round((event.loaded * 100) / event.total)
            };
            onProgress(progress);
          }
        }
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.detail) {
        throw new Error(error.response.data.detail);
      }
      if (error.code === 'ECONNREFUSED') {
        throw new Error('Cannot connect to conversion service. Please try again later.');
      }
      throw new Error('PDF merge failed');
    }
  }

  static async convertPdfToImages(
    file: File, 
    onProgress?: ProgressCallback
  ): Promise<ConversionResponse> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await apiClient.post('/convert/pdf-to-images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 300000, // 5 minutes for conversions
        onUploadProgress: (event: any) => {
          if (onProgress && event.total) {
            const progress: UploadProgress = {
              loaded: event.loaded,
              total: event.total,
              percentage: Math.round((event.loaded * 100) / event.total)
            };
            onProgress(progress);
          }
        }
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.detail) {
        throw new Error(error.response.data.detail);
      }
      if (error.code === 'ECONNREFUSED') {
        throw new Error('Cannot connect to conversion service. Please try again later.');
      }
      throw new Error('PDF to Images conversion failed');
    }
  }

  static getDownloadUrl(filename: string): string {
    return `${API_BASE_URL}/download/${filename}`;
  }

  static async downloadFile(filename: string): Promise<Blob> {
    try {
      const response = await apiClient.get(`/download/${filename}`, {
        responseType: 'blob',
        timeout: 60000, // 1 minute for downloads
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new Error('File not found or has expired');
      }
      if (error.code === 'ECONNREFUSED') {
        throw new Error('Cannot connect to download service. Please try again later.');
      }
      throw new Error('File download failed');
    }
  }

  static async convert(
    type: ConversionType,
    files: File[],
    onProgress?: ProgressCallback
  ): Promise<ConversionResponse> {
    switch (type) {
      case 'pdf-to-word':
        if (files.length !== 1) {
          throw new Error('PDF to Word conversion requires exactly one file');
        }
        return this.convertPdfToWord(files[0], onProgress);
      
      case 'word-to-pdf':
        if (files.length !== 1) {
          throw new Error('Word to PDF conversion requires exactly one file');
        }
        return this.convertWordToPdf(files[0], onProgress);
      
      case 'merge-pdf':
        if (files.length < 2) {
          throw new Error('PDF merge requires at least 2 files');
        }
        return this.mergePdfs(files, onProgress);
      
      case 'pdf-to-images':
        if (files.length !== 1) {
          throw new Error('PDF to Images conversion requires exactly one file');
        }
        return this.convertPdfToImages(files[0], onProgress);
      
      default:
        throw new Error('Unsupported conversion type');
    }
  }

  // Add a method to test if the API is reachable
  static async isApiReachable(): Promise<boolean> {
    try {
      await this.checkHealth();
      return true;
    } catch (error) {
      return false;
    }
  }

  // Add a method to get API status with more details
  static async getApiStatus(): Promise<{
    reachable: boolean;
    url: string;
    error?: string;
    health?: HealthStatus;
  }> {
    try {
      const health = await this.checkHealth();
      return {
        reachable: true,
        url: API_BASE_URL,
        health
      };
    } catch (error: any) {
      return {
        reachable: false,
        url: API_BASE_URL,
        error: error.message
      };
    }
  }
}

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const validateFile = (file: File, allowedTypes: string[]): string | null => {
  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  const isValidType = allowedTypes.some(type => {
    if (type === 'pdf') return fileExtension === 'pdf';
    if (type === 'docx') return fileExtension === 'docx';
    if (type === 'doc') return fileExtension === 'doc';
    return false;
  });
  
  if (!isValidType) {
    return `Invalid file type. Allowed types: ${allowedTypes.join(', ')}`;
  }
  
  const maxSize = 50 * 1024 * 1024; // 50MB
  if (file.size > maxSize) {
    return `File too large. Maximum size is 50MB`;
  }
  
  return null;
};

export const getAcceptedFileTypes = (conversionType: ConversionType): string[] => {
  switch (conversionType) {
    case 'pdf-to-word': return ['pdf'];
    case 'word-to-pdf': return ['docx', 'doc'];
    case 'merge-pdf': return ['pdf'];
    case 'pdf-to-images': return ['pdf'];
    default: return [];
  }
};