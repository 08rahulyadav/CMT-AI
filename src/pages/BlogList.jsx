import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Static images list (Unsplash se direct working links)
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202802394-7e7a2d5b0a77?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1537432376769-00a6c4e0e07b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176981-7ccf1d2bca4f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80"
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=9")
      .then((res) => res.json())
      .then((data) => {
        const blogsWithImages = data.map((b, i) => ({
          ...b,
          image: images[i % images.length], // assign image from array
          date: `Sep ${15 - i}, 2025`,
        }));
        setBlogs(blogsWithImages);
      });
  }, []);

  return (
    <section className="bg-gray-50">
      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Blogs</h1>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
                <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                  {blog.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedBlog(null)}
            >
              ✕
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedBlog.title}</h2>
            <p className="text-gray-500 mt-1">{selectedBlog.date}</p>
            <p className="text-gray-700 mt-3">{selectedBlog.body}</p>
            <Link
              to={`/blog/${selectedBlog.id}`}
              className="mt-5 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setSelectedBlog(null)}
            >
              Read More
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
