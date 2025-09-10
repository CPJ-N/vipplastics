export const metadata = {
  title: "About Us",
  description: "Who we are, our mission and vision at VIP Plastics.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">About VIP Plastics</h1>
      <p className="mt-4 text-muted-foreground max-w-prose">
        We manufacture durable plastic products for industrial and retail use with a focus on flawless quality and timely delivery across India.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold text-lg">Mission</h2>
          <p className="text-sm text-muted-foreground mt-2">Deliver high‑quality plastic solutions that improve operational efficiency for our customers.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold text-lg">Vision</h2>
          <p className="text-sm text-muted-foreground mt-2">Be the most trusted brand in plastic material handling products in India.</p>
        </div>
      </div>
    </div>
  );
}
