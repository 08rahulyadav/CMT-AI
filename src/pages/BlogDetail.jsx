import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  // static images array
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1522202802394-7e7a2d5b0a77?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1537432376769-00a6c4e0e07b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1522202176981-7ccf1d2bca4f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1000&q=80",
  ];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.image = images[(id - 1) % images.length]; // same image logic
        data.date = "Sep 2025";
        setBlog(data);
      });
  }, [id]);

  if (!blog) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
      />

      {/* Title & Date */}
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed">{blog.body}</p>

      {/* Back Button */}
      <Link
        to="/blogs"
        className="mt-6 inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
}
