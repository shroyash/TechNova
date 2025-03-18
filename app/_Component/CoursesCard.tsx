import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  description: string;
  duration: string;
  icon: string;
  difficulty: string;
  startDate: string;
  seats: number;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-200 bg-black/50 backdrop-blur-sm border-blue-500/20">
      <div className="flex items-center mb-4">
        <i className={`ri-line ${course.icon} h-8 w-8 text-blue-400 mr-3`} />
        <h3 className="font-semibold text-xl text-white">{course.title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{course.description}</p>
      <div className="mt-auto space-y-3">
        <div className="flex items-center text-sm text-gray-300">
          <i className="ri-time-line h-4 w-4 mr-2" />
          {course.duration}
        </div>
        <div className="flex items-center text-sm text-gray-300">
          <i className="ri-user-line h-4 w-4 mr-2" />
          {course.seats} seats remaining
        </div>
        <Button className="w-full group bg-blue-600 hover:bg-blue-700">
          Learn More
          <i className="ri-arrow-right-s-line h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}
