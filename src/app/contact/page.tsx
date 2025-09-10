import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with VIP Plastics for industrial plastic solutions. Request quotes, technical support, and bulk orders.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your plastic manufacturing needs? Our expert team is here to provide 
              personalized solutions and competitive quotes.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center pt-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="mb-2">Call Us Directly</CardTitle>
              <CardDescription className="mb-6">Speak with our sales experts</CardDescription>
              <div className="space-y-3">
                <a 
                  href="tel:+919999009090" 
                  className="block text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  +91 99 9900 9090
                </a>
                <a 
                  href="tel:+919999997797" 
                  className="block text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  +91 99 9999 7797
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center pt-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-lg flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="mb-2">Email Support</CardTitle>
              <CardDescription className="mb-6">Get detailed responses within 24 hours</CardDescription>
              <a 
                href="mailto:care@vipplastics.in" 
                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                care@vipplastics.in
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center pt-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="mb-2">WhatsApp Chat</CardTitle>
              <CardDescription className="mb-6">Instant responses for urgent queries</CardDescription>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Chat
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="quote">Request Quote</option>
                    <option value="product-inquiry">Product Information</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your requirements, including quantities, specifications, and delivery location..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white py-4">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
              </CardContent>
            </Card>
          </div>

          {/* Company Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Visit Our Office</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold text-gray-900">VIP Plastics</p>
                  <p>Plot No. 368 & 369, Sector 56</p>
                  <p>Phase V, HSIIDC, Kundli</p>
                  <p>Haryana - 131028, India</p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Business Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links Card */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link 
                    href="/products" 
                    className="block text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Browse Product Catalog →
                  </Link>
                  <Link 
                    href="/about" 
                    className="block text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    About Our Company →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
