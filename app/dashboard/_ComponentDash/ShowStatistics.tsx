"use client"

import { useCourseContext } from "@/Context/CoursesContext";
import { Card,CardHeader, CardTitle, CardDescription, CardContent } from "@/Components/ui/card";

const ShowStatistics = () => {
  const { courses } = useCourseContext();

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const departmentCount = Array.from(new Set(courses.map((c) => c.department))).length;

  return (
    <>
      {/* Course Statistics */}
      <Card className="bg-black/40 mt-40 backdrop-blur-sm border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white">Course Statistics</CardTitle>
          <CardDescription className="text-white/70">Overview of courses in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="rounded-lg border border-purple-500/30 bg-black/30 p-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <div className="text-2xl font-bold text-white">{courses.length}</div>
              <div className="text-sm text-white/70">Total Courses</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-blue-500/30 bg-black/30 p-4 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <div className="text-2xl font-bold text-white">{departmentCount}</div>
                <div className="text-sm text-white/70">Departments</div>
              </div>
              <div className="rounded-lg border border-purple-500/30 bg-black/30 p-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <div className="text-2xl font-bold text-white">{totalCredits}</div>
                <div className="text-sm text-white/70">Total Credits</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ShowStatistics;

