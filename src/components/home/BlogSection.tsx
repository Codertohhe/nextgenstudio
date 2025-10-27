import React from 'react';
import { ScrollReveal, FadeInUp } from '@/components/ui/scroll-animations';
import { Calendar, ArrowRight, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is transforming business operations and what it means for your company's future growth.",
      author: "Alex Thompson",
      date: "December 10, 2024",
      category: "AI & Technology",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Mobile-First Design: Best Practices for 2024",
      excerpt: "Learn the essential principles of mobile-first design and how to create responsive applications that engage users.",
      author: "Sarah Kim",
      date: "December 8, 2024", 
      category: "Web Development",
      readTime: "7 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Creating Interactive E-Books That Captivate",
      excerpt: "Explore innovative techniques for developing interactive e-books that enhance reader engagement and learning outcomes.",
      author: "Michael Rodriguez",
      date: "December 5, 2024",
      category: "Digital Publishing",
      readTime: "6 min read",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our team of experts in technology and digital innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeInUp key={index} delay={index * 100}>
              <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            </FadeInUp>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <a href="/blog" className="btn-hero inline-flex items-center">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSection;