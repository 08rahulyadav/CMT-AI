import React, { useState } from "react";
import blogData from "../data/blogData";
import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import BlogBanner from "./BlogBanner";

const BlogList = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blogs" className="bg-gray-50">
      <BlogBanner title="Our Latest Blogs" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onClick={setSelectedBlog} />
          ))}
        </div>
      </div>

      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </section>
  );
};

export default BlogList;
