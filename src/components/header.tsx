"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappHref = "https://wa.me/919000000000";
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      {/* Main header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/vip_logo.png"
                alt="VIP Plastics Logo"
                width={120}
                height={80}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-base font-semibold">
            <Link href="/" className="relative py-2 text-gray-700 hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">
              Home
            </Link>
            <Link href="/about" className="relative py-2 text-gray-700 hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">
              About
            </Link>
            <Link href="/products" className="relative py-2 text-gray-700 hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">
              Products
            </Link>
            <Link href="/contact" className="relative py-2 text-gray-700 hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              <a href="tel:+919000000000" aria-label="Call">
                <Phone className="size-4 mr-2" /> Call Now
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-lg">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="size-4 mr-2" /> Get Quote
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t bg-gray-50 py-4">
            <div className="flex flex-col gap-1">
              <Link href="/" className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-white hover:text-primary transition-colors rounded-md" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-white hover:text-primary transition-colors rounded-md" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/products" className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-white hover:text-primary transition-colors rounded-md" onClick={() => setOpen(false)}>
                Products
              </Link>
              <Link href="/contact" className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-white hover:text-primary transition-colors rounded-md" onClick={() => setOpen(false)}>
                Contact
              </Link>
              <div className="mt-4 px-4 grid grid-cols-1 gap-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="tel:+919000000000" aria-label="Call" onClick={() => setOpen(false)}>
                    <Phone className="size-4 mr-2" /> Call Now
                  </a>
                </Button>
                <Button asChild className="w-full justify-start bg-primary hover:bg-primary/90">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" onClick={() => setOpen(false)}>
                    <MessageCircle className="size-4 mr-2" /> Get Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
