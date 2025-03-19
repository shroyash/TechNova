
'use client'
import React, { createContext, useContext, useState } from "react";
import { Course } from "./CourseType";

type CourseContextType = {
  courses: Course[];
  addCourse: (newCourse: Course) => void;
  removeCourse: (id: string) => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within a CourseProvider");
  }
  return context;
};

type CourseProviderProps = {
  children: React.ReactNode;
};

export const CourseProvider: React.FC<CourseProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = (newCourse: Course) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  const removeCourse = (id: string) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, removeCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
