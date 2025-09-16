import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Since switching to Newtro-X, my energy levels have improved significantly. The mineral content is perfect for post-workout hydration. My gym members love it!",
    initials: "AS",
    name: "Amit Singh",
    role: "Fitness Trainer",
    location: "Pune",
  },
  {
    text: "This is the best hydration drink I’ve ever tried. Keeps me refreshed and active throughout my workouts.",
    initials: "RK",
    name: "Rohit Kumar",
    role: "Athlete",
    location: "Delhi",
  },
  {
    text: "Amazing product! It really helps in faster recovery after training sessions.",
    initials: "SM",
    name: "Sneha Mehta",
    role: "Yoga Instructor",
    location: "Mumbai",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-[#f5f8fb] py-16">
      <div className="max-w-3xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          loop
          className="rounded-2xl shadow-lg bg-[#f0f2f5] overflow-hidden"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center gap-5 py-10 px-8 text-center">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="italic text-gray-700 max-w-xl leading-relaxed text-sm">
                  “{t.text}”
                </p>

                <div className="flex flex-col items-center mt-3">
                  <div className="bg-blue-800 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm">
                    {t.initials}
                  </div>
                  <h4 className="mt-2 font-semibold text-gray-900 text-base">
                    {t.name}
                  </h4>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-prev absolute top-1/2 left-4 -translate-y-1/2 bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full cursor-pointer z-10">
            <FaChevronLeft className="text-gray-600 text-sm" />
          </div>

          <div className="swiper-next absolute top-1/2 right-4 -translate-y-1/2 bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full cursor-pointer z-10">
            <FaChevronRight className="text-gray-600 text-sm" />
          </div>
        </Swiper>
      </div>

      <div className="max-w-2xl mx-auto mt-10 flex justify-around items-center bg-white shadow-md rounded-xl py-4 px-6 text-center">
        <div>
          <p className="text-blue-800 font-bold text-lg">4.9/5</p>
          <p className="text-gray-600 text-xs">Average Rating</p>
        </div>
        <div className="border-l border-gray-300 h-8"></div>
        <div>
          <p className="text-blue-800 font-bold text-lg">98%</p>
          <p className="text-gray-600 text-xs">Satisfaction Rate</p>
        </div>
        <div className="border-l border-gray-300 h-8"></div>
        <div>
          <p className="text-blue-800 font-bold text-lg">10K+</p>
          <p className="text-gray-600 text-xs">Happy Customers</p>
        </div>
      </div>
    </section>
  );
}
