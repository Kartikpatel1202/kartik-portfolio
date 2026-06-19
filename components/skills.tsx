import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Brain, Wrench, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "HTML/CSS"],
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Data Analysis", "Predictive Modeling"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "EC2", "S3", "Lambda", "CloudWatch", "Docker", "Git"],
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Jupyter", "VS Code"],
    },
    {
      icon: Wrench,
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express", "Flask", "FastAPI"],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Leadership", "Communication", "Project Management"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
