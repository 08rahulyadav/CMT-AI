import React from "react";

const BlogBanner = ({ title = "Our Latest Blogs" }) => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        alt="Blog Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BlogBanner;
