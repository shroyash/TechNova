
import { Card,CardContent } from "@/components/ui/card"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Alex founded TechNova with a vision to create technology that makes a difference. With 15+ years in tech leadership, he guides our strategic direction.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Sarah leads our technical strategy and innovation. Her background in AI and machine learning helps drive our cutting-edge solutions.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    bio: "Michael transforms ideas into exceptional products. His user-centered approach ensures our solutions deliver real value to clients.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Priya Patel",
    role: "Lead Developer",
    bio: "Priya oversees our development team, bringing technical excellence to every project. Her expertise spans multiple programming languages and frameworks.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Kim",
    role: "Business Development",
    bio: "David builds strategic partnerships that fuel our growth. His industry connections and business acumen help expand our market presence.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const TeamMemberComponent = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-square relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="pt-6">
              <div className="mb-2">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
              <p className="text-muted-foreground mt-4">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TeamMemberComponent
