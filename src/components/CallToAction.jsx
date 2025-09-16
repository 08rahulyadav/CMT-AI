export default function CallToAction() {
  return (
    <section className="bg-[#dbe2e9] py-16">
      <div className="max-w-4xl mx-auto relative bg-[#f5f8fb] rounded-2xl shadow-md px-10 py-14 text-center">
        
        {/* Corner Dots */}
        <div className="absolute top-4 left-4 flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex gap-1 ml-3">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex gap-1 ml-3">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex gap-1 ml-3">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex gap-1 ml-3">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2">
          Take the{" "}
          <span className="text-blue-700">Next Step</span>
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Towards Better Health
        </h3>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 text-sm">
          Empire Blue Operates in the growing health and wellness market health
          conscious individuals seeking natural solutions for disease prevention
          and immune support with increasing awareness of health risks like
          cancer and heart disease demand for mineral based supplements in
          mineral water. Ready to experience our exceptional innovative water?
          Book your first can today and discover how we can help you live your
          healthiest life.
        </p>

        {/* Button with Hover Effect */}
        <button className="px-8 py-3 rounded-full bg-blue-900 text-white font-semibold shadow-md 
                           hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 
                           hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
          Book Now
        </button>
      </div>
    </section>
  );
}
