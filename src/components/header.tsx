"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, Mail, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappHref = "https://wa.me/919000000000";
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-block size-8 rounded bg-primary" aria-hidden />
              <span className="font-semibold tracking-tight">VIP Plastics</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/products" className="hover:text-primary">Products</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <a href="tel:+919000000000" aria-label="Call">
                <Phone className="size-4" /> Call
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href="mailto:sales@vipplastics.in" aria-label="Email">
                <Mail className="size-4" /> Email
              </a>
            </Button>
            <Button asChild size="sm">
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
            <div className="flex flex-col gap-2">
              <Link href="/" className="px-2 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about" className="px-2 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>About</Link>
              <Link href="/products" className="px-2 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>Products</Link>
              <Link href="/contact" className="px-2 py-2 rounded hover:bg-accent" onClick={() => setOpen(false)}>Contact</Link>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <a className="px-2 py-2 rounded border text-center" href="tel:+919000000000" aria-label="Call" onClick={() => setOpen(false)}>
                  <Phone className="inline size-4 mr-1" /> Call
                </a>
                <a className="px-2 py-2 rounded border text-center" href="mailto:sales@vipplastics.in" aria-label="Email" onClick={() => setOpen(false)}>
                  <Mail className="inline size-4 mr-1" /> Email
                </a>
                <a className="px-2 py-2 rounded bg-primary text-primary-foreground text-center" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" onClick={() => setOpen(false)}>
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
