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

      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
          <p className="text-gray-500 text-sm mt-2">
            Published on {blog.date} • {blog.author}
          </p>

          <div className="mt-6 text-lg text-gray-700 leading-relaxed space-y-5">
            <p>
              {blog.longDesc} Our blog is designed to give you not just surface
              level insights, but a deeper perspective into the subject. We
              believe that every article should add value to the reader's
              journey — whether it’s about technology, lifestyle, health,
              business, or personal growth. Through this post, we dive deeper
              into the nuances of the topic, breaking down complex ideas into
              simple, actionable insights.
            </p>
            <p>
              Knowledge is more powerful when it is shared. That’s why our goal
              is to bring together facts, research, real-world examples, and
              expert opinions, all structured in a way that’s engaging and easy
              to follow. Instead of just telling you what’s happening, we
              provide the context, the "why," and the "how." This way, you can
              walk away with clarity and practical tips you can apply in your
              daily life or professional career.
            </p>
            <p>
              At the heart of our writing lies a commitment to authenticity and
              relevance. We avoid fluff and focus on what matters most to you as
              a reader. Each post is carefully crafted with the intention to
              educate, inspire, and spark conversations. We strongly believe
              that learning is an ongoing process, and our blogs are meant to be
              part of that continuous growth journey for our audience.
            </p>
            <p>
              Thank you for being part of this community. Your time is valuable,
              and we honor it by ensuring that our content is worth every
              minute. Stay connected for more insightful updates, tips, and
              stories that will keep you informed and motivated.
            </p>
          </div>
        </div>

        <aside className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4">About the Author</h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://via.placeholder.com/80"
              alt={blog.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold">{blog.author}</h3>
              <p className="text-gray-500 text-sm">Content Creator</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {blog.author} is a passionate writer who focuses on creating
            impactful content. With years of experience in the industry, their
            aim is to simplify complex topics for readers and encourage them to
            explore more. Outside of writing, they enjoy traveling, photography,
            and connecting with people.
          </p>
        </aside>
      </div>
    </>
  );
};

export default BlogDetail;
