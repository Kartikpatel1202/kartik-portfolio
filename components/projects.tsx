import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Shield, TrendingUp, Cloud } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "AWS Image Moderation Email Alert",
      description:
        "An automated system that uses AWS services to moderate images and send email alerts when inappropriate content is detected. Built with AWS Lambda, S3, and SES for scalable content moderation.",
      icon: Shield,
      technologies: ["AWS", "Lambda", "S3", "SES", "Python", "Computer Vision"],
      githubUrl: "https://github.com/Kartikpatel1202/aws-image-moderation-email-alert",
      features: [
        "Automated image content moderation",
        "Real-time email notifications",
        "Scalable AWS architecture",
        "Cost-effective serverless solution",
      ],
    },
    {
      title: "Customer Churn Predictor",
      description:
        "A machine learning model that predicts customer churn using advanced analytics and data science techniques. Helps businesses identify at-risk customers and implement retention strategies.",
      icon: TrendingUp,
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Data Analysis"],
      githubUrl: "https://github.com/Kartikpatel1202/Customer-Churn-Predictor",
      features: [
        "Predictive analytics model",
        "Customer behavior analysis",
        "Data visualization dashboard",
        "Business intelligence insights",
      ],
    },
    {
      title: "Weather Data Analysis and Prediction",
      description:
        "A comprehensive weather analysis system that processes historical weather data and provides accurate predictions using machine learning algorithms and statistical models.",
      icon: Cloud,
      technologies: ["Python", "TensorFlow", "Matplotlib", "Weather APIs", "Time Series Analysis"],
      githubUrl: "https://github.com/Kartikpatel1202/Weather-Data-Analysis-and-Prediction",
      features: [
        "Historical weather data analysis",
        "Predictive weather modeling",
        "Interactive data visualizations",
        "API integration for real-time data",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications showcasing my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <project.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="mt-2 text-base">{project.description}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Kartikpatel1202" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
