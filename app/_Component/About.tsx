import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="about flex justify-center items-center bg-gradient-to-br from-black via-blue-900 to-purple-900 min-h-screen px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-20">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            alt="TechNova Nepal"
            src="https://camo.githubusercontent.com/2366b34bb903c09617990fb5fff4622f3e941349e846ddb7e73df872a9d21233/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
            width={900}
            height={900}
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-gray-300 max-w-3xl">
          <p className="text-base md:text-lg leading-relaxed">
            Our <span className="text-white font-semibold">TechNova Nepal</span> students have not only launched their careers but have also achieved exceptional success, reaching new heights in their professional journeys.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Through our unwavering guidance and continuous support, they have unlocked their full potential, refined their skills, and accomplished remarkable milestones. Our expert training and dedicated mentorship have empowered them to excel, equipping them with the knowledge and confidence to thrive in their respective fields.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            With every challenge they face, they emerge stronger, more skilled, and more innovative
          </p>
  
        
        </div>
      </div>
    </div>
  );
};

export default About;
