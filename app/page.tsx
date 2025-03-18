'use client'


import Home from './_Component/Home'
import About from './_Component/About'
import Show from './_Component/Show'
import Courses from './_Component/Courses'
import CourseDuration from  './_Component/CourseDuration'
import WhyChoose from './_Component/WhyChoose'
import { Button } from '@/Components/ui/button'


const page = () => {
  return (
    <>
    <Home/>
    <div className="show flex items-center justify-center bg-gradient-to-r from-black via-blue-900/90 to-purple-900/90 backdrop-blur-sm border-b border-purple-500/20 bg-primary h-screen md:h-[300px]"
   style={{
    backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 255, 0.7)), url('/img/bg-2.jpg')",
    backgroundSize: 'cover', // Ensures the image covers the entire element
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    backgroundAttachment: 'fixed', // Keeps the background fixed while scrolling
  }}
  
  >
        <Show/>

    </div>
<div>
<About/>
<Button className="mt-6 w-fit bg-blue-700">Learn More</Button>

</div>

    <Courses/>
    <WhyChoose/>
    
    {/* <CourseDuration/> */}

    
    </>
  
  )
}

export default page
