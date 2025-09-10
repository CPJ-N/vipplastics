import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact Us",
  description: "Reach VIP Plastics via phone, email, or WhatsApp. Request a quote.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-2 text-muted-foreground">We typically respond within one business day.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form className="rounded-lg border p-6 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <input id="name" name="name" className="h-10 rounded-md border bg-background px-3" required />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" className="h-10 rounded-md border bg-background px-3" required />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <textarea id="message" name="message" className="min-h-28 rounded-md border bg-background px-3 py-2" placeholder="Tell us about your requirement" />
          </div>
          <Button type="submit">Send</Button>
        </form>

        <div className="rounded-lg border p-6">
          <h2 className="font-semibold mb-3">Quick links</h2>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-primary" href="tel:+919000000000">Call: +91 90000 00000</a></li>
            <li><a className="hover:text-primary" href="mailto:sales@vipplastics.in">Email: sales@vipplastics.in</a></li>
            <li><a className="hover:text-primary" target="_blank" rel="noopener noreferrer" href="https://wa.me/919000000000">WhatsApp: Quick Enquiry</a></li>
          </ul>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm text-muted-foreground">Hyderabad, Telangana, India</p>
          </div>
          <div className="mt-6">
            <Link href="/products" className="text-sm text-primary underline-offset-4 hover:underline">Browse Products →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
