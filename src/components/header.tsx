"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, Mail, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappHref = "https://wa.me/919000000000";
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/vip_logo.png"
                alt="VIP Plastics Logo"
                width={180}
                height={180}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild size="default" variant="outline">
              <a href="tel:+919000000000" aria-label="Call">
                <Phone className="size-4" /> Call
              </a>
            </Button>
            <Button asChild size="default" variant="outline">
              <a href="mailto:sales@vipplastics.in" aria-label="Email">
                <Mail className="size-4" /> Email
              </a>
            </Button>
            <Button asChild size="default">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="size-4" /> Enquire
              </a>
            </Button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <Link href="/" className="px-3 py-3 rounded hover:bg-accent text-base" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about" className="px-3 py-3 rounded hover:bg-accent text-base" onClick={() => setOpen(false)}>About</Link>
              <Link href="/products" className="px-3 py-3 rounded hover:bg-accent text-base" onClick={() => setOpen(false)}>Products</Link>
              <Link href="/contact" className="px-3 py-3 rounded hover:bg-accent text-base" onClick={() => setOpen(false)}>Contact</Link>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <a className="px-3 py-3 rounded border text-center text-sm" href="tel:+919000000000" aria-label="Call" onClick={() => setOpen(false)}>
                  <Phone className="inline size-4 mr-1" /> Call
                </a>
                <a className="px-3 py-3 rounded border text-center text-sm" href="mailto:sales@vipplastics.in" aria-label="Email" onClick={() => setOpen(false)}>
                  <Mail className="inline size-4 mr-1" /> Email
                </a>
                <a className="px-3 py-3 rounded bg-primary text-primary-foreground text-center text-sm" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" onClick={() => setOpen(false)}>
                  <MessageCircle className="inline size-4 mr-1" /> Enquire
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
