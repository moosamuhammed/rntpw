import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    category: "Travel",
    date: "13 March 2023",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
"      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro modi laborum, nisi dolores perspiciatis ducimus magnam quos suscipit labore. Ex assumenda provident voluptate recusandae, voluptatibus unde maiores alias magni. Quo!", 
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREP04yMaI6I82hmMKOb0adPUO1TpBXCQC7jwYPxZ6GS0SEt4L_XJZE9wY&s",
    link: "#",
  },
  {
    category: "Development",
    date: "11 March 2023",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore aliquam optio veritatis sequi quae quam totam molestias impedit voluptates!",
    image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
    link: "#",
    highlight: true,
  },
  {
    category: "Sports",
    date: "10 March 2023",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    description:
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique cupiditate, nemo voluptates perspiciatis saepe nobis sit est at dolorum dolore illum id perferendis repudiandae harum officia laudantium. Animi.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    link: "#",
  },
];

function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-black min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-extrabold tracking-wide">Blog</h2>
        <button className="bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-red-900">
          View All
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-md border transition transform hover:scale-105 ${
              post.highlight ? "border-white" : "border-white"
            } bg-white animate-fadeIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-black mb-1">
                {post.category.toUpperCase()} • {post.date}
              </p>
              <h3 className="text-md font-semibold mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-black mb-4">{post.description}</p>
              <button className="bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-red-900">
                <Link to='/fullblogs' className="text-white
                 underline text-sm font-semibold hover:text-red-300">
                Read More...
              </Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
