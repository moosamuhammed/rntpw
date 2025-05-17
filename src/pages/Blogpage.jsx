import React from 'react';
import Pagination from '../componens/pagination';
import { Link } from 'react-router-dom';


const blogPosts = [
  {
    id: 1,
    title: 'The Mind-Body Connection in Transpersonal Workouts',
    date: 'May 1, 2025',
    excerpt: 'Explore the deep connections between mind and body through transpersonal workouts, and how these practices can elevate personal transformation.',
  },
  {
    id: 2,
    title: 'Breathing Techniques for Enhanced Workout Performance',
    date: 'April 22, 2025',
    excerpt: 'Discover powerful breathing techniques that complement transpersonal exercises, helping you achieve mental clarity and physical strength.',
  },
  {
    id: 3,
    title: 'The Role of Meditation in Fitness',
    date: 'April 15, 2025',
    excerpt: 'How meditation can be seamlessly integrated into workout routines for better focus, relaxation, and overall fitness growth.',
  },
];

const BlogSection = () => {
  return (
  
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
              <div className="p-6 text-right">
                <Link to="/fullblogs" className="text-blue-600 hover:text-blue-800">Read more</Link>
              </div>
            </div>
          ))}
            
        </div>
      </div>
    </section>
    
  );
};

export default BlogSection;
