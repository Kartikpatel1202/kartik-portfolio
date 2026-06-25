"use client"
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
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
    { href: "#experience", label: "Experience" },
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
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
              <Code className="h-4 w-4 text-white" />
            </div>
            <span className="text-base font-semibold text-gray-900">Kartik Patel</span>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <Button
            size="sm"
            className="hidden md:flex bg-indigo-600 hover:bg-indigo-700 text-white border-0 text-sm font-medium"
            asChild
          >
            <Link
              href="https://drive.google.com/file/d/1Ijoy-9H7Bq822sutVdankNQOPb-pmWlk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4 mr-1.5" />
              Resume
            </Link>
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="container px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                  <Link
                    href="https://drive.google.com/file/d/1Ijoy-9H7Bq822sutVdankNQOPb-pmWlk/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-1.5" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="bg-slate-900 py-24 md:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

            <div className="space-y-7">
              <span className="inline-block text-xs font-medium tracking-widest text-indigo-400 uppercase">
                AI Developer · Software Engineer
              </span>

              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Kartik Patel
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Computer Science student at VIT Chennai, building production-grade AI, cloud, and security systems that solve real problems.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white border-0 font-medium"
                  onClick={scrollToContact}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get in touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent font-medium"
                  asChild
                >
                  <Link href="https://github.com/Kartikpatel1202" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View projects
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  Chennai, India
                </span>
                <span className="text-slate-700">·</span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <GraduationCap className="h-3.5 w-3.5" />
                  VIT Chennai
                </span>
                <span className="text-slate-700">·</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Award className="h-3.5 w-3.5" />
                  9.15 CGPA
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                <Image
                  src="/Kartik_Image.jpeg"
                  alt="Kartik Patel"
                  width={320}
                  height={320}
                  className="rounded-2xl object-cover w-full h-full ring-1 ring-slate-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <p className="text-xs font-medium tracking-widest text-indigo-600 uppercase mb-2">About Me</p>
              <h2 className="text-3xl font-semibold text-gray-900">Overview</h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  I'm Kartik Patel, a BTech Computer Science student with a passion for solving real-world problems through technology. I have hands-on experience in software development, artificial intelligence, and machine learning, having built and deployed multiple projects that blend data-driven insights with practical applications.
                </p>
                <p>
                  My work has strengthened my skills in Python, data analysis, AWS cloud services, and automation, allowing me to design solutions that are both efficient and impactful. I'm especially interested in AI, IoT, and cybersecurity, and I continuously seek out opportunities to learn and apply these emerging technologies.
                </p>
                <p>
                  I thrive in collaborative, problem-solving environments and enjoy tackling challenges that require both analytical thinking and creativity. Outside of tech, I'm a dedicated cricket enthusiast — a sport that has taught me discipline, teamwork, and resilience.
                </p>
              </div>

              <div>
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
                      <User className="h-4 w-4 text-indigo-600" />
                      Quick facts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { label: "Age", value: "21" },
                      { label: "Location", value: "Chennai, India" },
                      { label: "Degree", value: "BTech CSE" },
                      { label: "CGPA", value: "9.15" },
                      { label: "Interests", value: "ML · AWS · AI" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center text-sm py-1.5 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">{label}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-indigo-600 uppercase mb-2">Projects</p>
            <h2 className="text-3xl font-semibold text-gray-900">Featured work</h2>
            <p className="mt-2 text-gray-500 max-w-xl">
              Selected projects in AI, cloud infrastructure, and data engineering.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Project 1 */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                    <Cloud className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex gap-3">
                    <Link href="https://github.com/Kartikpatel1202/aws-image-moderation-email-alert" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-base font-semibold text-gray-900">Serverless Image Moderation System</CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-1">
                  Serverless pipeline to detect explicit content in S3-uploaded images using Amazon Rekognition, with DynamoDB storage and SNS email alerts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["AWS Lambda", "Rekognition", "S3", "DynamoDB", "Python"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                    <Code className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex gap-3">
                    <Link href="https://github.com/Kartikpatel1202/Zero-Trust-Application-Security-System" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-base font-semibold text-gray-900">Zero Trust Application Security System</CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-1">
                  Secure messaging platform with AES-256-GCM encryption, token-based authentication, Merkle Tree identity verification, and audit logging.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Cryptography", "Secure Messaging", "Digital Signatures", "Merkle Tree"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                    <Brain className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex gap-3">
                    <Link href="https://github.com/Kartikpatel1202/nutrition-tracker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-base font-semibold text-gray-900">AI Nutrition Tracker</CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-1">
                  Full-stack nutrition tracking app with macro/micro nutrient calculation, deficiency alerts, and visual dashboards for hostel meals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "TypeScript", "Tailwind", "Supabase", "ShadCN UI"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                    <Database className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex gap-3">
                    <Link href="https://github.com/Kartikpatel1202/Customer-Churn-Predictor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-base font-semibold text-gray-900">Customer Churn Predictor</CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-1">
                  ML pipeline predicting customer churn with 80%+ accuracy. EDA, feature engineering, and Streamlit deployment for real-time inference.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Scikit-learn", "Streamlit", "Pandas", "ML"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                    <Database className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex gap-3">
                    <Link href="https://github.com/Kartikpatel1202/Weather-Data-Analysis-and-Prediction" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-base font-semibold text-gray-900">Weather Data Analysis & Prediction</CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-1">
                  Time series analysis and ML algorithms for weather pattern prediction with interactive visualizations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Pandas", "NumPy", "Matplotlib", "Analysis"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                    <Heart className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex gap-3">
                    <Link href="https://github.com/Kartikpatel1202/heart-disease-prediction" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-base font-semibold text-gray-900">Heart Disease Prediction System</CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-1">
                  Multi-algorithm ML system for cardiovascular risk assessment using clinical parameters, designed for high accuracy and clinical relevance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Scikit-learn", "Healthcare ML", "Classification", "Medical AI"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium" asChild>
              <Link href="https://github.com/Kartikpatel1202" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View all projects on GitHub
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-indigo-600 uppercase mb-2">Skills</p>
            <h2 className="text-3xl font-semibold text-gray-900">Technical expertise</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Code className="h-4 w-4 text-indigo-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Java", "C++", "C", "TypeScript", "JavaScript", "HTML/CSS"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Brain className="h-4 w-4 text-indigo-600" />
                  AI & ML
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Sentence Transformers"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Cloud className="h-4 w-4 text-indigo-600" />
                  Cloud & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["AWS Lambda", "S3", "Rekognition", "DynamoDB", "SNS", "Docker", "Git", "Bash", "Streamlit"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Database className="h-4 w-4 text-indigo-600" />
                  Tools & Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["R-Studio", "DSA", "EDA", "Cybersecurity", "IoT", "Automation"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Code className="h-4 w-4 text-indigo-600" />
                  Blockchain & Cryptography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {["Blockchain Fundamentals", "Hashing", "Digital Signatures", "P2P Networks"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-indigo-600 uppercase mb-2">Experience</p>
            <h2 className="text-3xl font-semibold text-gray-900">Work history</h2>
          </div>

          <div className="max-w-3xl space-y-6">

            {/* Experience 1 */}
              <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 mt-0.5">
                      <Briefcase className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-semibold text-gray-900">SDE Intern</CardTitle>
                      <p className="text-sm font-medium text-indigo-600 mt-0.5">Successive Digital</p>
                      <p className="text-xs text-gray-400 mt-0.5">June 2026 – Present · Noida, India</p>
                    </div>
                  </div>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors mt-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Hands-on training in full-stack web development with the MERN Stack. Working on real-world assignments, version-controlled projects, and modern web technologies while building scalable applications and preparing a production-ready MERN capstone project.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["MERN Stack","Javascript","React.js", "Node.js","Express.js","MongoDB","WebDevelopment"].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 font-medium">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Experience 2 */}
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 mt-0.5">
                      <Briefcase className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-semibold text-gray-900">Artificial Intelligence Intern</CardTitle>
                      <p className="text-sm font-medium text-indigo-600 mt-0.5">Codec Technologies</p>
                      <p className="text-xs text-gray-400 mt-0.5">Jul 2025 – Aug 2025 · Mumbai, India</p>
                    </div>
                  </div>
                  <Link
                    href="https://drive.google.com/file/d/11W_JTqtFmcuRW4rO3_mfihZgHxTUCGbV/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors mt-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  AICTE & ICAC approved internship focused on applied ML. Built a Customer Churn Prediction model (80%+ accuracy) and Weather Data Analysis project. Deployed an interactive Streamlit app for real-time inference.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "EDA", "ML Models", "Streamlit"].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 font-medium">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience 3 */}
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 mt-0.5">
                    <GraduationCap className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold text-gray-900">Research Intern — Model Impact Analyst</CardTitle>
                    <p className="text-sm font-medium text-indigo-600 mt-0.5">SRIP, VIT Chennai</p>
                    <p className="text-xs text-gray-400 mt-0.5">May 2025 – Jun 2025 · Chennai, India</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Bloom's Taxonomy-based question generation using FLAN-T5 and Mistral-7B-Instruct. Curated large-scale educational datasets, fine-tuned models, and deployed on Hugging Face Hub. Evaluated outputs across taxonomy levels and improved results with prompt engineering.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["NLP", "FLAN-T5", "Mistral-7B", "HuggingFace", "Prompt Engineering"].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 font-medium">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-indigo-600 uppercase mb-2">Education</p>
            <h2 className="text-3xl font-semibold text-gray-900">Academic background</h2>
          </div>

          <div className="max-w-3xl space-y-4">

            {/* B.Tech — no external link, just display */}
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardContent className="pt-5 pb-5">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 mt-0.5">
                      <GraduationCap className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">B.Tech in Computer Science Engineering</h4>
                      <p className="text-sm text-indigo-600 font-medium mt-0.5">Vellore Institute of Technology, Chennai</p>
                      <p className="text-xs text-gray-400 mt-0.5">2023 – 2027</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md mt-0.5">9.15 CGPA</span>
                </div>
              </CardContent>
            </Card>

            <div
              onClick={() => window.open("https://drive.google.com/file/d/1N_tdLOllh09s7v0nKSkFgA2pnpZeATlo/view?usp=sharing", "_blank", "noopener,noreferrer")}
              className="cursor-pointer"
            >
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
                <CardContent className="pt-5 pb-5">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 mt-0.5">
                        <GraduationCap className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">CBSE 12th Board</h4>
                        <p className="text-sm text-indigo-600 font-medium mt-0.5">Central Academy School, Pali</p>
                        <p className="text-xs text-gray-400 mt-0.5">2020 – 2021</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md mt-0.5">94.6%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              onClick={() => window.open("https://drive.google.com/file/d/1hdCylsxB_ExkAA-VWImlE3r2ekHoBQ8h/view?usp=sharing", "_blank", "noopener,noreferrer")}
              className="cursor-pointer"
            >
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
                <CardContent className="pt-5 pb-5">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 mt-0.5">
                        <GraduationCap className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">CBSE 10th Board</h4>
                        <p className="text-sm text-indigo-600 font-medium mt-0.5">Central Academy School, Pali</p>
                        <p className="text-xs text-gray-400 mt-0.5">2018 – 2019</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md mt-0.5">90.0%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-indigo-600 uppercase mb-2">Certifications</p>
            <h2 className="text-3xl font-semibold text-gray-900">Credentials</h2>
            <p className="mt-2 text-gray-500">Professional certifications validating expertise in cloud and AI.</p>
          </div>

          <div className="max-w-3xl space-y-4">
            {[
              {
                url: "https://drive.google.com/file/d/1U3ZOBQIA7esZ9M-QvJkUL1jN8nIrMTjH/view?usp=sharing",
                logo: "/aws.jpg",
                alt: "AWS",
                title: "AWS Certified Solutions Architect – Associate",
                issuer: "Amazon Web Services",
                date: "Issued April 2026",
                icon: <Award className="h-4 w-4 text-gray-300 flex-shrink-0" />,
              },
              {
                url: "https://drive.google.com/file/d/1_GYbHrU-dTqAxyDAnVZOxr0lUKv0p5pN/view?usp=sharing",
                logo: "/oracle.jpg",
                alt: "Oracle",
                title: "Oracle Certified Professional: Java SE 17 Developer",
                issuer: "Oracle University",
                date: "Issued July 2025",
                icon: <Award className="h-4 w-4 text-gray-300 flex-shrink-0" />,
              },
              {
                url: "https://drive.google.com/file/d/1G3sJ6Em6Zdj1BqqtjliV5eli4UG0p500/view?usp=sharing",
                logo: "/oracle.jpg",
                alt: "Oracle",
                title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
                issuer: "Oracle University",
                date: "Issued August 2025",
                icon: <Award className="h-4 w-4 text-gray-300 flex-shrink-0" />,
              },
              {
                url: "https://drive.google.com/file/d/1_olfu6-GbvO5n143Gpbq0K-oUs9NNNsG/view?usp=sharing",
                logo: "/Forage.jpg",
                alt: "Forage",
                title: "Data Analytics Virtual Job Simulation – Deloitte Australia",
                issuer: "Forage",
                date: "Issued July 2025",
                icon: <Briefcase className="h-4 w-4 text-gray-300 flex-shrink-0" />,
              },
              {
                url: "https://drive.google.com/file/d/1agx0kkikg6RYUjGLje2lqQji91-Mm3W-/view?usp=sharing",
                logo: "/aws.jpg",
                alt: "AWS",
                title: "Introduction to Generative AI – Art of the Possible",
                issuer: "Amazon Web Services (AWS)",
                date: "Issued July 2025",
                icon: <Brain className="h-4 w-4 text-gray-300 flex-shrink-0" />,
              },
            ].map((cert) => (
              <div
                key={cert.title}
                onClick={() => window.open(cert.url, "_blank", "noopener,noreferrer")}
                className="cursor-pointer"
              >
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
                  <CardContent className="pt-5 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <Image src={cert.logo} alt={cert.alt} width={48} height={48} className="w-10 h-10 object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                        <p className="text-xs text-indigo-600 font-medium mt-0.5">{cert.issuer}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{cert.date}</p>
                      </div>
                      {cert.icon}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 md:py-28 bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <p className="text-xs font-medium tracking-widest text-indigo-400 uppercase mb-2">Contact</p>
              <h2 className="text-3xl font-semibold text-white">Let's work together</h2>
              <p className="mt-2 text-slate-400 max-w-lg">
                Open to Software Engineering, AI, and technology-driven opportunities. Let's connect and build impactful solutions together.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div className="space-y-6">
                <a href="mailto:kartikpatel06471@gmail.com" className="flex items-center gap-4 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 group-hover:bg-indigo-600 transition-colors duration-150">
                    <Mail className="h-5 w-5 text-slate-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Email</p>
                    <p className="text-sm text-slate-300">kartikpatel06471@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Phone</p>
                    <p className="text-sm text-slate-300">+91-9413906471</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                    <MapPin className="h-5 w-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
                    <p className="text-sm text-slate-300">Chennai, India</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a href="mailto:kartikpatel06471@gmail.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors duration-150">
                    <FaEnvelope className="h-4 w-4 text-slate-400 hover:text-white" />
                  </a>
                  <Link href="https://linkedin.com/in/kartik-patel-49289028b" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors duration-150">
                    <FaLinkedin className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link href="https://github.com/Kartikpatel1202" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors duration-150">
                    <FaGithub className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link href="https://instagram.com/kartikpatel1202" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors duration-150">
                    <FaInstagram className="h-4 w-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 border-t border-slate-800 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600">
                <Code className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-300">Kartik Patel</span>
            </div>
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Kartik Patel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
