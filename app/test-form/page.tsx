import ContactForm from "@/components/contact-form"

export default function TestFormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">Contact Form Test</h1>
        <ContactForm />
      </div>
    </div>
  )
}
