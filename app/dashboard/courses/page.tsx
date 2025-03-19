"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCourseContext } from "@/Context/CoursesContext"
import { Course } from "@/Context/CourseType"

const initialCourses = [
  {
    id: "1",
    title: "C programming",
    credits: 30,
    department: "Computer Science",
    description: "An introductory course to the fundamentals of computer science and programming.",
    duration: "1 month",
    fees: "RS 1000",
  },
  {
    id: "2",
    title: "Core Java",
    credits: 30,
    department: "Computer Science",
    description: "Learn the basics of Java programming, focusing on object-oriented concepts and basic data structures.",
    duration: "1 month",
    fees: "Rs 1000",
  },
  {
    id: "3",
    title: "Web Design",
    credits: 60,
    department: "Computer Science",
    description: "Master web design fundamentals, including HTML, CSS, JavaScript, and creating responsive, user-friendly websites.",
    duration: "2 months",
    fees: "Rs 1000",
  },
];

const Page = () => {
  const { courses, addCourse, removeCourse } = useCourseContext()
  const [newCourse, setNewCourse] = useState({
    title: "",
    code: "",
    credits: 3,
    department: "",
    description: "",
  })

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault()
    const courseToAdd = {
      id: Date.now().toString(),
      ...newCourse,
    }
    addCourse(courseToAdd)
    setNewCourse({
      title: "",
      code: "",
      credits: 3,
      department: "",
      description: "",
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Course Management</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Add Course Form */}
        <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Add New Course</CardTitle>
            <CardDescription className="text-white/70">
              Fill in the details to add a new course to the system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddCourse} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="text-white">
                  Course Title
                </Label>
                <Input
                  id="title"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="code" className="text-white">
                    Course Code
                  </Label>
                  <Input
                    id="code"
                    value={newCourse.code}
                    onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="credits" className="text-white">
                    Credits
                  </Label>
                  <Select
                    value={newCourse.credits.toString()}
                    onValueChange={(value) => setNewCourse({ ...newCourse, credits: Number.parseInt(value) })}
                  >
                    <SelectTrigger id="credits">
                      <SelectValue placeholder="Select credits" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="department" className="text-white">
                  Department
                </Label>
                <Input
                  id="department"
                  value={newCourse.department}
                  onChange={(e) => setNewCourse({ ...newCourse, department: e.target.value })}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Add Course
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Course List */}
        <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Course List</CardTitle>
            <CardDescription className="text-white/70">Manage existing courses in the system.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableHead className="text-white">Course Code</TableHead>
                <TableHead className="text-white">Title</TableHead>
                <TableHead className="text-white">Department</TableHead>
                <TableHead className="text-white">Credits</TableHead>
                <TableHead className="text-white w-[100px]">Actions</TableHead>
              </TableHeader>
              <TableBody>
                {courses.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-white/70 py-6">
                      No courses found. Add a course to get started.
                    </TableCell>
                  </TableRow>
                ) : (
                  courses.map((course: Course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium text-white">{course.code}</TableCell>
                      <TableCell className="text-white">{course.title}</TableCell>
                      <TableCell className="text-white">{course.department}</TableCell>
                      <TableCell className="text-white">{course.credits}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeCourse(course.id)}
                          className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove course</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Page
