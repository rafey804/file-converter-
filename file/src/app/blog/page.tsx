import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDF Tools Blog - Tips, Tricks & Latest Updates | PDF Converter Pro',
  description: 'Discover helpful articles, tips, and updates about PDF conversion tools. Learn how to get the most out of our PDF to Word, Word to PDF, merge PDF, and PDF to image converters.',
  keywords: 'PDF blog, PDF tips, document conversion, PDF tools, PDF to Word, Word to PDF, merge PDF, PDF to images',
  openGraph: {
    title: 'PDF Tools Blog - Tips, Tricks & Latest Updates',
    description: 'Discover helpful articles, tips, and updates about PDF conversion tools.',
    type: 'website',
    locale: 'en_US',
    url: 'https://flipfilex.com/blog',
    siteName: 'PDF Converter Pro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF Tools Blog - Tips, Tricks & Latest Updates',
    description: 'Discover helpful articles, tips, and updates about PDF conversion tools.',
  },
  alternates: {
    canonical: 'https://flipfilex.com/blog',
  },
};

// Mock blog data - replace with your actual content source
const blogPosts = [
  {
    id: 1,
    title: 'How to Convert PDF to Word Without Losing Formatting',
    excerpt: 'Learn the best practices for converting PDF files to Word documents while preserving your original formatting.',
    date: '2023-10-15',
    slug: 'convert-pdf-to-word-without-losing-formatting',
    category: 'Tutorials',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: '5 Benefits of Converting Word to PDF',
    excerpt: 'Discover why converting your Word documents to PDF format is essential for professional document sharing.',
    date: '2023-10-10',
    slug: 'benefits-of-converting-word-to-pdf',
    category: 'Tips & Tricks',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'How to Merge Multiple PDF Files Efficiently',
    excerpt: 'Step-by-step guide on combining multiple PDF documents into a single file for better organization.',
    date: '2023-10-05',
    slug: 'how-to-merge-multiple-pdf-files',
    category: 'Tutorials',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'When to Use PDF to Image Conversion',
    excerpt: 'Learn about the scenarios where converting PDF pages to image formats is the most practical solution.',
    date: '2023-09-28',
    slug: 'when-to-use-pdf-to-image-conversion',
    category: 'Use Cases',
    readTime: '3 min read',
  },
  {
    id: 5,
    title: 'Top 7 PDF Security Practices You Should Implement',
    excerpt: 'Protect your sensitive documents with these essential PDF security measures and best practices.',
    date: '2023-09-20',
    slug: 'top-pdf-security-practices',
    category: 'Security',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'How to Compress PDF Files Without Losing Quality',
    excerpt: 'Learn effective techniques to reduce PDF file size while maintaining document quality and integrity.',
    date: '2023-09-15',
    slug: 'compress-pdf-files-without-losing-quality',
    category: 'Tutorials',
    readTime: '5 min read',
  },
  {
    id: 7,
    title: 'The Evolution of PDF: From Concept to Essential Tool',
    excerpt: 'Explore the history and development of the PDF format and how it became an indispensable document standard.',
    date: '2023-09-10',
    slug: 'evolution-of-pdf-format',
    category: 'Industry Insights',
    readTime: '8 min read',
  },
  {
    id: 8,
    title: 'How to Add Digital Signatures to PDF Documents',
    excerpt: 'A complete guide to securely signing PDF documents with digital signatures for authentication.',
    date: '2023-09-05',
    slug: 'add-digital-signatures-to-pdf',
    category: 'Tutorials',
    readTime: '6 min read',
  },
  {
    id: 9,
    title: 'PDF vs Other Document Formats: When to Use Which',
    excerpt: 'Compare PDF with Word, HTML, and other formats to determine the best choice for your specific needs.',
    date: '2023-08-28',
    slug: 'pdf-vs-other-document-formats',
    category: 'Comparison',
    readTime: '7 min read',
  },
];

// Extract all unique categories from blog posts
// Replace the problematic line with:
const allCategories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const currentCategory = searchParams.category || 'All';
  const currentPage = Number(searchParams.page) || 1;
  
  // Filter posts by category if specified
  const filteredPosts = currentCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === currentCategory);
  
  // Pagination settings
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Get current page posts
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PDF Tools Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tips, tricks, and latest updates about PDF conversion tools and document management.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {allCategories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${category === 'All' ? 'All' : encodeURIComponent(category)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentCategory === category
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles found in this category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              {/* Previous Page Button */}
              {currentPage > 1 && (
                <Link
                  href={`/blog?category=${encodeURIComponent(currentCategory.toString())}&page=${currentPage - 1}`}
                  className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors"
                >
                  ← Previous
                </Link>
              )}

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/blog?category=${encodeURIComponent(currentCategory.toString())}&page=${page}`}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </Link>
              ))}

              {/* Next Page Button */}
              {currentPage < totalPages && (
                <Link
                  href={`/blog?category=${encodeURIComponent(currentCategory.toString())}&page=${currentPage + 1}`}
                  className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors"
                >
                  Next →
                </Link>
              )}
            </nav>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest blog posts, tips, and updates about our PDF tools.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}