import React from 'react';

const stats = [
  { icon: "ri-user-line", value: "100+", label: "Students Trained" },
  { icon: "ri-medal-line", value: "95", label: "Student Sucess", suffix: "%" },
  { icon: "ri-time-line", value: "10+", label: "Industry Partners" },
  { icon: "ri-book-line", value: "10", label: "Active Courses" },
];

const Show = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 md:gap-10 max-w-screen-xl mx-auto px-4 py-4">
      {stats.map((stat, index) => {
        return (
          <div key={index} className="flex flex-col  items-center  justify-center bg-black/50 backdrop-blur-sm border-blue-500/20 shadow-lg rounded-xl p-6 md:w-52">
            <i className={`${stat.icon} text-6xl text-white mb-4`}></i>
            <div className="text-3xl font-bold text-blue-500">{stat.value}{stat.suffix}</div>
            <div className="text-lg text-center text-white">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Show;
