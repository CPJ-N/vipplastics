"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { categories } from "@/data/categories";
import { ClientsSection } from "@/components/clients-section";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/slider-1.jpg",
      alt: "VIP Plastics industrial products showcase 1"
    },
    {
      src: "/slider-2.jpg", 
      alt: "VIP Plastics industrial products showcase 2"
    },
    {
      src: "/slider-3.jpg",
      alt: "VIP Plastics industrial products showcase 3"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 h-full flex items-center">
          <div className="max-w-2xl lg:max-w-3xl text-white">
            <p className="text-sm font-semibold text-primary-foreground mb-3 bg-primary/90 inline-block px-3 py-1 rounded-full">
              Trusted by manufacturers and retailers
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Flawless Quality Products With Timely Delivery
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-prose leading-relaxed">
              Industrial-grade plastic crates, pallets, bins, and planters designed for durability and efficiency. Custom sizes and branding available.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl">
                <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">Enquire Now</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 shadow-lg backdrop-blur-sm">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-110 shadow-lg" 
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose VIP Plastics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
              We at VIP Plastics bring to you the best quality plastic solutions for industrial and personal use.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We aim to provide plastic solutions to our valuable customers at market leading prices.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "On Schedule Delivery",
                description: "We have a record of delivering our consignments on time without any delay",
                icon: "🚚"
              },
              {
                title: "Flawless Quality", 
                description: "We are an ISO certified organisation providing best quality products",
                icon: "✅"
              },
              {
                title: "Customized Solutions",
                description: "We have an expertise to customize the products as per your requirement", 
                icon: "🔧"
              },
              {
                title: "Ethical Business Practices",
                description: "We are an organisation that abides by the business ethics and believe in creating long term relations with our clients",
                icon: "🤝"
              },
              {
                title: "Skilled Professionals", 
                description: "Our team of professionals is highly skilled and equipped to deliver the best quality products and services to our clients",
                icon: "👥"
              },
              {
                title: "Market Leading Prices",
                description: "Competitive pricing without compromising on quality, delivering value to our customers",
                icon: "💰"
              }
            ].map((item) => (
              <Card key={item.title} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <CardTitle className="text-lg mb-4 text-gray-900">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-gray-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the industry with innovation, quality, and commitment since 2013
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Experience Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">OVER 5 YEARS EXPERIENCE</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  With over 5 years of experience, VIP plastics has been serving clients across different industries with our knowledgeable and very experienced team.
                </p>
              </div>

              {/* Customer Satisfaction Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">😊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Customer Satisfaction</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our excellent team, their skill and knowledge along with timely deliveries has helped us attain <strong className="text-primary">100% customer satisfaction</strong> in the industry.
                </p>
              </div>

              {/* Best Materials Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">BEST MATERIALS</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We believe in delivering products of best quality therefore we have always focused on using the best available materials for our products and this is what makes us different from our competitors.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Best</div>
                  <div className="text-sm text-gray-600">Materials</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/vip-plastics-181374-585418.jpg"
                  alt="VIP Plastics Manufacturing Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">33,000</div>
                  <div className="text-xs text-gray-600">sq. ft. facility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Product Categories</h2>
            <Button asChild variant="link">
              <Link href="/products">View all</Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="group">
                <Card className="overflow-hidden hover:shadow-sm transition-shadow p-0 gap-0">
                  <div className="aspect-[4/3] relative bg-gray-50">
                    <Image
                      src={`/${item.slug === 'fruits-and-vegetables-crates' ? 'fruits-and-vegetable-crates' : item.slug}.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <CardDescription>Explore sizes, specs and options</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <ClientsSection />

      {/* Client Testimonials */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our products and services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "Kumar Industries",
                location: "Delhi",
                testimonial: "VIP Plastics has been our reliable partner for over 3 years. Their consistent quality and on-time delivery has helped us maintain our production schedules without any interruption.",
                rating: 5
              },
              {
                name: "Priya Sharma", 
                company: "Fresh Mart Logistics",
                location: "Mumbai",
                testimonial: "The fruit and vegetable crates from VIP Plastics are exactly what we needed. Durable, well-ventilated, and the custom branding looks professional. Highly recommend!",
                rating: 5
              },
              {
                name: "Arun Patel",
                company: "Patel Dairy Farm", 
                location: "Gujarat",
                testimonial: "Excellent service and product quality. The dairy crates are perfect for our operations and the team is always responsive to our requirements. Great value for money.",
                rating: 5
              },
              {
                name: "Sunita Gupta",
                company: "Green Gardens",
                location: "Bangalore", 
                testimonial: "The planters from VIP Plastics have transformed our nursery. High quality, various sizes, and the colors are vibrant. Customer service is also excellent.",
                rating: 5
              },
              {
                name: "Mohit Singh",
                company: "Singh Warehousing",
                location: "Haryana",
                testimonial: "Their pallets and industrial crates are built to last. We've been using them for heavy-duty applications and they've never let us down. Professional team and fair pricing.",
                rating: 5
              },
              {
                name: "Deepak Jain",
                company: "Jain Enterprises", 
                location: "Rajasthan",
                testimonial: "VIP Plastics delivered a large order of customized bins exactly on schedule. The quality is top-notch and they accommodated all our specific requirements perfectly.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-primary text-sm font-medium">{testimonial.company}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Join hundreds of satisfied customers who trust VIP Plastics for their plastic solutions</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">
                Share Your Experience
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to place a bulk order?</h2>
          <p className="mt-2 text-muted-foreground">Get a fast quote with delivery timelines for your location.</p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg">
              <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">Quick Enquiry on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
