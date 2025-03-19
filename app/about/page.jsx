
'use client'
import Banner from '../_Component/Banner'
import TeamMember from '../_Component/TeamMember'
import FeatureCard from '../_Component/FeatureCard'
import { Lightbulb, Globe, Rocket, Code, Briefcase } from "lucide-react"
import About from '../_Component/About'
import AboutSection from '../_Component/AboutSection'


const AboutPage = () => {
  return (
    <>
      <Banner title="About TechNova" />
      <AboutSection/>
        <TeamMember/>
  
    </>
  )
}


export default AboutPage
