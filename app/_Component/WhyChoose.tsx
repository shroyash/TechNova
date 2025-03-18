const WhyChoose = () => {
    return (
      <div
        className="show flex flex-col items-center justify-center text-white text-center px-6 bg-gradient-to-r from-black via-blue-900/90 to-purple-900/90 backdrop-blur-sm border-b border-purple-500/20 bg-primary h-screen md:h-[300px]"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 255, 0.7)), url('/img/bg-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="max-w-2xl mb-6 text-lg md:text-xl">
          We provide the best quality products and services to ensure customer satisfaction. Our team is dedicated to innovation, excellence, and reliability.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold">High Quality</h3>
            <p className="text-sm">We use premium materials and latest technology.</p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold">Affordable Pricing</h3>
            <p className="text-sm">Our products offer the best value for your money.</p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold">Customer Support</h3>
            <p className="text-sm">We are here to assist you 24/7.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChoose;
  