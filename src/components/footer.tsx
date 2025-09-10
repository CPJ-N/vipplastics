import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/vip_logo.png"
                alt="VIP Plastics Logo"
                width={80}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading manufacturer of industrial-grade plastic products. Delivering quality solutions with precision and reliability since our inception.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="size-4" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group" href="/about">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </Link></li>
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group" href="/products">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Our Products
              </Link></li>
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group" href="/contact">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact Us
              </Link></li>
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group" href="/products">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Request Quote
              </Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200" href="/products/industrial-crates">Industrial Crates</Link></li>
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200" href="/products/fruits-and-vegetables-crates">F&V Crates</Link></li>
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200" href="/products/dairy-crates">Dairy Crates</Link></li>
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200" href="/products/pallets">Plastic Pallets</Link></li>
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200" href="/products/planters">Garden Planters</Link></li>
              <li><Link className="text-gray-300 hover:text-primary transition-colors duration-200" href="/products/bins">Industrial Bins</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a href="tel:+919000000000" className="text-gray-300 hover:text-primary transition-colors">
                    +91 90000 00000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a href="mailto:sales@vipplastics.in" className="text-gray-300 hover:text-primary transition-colors">
                    sales@vipplastics.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} VIP Plastics. All rights reserved.</p>
              <span className="hidden md:inline">•</span>
              <p className="hidden md:inline">Trusted Industrial Partner</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Quality • Reliability • Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
