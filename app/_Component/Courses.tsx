"use client";

import { motion } from "framer-motion";
import CourseCard from "./CoursesCard";

interface Course {
  title: string;
  description: string;
  duration: string;
  icon: string;
  difficulty: string;
  startDate: string;
  seats: number;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const courses: Course[] = [
  {
    title: "Java",
    description: "Master MERN stack and build production-ready applications",
    duration: "24 weeks",
    icon: "ri-computer-line",
    difficulty: "Intermediate",
    startDate: "April 1, 2024",
    seats: 30,
  },
  {
    title: "Data Science & AI",
    description: "Learn Python, Machine Learning, and Deep Learning",
    duration: "20 weeks",
    icon: "ri-brain-line",
    difficulty: "Advanced",
    startDate: "March 15, 2024",
    seats: 25,
  },
  {
    title: "Mobile App Development",
    description: "Create cross-platform apps with React Native",
    duration: "16 weeks",
    icon: "ri-rocket-2-line",
    difficulty: "Intermediate",
    startDate: "March 30, 2024",
    seats: 28,
  },
];

export default function ShowCourses() {
  return (
    <section className="relative bg-gradient-to-br from-black via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20 relative">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4 text-4xl font-bold text-white">Featured Courses</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-1xl">
            Start your tech journey with our industry-aligned programs designed to get you job-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4 py-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
