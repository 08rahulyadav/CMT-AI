// src/components/BlogSection.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogData = [
  {
    id: 1,
    title: "The Future of Healthcare",
    description: "How AI is transforming the way we look at modern healthcare...",
    image:
      "https://images.unsplash.com/photo-1588776814546-ec2b9af0886a?w=800&q=80",
    fullText:
      "Artificial Intelligence is revolutionizing healthcare with predictive analytics, patient care improvements, and smarter diagnostics.",
  },
  {
    id: 2,
    title: "Wellness in 2025",
    description: "Top trends shaping wellness and healthy lifestyles this year...",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80",
    fullText:
      "Wellness trends are increasingly focusing on mental health, mindfulness, nutrition, and holistic lifestyle approaches.",
  },
  {
    id: 3,
    title: "Insurance Simplified",
    description: "Breaking down complex policies into easy-to-understand steps...",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=800&q=80",
    fullText:
      "Insurance doesn’t have to be complicated. By simplifying policies, companies are making coverage more accessible to everyone.",
  },
  {
    id: 4,
    title: "Digital Health Records",
    description: "The rise of secure, accessible, and digital medical records...",
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4f50b2b87c?w=800&q=80",
    fullText:
      "Digital health records are creating seamless access to patient history while improving security and patient experience.",
  },
  {
    id: 5,
    title: "Healthy Lifestyle",
    description: "Simple steps to boost immunity and overall health...",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    fullText:
      "Eating balanced meals, exercising regularly, and sleeping well can dramatically improve health.",
  },
  {
    id: 6,
    title: "Affordable Insurance",
    description: "How to choose the right insurance plan for your needs...",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b0?w=800&q=80",
    fullText:
      "Understanding your financial goals and needs can help you pick the best insurance coverage at the right price.",
  },
  {
    id: 7,
    title: "Mental Health Matters",
    description: "Breaking the stigma and focusing on emotional well-being...",
    image:
      "https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800&q=80",
    fullText:
      "Mental health awareness is critical in today’s fast-paced world. Therapy and mindfulness can help maintain balance.",
  },
  {
    id: 8,
    title: "AI in Insurance",
    description: "How AI is making insurance smarter and more efficient...",
    image:
      "https://images.unsplash.com/photo-1581093588401-22f26f5f2b83?w=800&q=80",
    fullText:
      "From fraud detection to customer support, AI is helping insurance companies provide faster, better services.",
  },
  {
    id: 9,
    title: "Fitness Revolution",
    description: "The future of fitness with wearables and smart devices...",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80",
    fullText:
      "Fitness trackers and smart apps are empowering people to take control of their personal health journeys.",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="py-12 bg-gray-50">
      {/* Banner Carousel */}
      <Swiper spaceBetween={20} slidesPerView={1} loop autoplay={{ delay: 3000 }}>
        {blogData.slice(0, 4).map((blog) => (
          <SwiperSlide key={blog.id}>
            <div
              className="h-64 md:h-96 bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${blog.image})` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center rounded-xl">
                <h2 className="text-3xl md:text-5xl text-white font-bold text-center">
                  {blog.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Blog Cards - 3 rows of 3 */}
      <div className="container mx-auto mt-12 px-4 grid gap-8 md:grid-cols-3">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
            onClick={() => setSelectedBlog(blog)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-2">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setSelectedBlog(null)}
            >
              ✖
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold">{selectedBlog.title}</h3>
            <p className="text-gray-700 mt-3">{selectedBlog.fullText}</p>
          </div>
        </div>
      )}
    </section>
  );
}
