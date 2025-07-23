"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Brain,
  Cloud,
  Database,
  Award,
  GraduationCap,
  User,
  Briefcase,
  Download,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Zap,
  Rocket,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Enhanced Header with Vibrant Design */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-lg shadow-purple-500/10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Kartik Patel
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 group"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Vibrant Resume Button */}
          <Button
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 border-0"
            asChild
          >
            <Link
              href="https://drive.google.com/file/d/10aA_0iCnIpbM8zEOMViEilTWE4rL55qR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/90 backdrop-blur-xl">
            <div className="container px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                size="sm"
                className="w-full mt-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg"
                asChild
              >
                <Link
                  href="https://drive.google.com/file/d/10aA_0iCnIpbM8zEOMViEilTWE4rL55qR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section with Vibrant Gradients */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 via-purple-100/30 to-pink-100/50"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white border-0 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
                  <Sparkles className="h-3 w-3 mr-1" />
                  BTech Computer Science Student
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                    Kartik Patel
                  </span>
                </h1>

                <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                  Passionate Computer Science student specializing in{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AI, Machine Learning, and Cloud Computing
                  </span>
                  . Building scalable solutions that solve real-world problems with creativity and innovation.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 border-0 text-lg px-8 py-6"
                  onClick={scrollToContact}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                  <Sparkles className="h-4 w-4 ml-2" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur border-2 border-purple-200 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-lg px-8 py-6"
                  asChild
                >
                  <Link href="https://github.com/Kartikpatel1202" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    View Projects
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-3 py-2 rounded-full shadow-md">
                  <MapPin className="h-4 w-4 text-purple-500" />
                  Chennai, India
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-3 py-2 rounded-full shadow-md">
                  <GraduationCap className="h-4 w-4 text-cyan-500" />
                  VIT Chennai
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-2 rounded-full shadow-md">
                  <Award className="h-4 w-4" />
                  8.99 CGPA
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <Image
                    src="/kartik.jpeg"
                    alt="Kartik Patel"
                    width={400}
                    height={400}
                    className="relative rounded-full border-4 border-white shadow-2xl shadow-purple-500/20 object-cover w-full h-full"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-white via-purple-50/30 to-cyan-50/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-purple-500/10 border border-white/20">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    I am Kartik Patel, a BTech Computer Science student with a passion for solving real-world problems
                    through technology. I have hands-on experience in software development, machine learning, and cloud
                    computing, having built and deployed multiple projects that blend data-driven insights with
                    practical applications.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    My work has strengthened my skills in Python, data analysis, AWS cloud services, and automation,
                    allowing me to design solutions that are both efficient and impactful. I am especially interested in
                    areas like{" "}
                    <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      AI, IoT, and cybersecurity
                    </span>
                    , and I continuously seek out opportunities to learn and apply these emerging technologies.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I thrive in collaborative, problem-solving environments and enjoy tackling challenges that require
                    both analytical thinking and creativity. Outside of tech, I am a dedicated{" "}
                    <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      cricket enthusiast
                    </span>
                    , a sport that has taught me discipline, teamwork, and resilience.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-gradient-to-br from-white via-purple-50/50 to-cyan-50/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-purple-500" />
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Quick Facts
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/50">
                      <span className="text-gray-600">Age:</span>
                      <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0">21</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/50">
                      <span className="text-gray-600">Location:</span>
                      <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white border-0">
                        Chennai, India
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/50">
                      <span className="text-gray-600">Degree:</span>
                      <Badge className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white border-0">
                        BTech CSE
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/50">
                      <span className="text-gray-600">CGPA:</span>
                      <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0">8.99</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/50">
                      <span className="text-gray-600">Interests:</span>
                      <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                        ML, AWS, AI, Cricket
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/40 to-cyan-50/40">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI, cloud computing, and data analysis
              </span>
              .
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Project 1 */}
            <Card className="border-0 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group h-full bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-cyan-500 shadow-lg shadow-blue-500/30">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/Kartikpatel1202/aws-image-moderation-email-alert"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Serverless Image Moderation System
                </CardTitle>
                <CardDescription className="text-base">
                  Built a serverless pipeline to detect explicit content in S3-uploaded images using Amazon Rekognition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Deployed a scalable, cost-efficient architecture with DynamoDB storage and SNS email alerts for
                    real-time content moderation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0">AWS Lambda</Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-blue-500 text-white border-0">
                      Rekognition
                    </Badge>
                    <Badge className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white border-0">S3</Badge>
                    <Badge className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white border-0">
                      DynamoDB
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0">Python</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="border-0 shadow-xl shadow-green-500/10 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 group h-full bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-500/30">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/Kartikpatel1202/Customer-Churn-Predictor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Customer Churn Predictor
                </CardTitle>
                <CardDescription className="text-base">
                  Developed ML models to predict customer churn with 80%+ accuracy using advanced data analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Conducted comprehensive EDA, feature engineering, and deployed a Streamlit app for real-time
                    predictions with an intuitive interface.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0">Python</Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white border-0">
                      Scikit-learn
                    </Badge>
                    <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0">Streamlit</Badge>
                    <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">Pandas</Badge>
                    <Badge className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white border-0">ML</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="border-0 shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group h-full bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg shadow-purple-500/30">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/Kartikpatel1202/Weather-Data-Analysis-and-Prediction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-500 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Weather Data Analysis & Prediction
                </CardTitle>
                <CardDescription className="text-base">
                  Comprehensive weather data analysis with predictive modeling and visualization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Implemented time series analysis and machine learning algorithms to predict weather patterns with
                    interactive data visualizations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-400 to-purple-500 text-white border-0">Python</Badge>
                    <Badge className="bg-gradient-to-r from-green-400 to-teal-500 text-white border-0">Pandas</Badge>
                    <Badge className="bg-gradient-to-r from-orange-400 to-pink-500 text-white border-0">
                      Matplotlib
                    </Badge>
                    <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0">NumPy</Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white border-0">
                      Analysis
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 - Heart Disease Prediction */}
            <Card className="border-0 shadow-xl shadow-red-500/10 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 group h-full bg-gradient-to-br from-white via-red-50/50 to-pink-50/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-red-400 to-pink-500 shadow-lg shadow-red-500/30">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/Kartikpatel1202/heart-disease-prediction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Heart Disease Prediction System
                </CardTitle>
                <CardDescription className="text-base">
                  Machine learning model to predict heart disease risk using clinical parameters and patient data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Developed a predictive healthcare system using multiple ML algorithms to assess cardiovascular risk
                    with high accuracy and clinical relevance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-red-400 to-pink-500 text-white border-0">Python</Badge>
                    <Badge className="bg-gradient-to-r from-blue-400 to-purple-500 text-white border-0">
                      Scikit-learn
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-400 to-teal-500 text-white border-0">
                      Healthcare
                    </Badge>
                    <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                      Classification
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white border-0">
                      Medical AI
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/80 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
              asChild
            >
              <Link href="https://github.com/Kartikpatel1202" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects
                <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                <Rocket className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-white via-cyan-50/30 to-purple-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiencies in{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                modern technologies
              </span>
              .
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Programming
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0">Python</Badge>
                    <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">Java</Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white border-0">C++</Badge>
                    <Badge className="bg-gradient-to-r from-green-400 to-teal-500 text-white border-0">C</Badge>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                      JavaScript
                    </Badge>
                    <Badge className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white border-0">
                      HTML/CSS
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl shadow-green-500/10 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 h-full bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-green-500" />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    AI & ML
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0">
                      Scikit-learn
                    </Badge>
                    <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                      TensorFlow
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white border-0">Pandas</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0">NumPy</Badge>
                    <Badge className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white border-0">
                      Matplotlib
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 h-full bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-purple-500" />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Cloud & DevOps
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                      AWS Lambda
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-400 to-teal-500 text-white border-0">S3</Badge>
                    <Badge className="bg-gradient-to-r from-blue-400 to-purple-500 text-white border-0">
                      Rekognition
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white border-0">DynamoDB</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0">SNS</Badge>
                    <Badge className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white border-0">
                      Streamlit
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl shadow-orange-500/10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 h-full bg-gradient-to-br from-white via-orange-50/50 to-yellow-50/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-orange-500" />
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Tools & Concepts
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-400 to-purple-500 text-white border-0">R-Studio</Badge>
                    <Badge className="bg-gradient-to-r from-green-400 to-teal-500 text-white border-0">DSA</Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-pink-500 text-white border-0">EDA</Badge>
                    <Badge className="bg-gradient-to-r from-red-400 to-orange-500 text-white border-0">
                      Cybersecurity
                    </Badge>
                    <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0">IoT</Badge>
                    <Badge className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white border-0">
                      Automation
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/40 to-cyan-50/40">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-purple-500" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Academic Journey
              </span>
            </h3>
            <div className="space-y-6">
              <Card className="border-0 shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-gradient-to-br from-white via-purple-50/50 to-cyan-50/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        B.Tech in Computer Science Engineering
                      </h4>
                      <p className="text-blue-600 font-medium">Vellore Institute of Technology, Chennai</p>
                      <p className="text-sm text-gray-600">2023 – 2027</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 shadow-lg">
                      8.99 CGPA
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        CBSE 12th Board
                      </h4>
                      <p className="text-blue-600 font-medium">Central Academy School, Pali</p>
                      <p className="text-sm text-gray-600">2020 – 2021</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0 shadow-lg">
                      94.6%
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl shadow-green-500/10 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        CBSE 10th Board
                      </h4>
                      <p className="text-blue-600 font-medium">Central Academy School, Pali</p>
                      <p className="text-sm text-gray-600">2018 – 2019</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-400 to-teal-500 text-white border-0 shadow-lg">
                      90.0%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section
        id="certifications"
        className="py-20 md:py-32 bg-gradient-to-br from-white via-cyan-50/30 to-purple-50/30"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional certifications that validate my expertise and commitment to{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                continuous learning
              </span>
              .
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Oracle Certification */}
            <Card className="border-0 shadow-xl shadow-red-500/10 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 group bg-gradient-to-br from-white via-red-50/50 to-orange-50/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-orange-500 flex items-center justify-center overflow-hidden shadow-lg shadow-red-500/30">
                      <Image
                        src="/oracle.jpg"
                        alt="Oracle Logo"
                        width={64}
                        height={64}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      Oracle Certified Professional: Java SE 17 Developer
                    </h3>
                    <p className="text-blue-600 font-medium">Oracle University</p>
                    <p className="text-sm text-gray-600">Issued: July 2025</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Comprehensive certification validating advanced Java programming skills and enterprise development
                      capabilities.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Award className="h-8 w-8 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Forage Certification */}
            <Card className="border-0 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/30">
                      <Image
                        src="/Forage.jpg"
                        alt="Forage Logo"
                        width={64}
                        height={64}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      Data Analytics Virtual Job Simulation – Deloitte Australia
                    </h3>
                    <p className="text-blue-600 font-medium">Forage</p>
                    <p className="text-sm text-gray-600">Issued: July 2025</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Hands-on experience in data analytics, business intelligence, and strategic consulting
                      methodologies.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Briefcase className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AWS Certification */}
            <Card className="border-0 shadow-xl shadow-orange-500/10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group bg-gradient-to-br from-white via-orange-50/50 to-yellow-50/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center overflow-hidden shadow-lg shadow-orange-500/30">
                      <Image
                        src="/aws.jpg"
                        alt="AWS Logo"
                        width={64}
                        height={64}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-yellow-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      Introduction to Generative AI – Art of the Possible
                    </h3>
                    <p className="text-blue-600 font-medium">Amazon Web Services (AWS)</p>
                    <p className="text-sm text-gray-600">Issued: July 2025</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Foundational understanding of generative AI technologies, applications, and implementation
                      strategies.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Brain className="h-8 w-8 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section with Working Form */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-600 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 text-center">
              Let's Work Together
              <Sparkles className="inline-block h-8 w-8 ml-2 text-yellow-300" />
            </h2>
            <p className="text-xl text-cyan-100 mb-12 text-center">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology and innovation.
            </p>

            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="grid gap-6 md:grid-cols-1">
                  <a href="mailto:kartikpatel06471@gmail.com" className="block">
                    <Card className="border-0 bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer">
                      <CardContent className="pt-6 text-center">
                        <Mail className="h-8 w-8 mx-auto mb-4 text-cyan-200" />
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-cyan-100">kartikpatel06471@gmail.com</p>
                      </CardContent>
                    </Card>
                  </a>

                  <Card className="border-0 bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <CardContent className="pt-6 text-center">
                      <Phone className="h-8 w-8 mx-auto mb-4 text-purple-200" />
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-purple-100">+91-9413906471</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <CardContent className="pt-6 text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-4 text-pink-200" />
                      <h3 className="font-semibold mb-2">Location</h3>
                      <p className="text-pink-100">Chennai, India</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="mailto:kartikpatel06471@gmail.com"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg hover:shadow-xl backdrop-blur"
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </a>
                  <Link
                    href="https://linkedin.com/in/kartik-patel-49289028b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg hover:shadow-xl backdrop-blur"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </Link>
                  <Link
                    href="https://github.com/Kartikpatel1202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg hover:shadow-xl backdrop-blur"
                  >
                    <Github className="h-6 w-6 text-white" />
                  </Link>
                </div>
              </div>

              {/* Working Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Kartik Patel
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kartik Patel. All rights reserved. Made with{" "}
              <span className="text-pink-400">❤️</span> and lots of <span className="text-cyan-400">☕</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
