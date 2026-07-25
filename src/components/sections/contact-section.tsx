"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"
import { SectionTitle } from "@/components/section-title"
import { Button } from "@/components/ui/button"
import { ContactItem } from "@/components/contact-item"
import { SocialButton } from "@/components/social-button"
import { SOCIAL_HREFS , CONTACT_DETAILS} from "@/lib/contact"


export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send')

      toast.success("Message sent successfully! I'll get back to you soon.")

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4">
            <ContactItem 
              icon={<Phone className="h-5 w-5" />} 
              text={CONTACT_DETAILS.phone.display} 
              href={CONTACT_DETAILS.phone.href} 
            />
            <ContactItem 
              icon={<Mail className="h-5 w-5" />} 
              text={CONTACT_DETAILS.email.display} 
              href={CONTACT_DETAILS.email.href} 
            />
            <ContactItem 
              icon={<MapPin className="h-5 w-5" />} 
              text="Antananarivo, 101, Madagascar" 
            />
          </div>
          <div className="mt-8 flex space-x-4">
            <SocialButton href={SOCIAL_HREFS.github} icon="github" />
            <SocialButton href={SOCIAL_HREFS.linkedin} icon="linkedin" />
            <SocialButton href={SOCIAL_HREFS.facebook} icon="facebook" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}