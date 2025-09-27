import { Metadata } from 'next';
import PDFSplitter from '@/components/PDFSplitter';

export const metadata: Metadata = {
  title: 'Split PDF Pages | Free Online PDF Splitter - FlipFileX',
  description: 'Split PDF files into individual pages or custom ranges for free. Extract specific pages, split by page numbers, or create separate documents. Fast, secure, and easy to use.',
  keywords: 'split pdf, pdf splitter, extract pdf pages, separate pdf pages, divide pdf, pdf page extractor, online pdf splitter, free pdf splitter',
  openGraph: {
    title: 'Split PDF Pages | Free Online PDF Splitter - FlipFileX',
    description: 'Split PDF files into individual pages or custom ranges for free. Extract specific pages and create separate documents.',
    type: 'website',
    url: 'https://flipfilex.com/split-pdf-pages',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Split PDF Pages | Free Online PDF Splitter',
    description: 'Split PDF files into individual pages or custom ranges for free. Extract specific pages and create separate documents.',
  },
  alternates: {
    canonical: 'https://flipfilex.com/split-pdf-pages'
  }
};

export default function SplitPDFPage() {
  return <PDFSplitter />;
}