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

      {/* Value props */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["On‑schedule delivery", "Reliable logistics across India"],
            ["Flawless quality", "Premium materials and QA checks"],
            ["Custom solutions", "Branding, colors, and sizes"],
            ["Competitive pricing", "Scale with transparent quotes"],
          ].map(([title, desc]) => (
            <Card key={title}>
              <CardContent className="pt-6">
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="mt-2">{desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
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
