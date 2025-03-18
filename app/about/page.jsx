
'use client'
import Banner from '../_Component/Banner'
import TeamMember from '../_Component/TeamMember'
import FeatureCard from '../_Component/FeatureCard'
import { Lightbulb, Globe, Rocket, Code, Briefcase } from "lucide-react"
import About from '../_Component/About'


const AboutPage = () => {
  return (
    <>
      <Banner title="About TechNova" />
      <About/>
     
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <FeatureCard 
                icon={Lightbulb} 
                title="Innovation" 
                description="We push boundaries and explore new technologies to create cutting-edge solutions."
              />
              <FeatureCard 
                icon={Globe} 
                title="Global Impact" 
                description="Our solutions reach clients worldwide, making a difference across continents."
              />
              <FeatureCard 
                icon={Rocket} 
                title="Growth" 
                description="We're committed to continuous learning and expanding our capabilities."
              />
            </div>
       
        <TeamMember/>
  
    </>
  )
}


export default AboutPage
