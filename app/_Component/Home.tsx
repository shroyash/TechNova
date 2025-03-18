"use client";
import "remixicon/fonts/remixicon.css";
import Ball from "./Ball";
const Home = () => {
  return (
    <div>
      <div
        className="relative top-20 h-screen overflow-hidden flex justify-center items-center bg-cover bg-center "
        style={{ backgroundImage: "url('/img/hero-background.jpg')" }}
      >
        <Ball/>
        {/* Content Section */}
        <div className="absolute z-10 text-white text-center -mt-30 md:px-8 max-w-screen-xl mx-auto px-4 py-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-edu-primary border border-edu-border text-edu-text text-sm mb-6">
            <i className="ri-bard-line"></i>
            <span>Introducing</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to TechNova Association Nepal
          </h1>
          <p className="text-1xl md:text-2xl mb-8">
            Empowering the next generation with advanced technical skills and
            innovative learning experiences. Join us to shape your future!
          </p>

          {/* Button */}
          <a
            href="/signup"
            className=" px-6 py-3 text-white text-lg rounded-md shadow-l bg-blue-600 hover:bg-blue-400 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
      {/* Tailwind CSS for Keyframes */}
      <style jsx global>{`
        @keyframes moveUpDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-moveUpDown {
          animation: moveUpDown 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
