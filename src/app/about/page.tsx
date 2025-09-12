import Image from "next/image";

export const metadata = {
  title: "About VIP Plastics",
  description: "Leading plastic manufacturing company since 2013. ISO certified facility with 33,000 sq.ft production capacity and 100% on-time delivery guarantee.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/vip-plastics-181374-585418.jpg"
          alt="VIP Plastics Manufacturing Facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="mb-4 flex items-center gap-4 text-sm font-medium">
              <span className="bg-white/20 px-3 py-1 rounded">EST. 2013</span>
              <span className="bg-white/20 px-3 py-1 rounded">ISO CERTIFIED</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              VIP Plastics Manufacturing
            </h1>
            <p className="text-lg text-gray-200">
              Industrial plastic solutions provider with state-of-the-art manufacturing facility and commitment to quality excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h2>
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
                <p className="leading-relaxed">
                  The market is changing constantly, and we at VIP Plastics are continuously investing in research and development to improve existing product quality and launch new, upgraded solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Year Established</span>
                  <span className="font-semibold">2013</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Manufacturing Area</span>
                  <span className="font-semibold">33,000 sq. ft.</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Daily Production Capacity</span>
                  <span className="font-semibold">10 Metric Tons</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Injection Molding Capacity</span>
                  <span className="font-semibold">450-775 tons</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Quality Certification</span>
                  <span className="font-semibold">ISO 9001:2015</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Material Quality</span>
                  <span className="font-semibold">100% Virgin Plastic</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Delivery Performance</span>
                  <span className="font-semibold text-primary">100% On-Time</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Industrial Clients</span>
                  <span className="font-semibold">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
            <p className="text-gray-600 max-w-4xl">
              Our state-of-the-art manufacturing facility combines advanced technology with skilled expertise to deliver consistent quality and performance across all product lines.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">PRODUCTION TECHNOLOGY</div>
              <h3 className="font-bold text-gray-900 mb-3">Advanced Injection Molding</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multiple injection molding machines with 450-775 ton capacity for precision manufacturing and consistent quality output.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">QUALITY CONTROL</div>
              <h3 className="font-bold text-gray-900 mb-3">Optoelectronic Sorting</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                First in India to implement optoelectronic plastic granule sorting technology ensuring superior raw material quality.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="text-primary font-semibold mb-2">DELIVERY COMMITMENT</div>
              <h3 className="font-bold text-gray-900 mb-3">100% On-Time Performance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Guaranteed delivery schedule with penalty clause and real-time SMS tracking at every production stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 border-l-4 border-primary">
              <h2 className="font-bold text-2xl mb-4 text-gray-900">Mission Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                To deliver precision-engineered plastic solutions that enhance operational efficiency for industrial clients while maintaining our commitment to 100% on-time delivery and continuous technological advancement.
              </p>
            </div>
            <div className="bg-gray-50 p-8 border-l-4 border-secondary">
              <h2 className="font-bold text-2xl mb-4 text-gray-900">Vision Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted manufacturer of plastic material handling products in India, setting industry standards through advanced manufacturing technology and customer-focused solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <Image
                src="/Ashok_Kapoor.jpg"
                alt="Ashok Kapoor - Director and Founder"
                width={300}
                height={400}
                className="object-cover border border-gray-200"
              />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership Statement</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  VIP Plastics has achieved significant milestones since inception in 2013. Our focus remains on manufacturing products with advanced technology, maintaining strong distribution networks, and continuous product development in collaboration with key industrial clients.
                </p>
                <p className="leading-relaxed">
                  VIP Plastics continues expanding its manufacturing capabilities and market presence, delivering innovative plastic solutions for diverse industrial applications.
                </p>
              </div>
              <div className="mt-6 border-l-4 border-primary pl-4">
                <p className="font-bold text-lg text-gray-900">Ashok Kapoor</p>
                <p className="text-primary font-semibold">Director and Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility Data */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Manufacturing Facility Specifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-primary mb-2">33,000</div>
              <div className="text-sm text-gray-600">sq. ft. covered area</div>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-primary mb-2">10</div>
              <div className="text-sm text-gray-600">metric tons/day capacity</div>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-primary mb-2">775</div>
              <div className="text-sm text-gray-600">ton injection molding</div>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-gray-600">MT/day sorting capacity</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
