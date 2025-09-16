import React from "react";
import { Link } from "react-router-dom";

const BlogModal = ({ blog, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{blog.title}</h2>
        <p className="text-gray-700 mt-2">{blog.longDesc.substring(0, 200)}...</p>
        <Link
          to={`/blog/${blog.id}`}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={onClose}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogModal;
