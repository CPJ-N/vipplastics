import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact VIP Plastics",
  description: "Get technical specifications and quotes for industrial plastic solutions. Manufacturing facility: 33,000 sq.ft. with 100% on-time delivery guarantee.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Technical Enquiries & Quotations
            </h1>
            <p className="text-lg text-gray-600">
              Contact our engineering team for detailed product specifications, custom manufacturing solutions, and volume pricing. Direct manufacturer with 100% on-time delivery commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Technical Support */}
            <div className="bg-white p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Technical Support</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Primary Line</div>
                  <a href="tel:+919999009090" className="text-primary hover:underline">+91 9999009090</a>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Secondary Line</div>
                  <a href="tel:+919999997797" className="text-primary hover:underline">+91 9999997797</a>
                </div>
                <div className="text-gray-600 pt-2">Direct technical consultation</div>
              </div>
            </div>

            {/* Email Communications */}
            <div className="bg-white p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Email Communications</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="font-medium text-gray-900">General Enquiries</div>
                  <a href="mailto:care@vipplastics.in" className="text-primary hover:underline">care@vipplastics.in</a>
                </div>
                <div className="text-gray-600 pt-2">Response within 24 hours</div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/10 rounded flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">WhatsApp Business</h3>
              </div>
              <div className="space-y-3 text-sm">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700" size="sm">
                  <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Message
                  </a>
                </Button>
                <div className="text-gray-600">Instant technical queries</div>
              </div>
            </div>
          </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Technical Enquiry Form</h2>
              </div>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                    <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                    <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" required className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enquiry Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary">
                    <option>Technical Specifications</option>
                    <option>Volume Pricing</option>
                    <option>Custom Manufacturing</option>
                    <option>Product Samples</option>
                    <option>Quality Documentation</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Technical Requirements *</label>
                  <textarea 
                    rows={5} 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                    placeholder="Please specify: Product type, dimensions, quantities, delivery location, timeline, and any special requirements..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Technical Enquiry
                </Button>
              </form>
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-6">
            {/* Manufacturing Facility */}
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Manufacturing Facility</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="font-medium text-gray-900">VIP Plastics Pvt. Ltd.</div>
                <div>Plot No. 368 & 369, Sector 56</div>
                <div>Phase V, HSIIDC, Kundli</div>
                <div>Haryana - 131028, India</div>
                <div className="pt-2 text-xs">33,000 sq.ft. production facility</div>
              </div>
            </div>

            {/* Operations */}
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Operations</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Production Days</span>
                  <span className="font-medium">Monday - Saturday</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Support Hours</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Production Capacity</span>
                  <span className="font-medium">10 MT/day</span>
                </div>
              </div>
            </div>

            {/* Quality Standards */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quality Certifications</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">ISO Certification</span>
                  <span className="font-medium">9001:2015</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Material Quality</span>
                  <span className="font-medium">100% Virgin Plastic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Performance</span>
                  <span className="font-medium text-primary">100% On-Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
