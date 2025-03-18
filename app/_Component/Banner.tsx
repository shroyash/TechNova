interface BannerProps {
  title: string;
}

const Banner = ({ title }: BannerProps) => {
  return (
    <div className="show flex items-center justify-center bg-gradient-to-r from-black via-blue-900/90 to-purple-900/90 backdrop-blur-sm border-b border-purple-500/20 bg-primary h-screen md:h-[300px]"
   style={{
    backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 255, 0.7)), url('/img/bg-2.jpg')",
    backgroundSize: 'cover', // Ensures the image covers the entire element
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    backgroundAttachment: 'fixed', // Keeps the background fixed while scrolling
  }}>
  
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Banner Content */}
      <h1 className="relative mt-18 font-bold text-3xl text-white z-10">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
