import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Cloud, Shield, Zap, Users } from "lucide-react"

export function About() {
  const interests = [
    { icon: Brain, title: "Artificial Intelligence", description: "Machine Learning & Deep Learning" },
    { icon: Zap, title: "Internet of Things", description: "Connected Devices & Automation" },
    { icon: Shield, title: "Cybersecurity", description: "Security & Data Protection" },
    { icon: Cloud, title: "Cloud Computing", description: "AWS & Scalable Solutions" },
    { icon: Code, title: "Software Development", description: "Full-Stack Applications" },
    { icon: Users, title: "Collaboration", description: "Team Projects & Leadership" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and driven by curiosity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am Kartik Patel, a BTech Computer Science student with a passion for solving real-world problems through
              technology. I have hands-on experience in software development, machine learning, and cloud computing,
              having built and deployed multiple projects that blend data-driven insights with practical applications.
            </p>
            <p className="text-lg leading-relaxed">
              My work has strengthened my skills in Python, data analysis, AWS cloud services, and automation, allowing
              me to design solutions that are both efficient and impactful. I am especially interested in areas like AI,
              IoT, and cybersecurity, and I continuously seek out opportunities to learn and apply these emerging
              technologies.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive in collaborative, problem-solving environments and enjoy tackling challenges that require both
              analytical thinking and creativity. Outside of tech, I am a dedicated cricket enthusiast, a sport that has
              taught me discipline, teamwork, and resilience, all of which I bring into my academic and professional
              life.
            </p>
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <interest.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
