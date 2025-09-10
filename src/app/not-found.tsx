import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted-foreground">The page you’re looking for doesn’t exist or was moved.</p>
      <div className="mt-6">
        <Link href="/" className="text-primary underline-offset-4 hover:underline">Go back home →</Link>
      </div>
    </div>
  );
}
