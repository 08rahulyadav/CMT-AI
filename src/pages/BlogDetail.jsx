import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import BlogBanner from "../components/BlogBanner";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <h2 className="text-center mt-20">Blog Not Found</h2>;

  return (
    <>
      <BlogBanner title={blog.title} />
      <div className="container mx-auto px-6 py-12">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">{blog.longDesc}</p>
      </div>
    </>
  );
};

export default BlogDetail;
