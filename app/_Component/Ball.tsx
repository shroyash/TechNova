

const Ball = () => {
  return (
    <div>
        {/* Balls Container */}
        <div className="absolute z-10 inset-0 flex justify-center items-center pointer-events-none">
          <div className="ball w-3 h-3 rounded-full bg-green-500 absolute top-[100px] left-[100px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-blue-500 absolute top-[200px] left-[200px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-pink-500 absolute top-[400px] left-[300px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-yellow-500 absolute top-[500px] left-[500px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-purple-500 absolute top-[100px] left-[700px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-orange-500 absolute top-[300px] left-[850px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-teal-500 absolute top-[150px] left-[1000px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-indigo-500 absolute top-[50px] left-[1100px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-cyan-500 absolute top-[250px] left-[1200px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-red-500 absolute top-[600px] left-[1200px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-green-500 absolute top-[700px] left-[1100px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-blue-500 absolute top-[800px] left-[950px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-pink-500 absolute top-[900px] left-[800px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-yellow-500 absolute top-[1000px] left-[650px] animate-moveUpDown"></div>
          <div className="ball w-3 h-3 rounded-full bg-purple-500 absolute top-[1100px] left-[500px] animate-moveUpDown"></div>
        </div>

    </div>
  )
}

export default Ball