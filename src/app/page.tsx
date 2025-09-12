"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
// Card components removed - using plain divs for more professional appearance
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
      <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
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
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <div className="mb-4 flex items-center gap-4 text-sm font-medium">
              <span className="bg-white/20 px-3 py-1 rounded">EST. 2013</span>
              <span className="bg-white/20 px-3 py-1 rounded">ISO CERTIFIED</span>
              <span className="bg-white/20 px-3 py-1 rounded">33,000 SQ.FT. FACILITY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Industrial Plastic Manufacturing Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl leading-relaxed mb-8">
              Precision-engineered plastic crates, pallets, bins, and material handling products. Serving industries across India with 100% on-time delivery guarantee since 2013.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-center">
              <div className="bg-white/10 p-4 rounded">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 p-4 rounded">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Industrial Clients</div>
              </div>
              <div className="bg-white/10 p-4 rounded">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Quality Assurance</div>
              </div>
              <div className="bg-white/10 p-4 rounded">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support Service</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">Request Quote</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-gray-900 font-semibold">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Company Overview */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About VIP Plastics</h2>
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  <strong>Established in 2013</strong>, VIP Plastics is a leading manufacturer specializing in plastic material handling products including industrial crates, fruit and vegetable crates, dairy crates, pallets, bins, planters, and industrial air coolers.
                </p>
                <p className="leading-relaxed">
                  Our organization maintains a commitment to <strong className="text-primary">100% on-time delivery with penalty clause</strong> and provides real-time SMS tracking throughout the production and delivery process.
                </p>
                <p className="leading-relaxed">
                  As the <strong className="text-primary">first company in India to implement optoelectronic technology</strong> for plastic granule sorting, we ensure superior raw material quality and consistent product specifications.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Company Specifications</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Established</span>
                  <span className="font-semibold">2013</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Manufacturing Facility</span>
                  <span className="font-semibold">33,000 sq. ft.</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Production Capacity</span>
                  <span className="font-semibold">10 MT/day</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Machine Capacity</span>
                  <span className="font-semibold">450-775 tons</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Quality Certification</span>
                  <span className="font-semibold">ISO 9001:2015</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Delivery Performance</span>
                  <span className="font-semibold text-primary">100% On-Time</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Material Quality</span>
                  <span className="font-semibold">100% Virgin Plastic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Clients</span>
                  <span className="font-semibold">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Product Portfolio</h2>
              <p className="text-gray-600 mt-2">Industrial-grade plastic solutions across multiple sectors</p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/products">View Complete Catalog</Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="group">
                <div className="bg-white border border-gray-200 overflow-hidden hover:border-primary/30 transition-colors">
                  <div className="aspect-[5/3] relative bg-gray-50">
                    <Image
                      src={`/${item.slug === 'fruits-and-vegetables-crates' ? 'fruits-and-vegetable-crates' : item.slug}.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">Technical specifications and models</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">View Products</span>
                      <span className="text-primary text-xs">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
            <p className="text-gray-600 max-w-4xl">
              VIP Plastics operates a state-of-the-art 33,000 sq. ft. manufacturing facility equipped with advanced injection molding machines (450-775 tons capacity) and India&apos;s first optoelectronic plastic sorting technology.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">DELIVERY PERFORMANCE</div>
              <h3 className="font-bold text-gray-900 mb-3">100% On-Schedule Delivery</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Guaranteed on-time delivery with penalty clause. Real-time SMS tracking system at every stage of production and logistics.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">QUALITY ASSURANCE</div>
              <h3 className="font-bold text-gray-900 mb-3">ISO 9001:2015 Certified</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                100% virgin material usage with optoelectronic sorting technology. Stringent quality control at every manufacturing stage.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">CUSTOMIZATION</div>
              <h3 className="font-bold text-gray-900 mb-3">Engineered Solutions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Custom dimensions, colors, and branding. Technical consultation for specialized industrial applications and requirements.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">PRODUCTION CAPACITY</div>
              <h3 className="font-bold text-gray-900 mb-3">10 Metric Tons/Day</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                High-volume production capability with multiple injection molding machines. Scalable manufacturing for bulk industrial orders.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">TECHNICAL EXPERTISE</div>
              <h3 className="font-bold text-gray-900 mb-3">Skilled Engineering Team</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Experienced professionals specializing in plastic material handling solutions across automotive, agriculture, and logistics sectors.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">MARKET POSITION</div>
              <h3 className="font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Direct manufacturer pricing with transparent quotations. Volume discounts available for bulk orders and long-term contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <ClientsSection />

      {/* Industry Applications */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Applications & Case Studies</h2>
            <p className="text-gray-600 max-w-4xl">
              Our plastic solutions serve diverse industrial sectors with specialized requirements. Technical specifications and performance data from real implementations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary font-semibold text-sm">AUTOMOTIVE SECTOR</div>
                <div className="text-xs text-gray-500">CASE STUDY #001</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Heavy-Duty Industrial Crates</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Load Capacity:</span>
                  <span className="font-semibold">50kg per crate</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimensions:</span>
                  <span className="font-semibold">600x400x320mm</span>
                </div>
                <div className="flex justify-between">
                  <span>Material:</span>
                  <span className="font-semibold">Virgin HDPE</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Volume:</span>
                  <span className="font-semibold">15,000+ units</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Deployed across 12 manufacturing facilities for component storage and transport. Zero failure rate over 3-year operational period.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary font-semibold text-sm">AGRICULTURE</div>
                <div className="text-xs text-gray-500">CASE STUDY #002</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Ventilated F&V Crates</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Air Flow Rate:</span>
                  <span className="font-semibold">95% ventilation</span>
                </div>
                <div className="flex justify-between">
                  <span>Stack Height:</span>
                  <span className="font-semibold">2.4m max</span>
                </div>
                <div className="flex justify-between">
                  <span>Temperature Range:</span>
                  <span className="font-semibold">-20°C to +60°C</span>
                </div>
                <div className="flex justify-between">
                  <span>Shelf Life Extension:</span>
                  <span className="font-semibold">40% improvement</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Implemented across 25+ cold storage facilities. Reduced product wastage by 40% through optimized ventilation design.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary font-semibold text-sm">LOGISTICS</div>
                <div className="text-xs text-gray-500">CASE STUDY #003</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Industrial Pallets</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Dynamic Load:</span>
                  <span className="font-semibold">1,200kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Static Load:</span>
                  <span className="font-semibold">3,000kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Racking Load:</span>
                  <span className="font-semibold">800kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Operational Life:</span>
                  <span className="font-semibold">8-10 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Deployed in automated warehousing systems. 99.8% compatibility with standard racking and material handling equipment.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary font-semibold text-sm">DAIRY INDUSTRY</div>
                <div className="text-xs text-gray-500">CASE STUDY #004</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Milk Crates & Containers</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Food Grade:</span>
                  <span className="font-semibold">FDA Approved</span>
                </div>
                <div className="flex justify-between">
                  <span>Wash Cycles:</span>
                  <span className="font-semibold">5000+ cycles</span>
                </div>
                <div className="flex justify-between">
                  <span>Chemical Resistance:</span>
                  <span className="font-semibold">High pH tolerance</span>
                </div>
                <div className="flex justify-between">
                  <span>Hygiene Rating:</span>
                  <span className="font-semibold">Class A</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Integrated with automated washing systems across dairy processing plants. Maintains hygiene standards through 5000+ wash cycles.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary font-semibold text-sm">PHARMACEUTICALS</div>
                <div className="text-xs text-gray-500">CASE STUDY #005</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Clean Room Containers</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Particle Generation:</span>
                  <span className="font-semibold">&lt;0.1 mg/m³</span>
                </div>
                <div className="flex justify-between">
                  <span>ESD Protection:</span>
                  <span className="font-semibold">10⁶-10⁹ ohms</span>
                </div>
                <div className="flex justify-between">
                  <span>Sterilization:</span>
                  <span className="font-semibold">Gamma compatible</span>
                </div>
                <div className="flex justify-between">
                  <span>Validation:</span>
                  <span className="font-semibold">Class 100 approved</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Validated for Class 100 clean room environments. Zero contamination incidents across pharmaceutical manufacturing sites.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary font-semibold text-sm">RETAIL & WAREHOUSING</div>
                <div className="text-xs text-gray-500">CASE STUDY #006</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Storage & Display Systems</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Modular Design:</span>
                  <span className="font-semibold">Universal fit</span>
                </div>
                <div className="flex justify-between">
                  <span>Color Coding:</span>
                  <span className="font-semibold">12 standard colors</span>
                </div>
                <div className="flex justify-between">
                  <span>Branding Options:</span>
                  <span className="font-semibold">Custom printing</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI Period:</span>
                  <span className="font-semibold">18 months</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Implemented across retail chains and distribution centers. Improved inventory accuracy by 35% through color-coded organization systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Technical Specifications</h2>
              <p className="text-gray-600 mb-6">
                Get detailed product specifications, custom quotations, and technical consultation for your industrial requirements. Our engineering team provides comprehensive solutions with delivery timelines.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Technical drawings and specifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Volume pricing and delivery schedules</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Customization capabilities assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Quality certification documentation</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Technical Enquiries</div>
                  <div className="text-sm text-gray-600">+91 9999009090</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Email</div>
                  <div className="text-sm text-gray-600">care@vipplastics.in</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Manufacturing Facility</div>
                  <div className="text-sm text-gray-600">Plot 368-369, Sector 56, HSIIDC, Kundli, Haryana</div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">WhatsApp Quote</a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href="tel:+919999009090">Call Direct</a>
                    </Button>
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
