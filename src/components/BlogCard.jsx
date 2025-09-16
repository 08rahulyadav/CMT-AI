import React from "react";

const BlogCard = ({ blog, onClick }) => {
  return (
    <div
      onClick={() => onClick(blog)}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{blog.shortDesc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
