"use client"

import type React from "react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, Mail, Loader2 } from "lucide-react"

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("Sending...")

    emailjs
      .sendForm(
        "service_9ee4cqr", // ✅ Your Service ID
        "template_mc06z8c", // ✅ Your Template ID
        form.current!,
        "YSzGP9ZxStv4Lp1Xv", // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!")
          setIsLoading(false)
          if (form.current) {
            form.current.reset()
          }
          // Clear success message after 5 seconds
          setTimeout(() => setStatus(""), 5000)
        },
        (error) => {
          console.error("EmailJS Error:", error)
          setStatus("❌ Failed to send message. Please try again.")
          setIsLoading(false)
          // Clear error message after 5 seconds
          setTimeout(() => setStatus(""), 5000)
        },
      )
  }

  const getStatusIcon = () => {
    if (isLoading) return <Loader2 className="h-5 w-5 animate-spin" />
    if (status.includes("✅")) return <CheckCircle className="h-5 w-5 text-green-600" />
    if (status.includes("❌")) return <AlertCircle className="h-5 w-5 text-red-600" />
    return null
  }

  const getStatusColor = () => {
    if (status.includes("✅")) return "bg-green-50 text-green-700 border-green-200"
    if (status.includes("❌")) return "bg-red-50 text-red-700 border-red-200"
    return "bg-blue-50 text-blue-700 border-blue-200"
  }

  return (
    <Card className="border-0 bg-white/95 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-lg mx-auto">
      <CardHeader className="text-center pb-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white rounded-t-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Mail className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Send Me a Message</CardTitle>
        <CardDescription className="text-purple-100 text-base">
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="h-12 text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="h-12 text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="h-12 text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
              disabled={isLoading}
            />
          </div>

          {/* Message */}
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500 resize-none rounded-lg"
              disabled={isLoading}
            />
          </div>

          {/* Status Message */}
          {status && (
            <div className={`flex items-center gap-3 p-4 rounded-lg border ${getStatusColor()}`}>
              {getStatusIcon()}
              <span className="text-sm font-medium">{status}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 hover:from-purple-600 hover:via-indigo-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {/* Alternative Contact Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Or reach me directly at{" "}
            <a
              href="mailto:kartikpatel06471@gmail.com"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              kartikpatel06471@gmail.com
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
