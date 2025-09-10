import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About Us",
  description: "Established in 2013, VIP Plastics is a leading manufacturer of plastic material handling products with 100% on-time delivery commitment.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative mb-16 overflow-hidden rounded-2xl">
        {/* Background Image */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/vip-plastics-181374-585418.jpg"
            alt="VIP Plastics Manufacturing Facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="flex justify-center mb-8">
              <Image
                src="/about-logo.png"
                alt="VIP Plastics Logo"
                width={250}
                height={167}
                className="object-contain drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 drop-shadow-lg">
              About VIP Plastics
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Established in 2013, VIP Plastics is a leading manufacturer committed to delivering high-quality plastic solutions with innovation and reliability.
            </p>
            <div className="mt-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-sm font-semibold">Advanced Manufacturing</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="text-sm font-semibold">100% On-Time Delivery</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="text-sm font-semibold">Innovation Leader</span>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Established in 2013, VIP Plastics is engaged in manufacturing and wholesaling of Plastic material handling Crates, Fruit and Vegetable crates, Industrial Crates, Dairy Crates, Planters, Plastic Pallets, Industrial Air Coolers and more.
            </p>
            <p className="mb-6">
              We are an organisation that commits to <strong>100% on-time delivery with penalty clause</strong>. We have real time SMS alert facility at every stage of the progress for your order.
            </p>
            <p className="mb-6">
              We are the <strong>first company in India to use optoelectronic technology for sorting plastic granules</strong>, ensuring superior quality in our manufacturing process.
            </p>
            <p>
              The market is changing everyday and so are the requirements of our clients. We at VIP Plastics are constantly investing in research and development to improve the quality of our existing products and to launch new and upgraded products.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose VIP Plastics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="mb-3">100% On-Time Delivery</CardTitle>
              <CardDescription>Commitment to delivery with penalty clause and real-time SMS alerts</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <CardTitle className="mb-3">Advanced Technology</CardTitle>
              <CardDescription>First in India to use optoelectronic technology for plastic granule sorting</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <CardTitle className="mb-3">Continuous Innovation</CardTitle>
              <CardDescription>Constant R&D investment for product quality improvement and new launches</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
            <h2 className="font-bold text-2xl mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Deliver high‑quality plastic solutions that improve operational efficiency for our customers while maintaining our commitment to 100% on-time delivery and continuous innovation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8">
            <h2 className="font-bold text-2xl mb-4 text-secondary">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Be the most trusted brand in plastic material handling products in India, setting industry standards through technology and customer-centric approach.
            </p>
          </div>
        </div>
      </section>

      {/* Message from Director */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">A Message from our Director and Founder</h2>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/Ashok_Kapoor.jpg"
                  alt="Ashok Kapoor - Director and Founder"
                  width={250}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 text-6xl text-primary/20 font-serif">&ldquo;</div>
                <blockquote className="text-lg leading-relaxed text-gray-700 italic mb-6 pl-8">
                  VIP Plastics has traversed many milestones since its inception in 2013. At each milestone we have endeavored to serve our customers in a way they feel benefited. Our focus has been on manufacturing products with best technology, sales with strong distribution network and continuous product upgradation by our team in close association with our key customers.
                </blockquote>
                <blockquote className="text-lg leading-relaxed text-gray-700 italic mb-8 pl-8">
                  VIP Plastics is in an exciting phase of its journey and is poised to leap miles ahead. We are looking to your continued support in journey.
                </blockquote>
                <div className="pl-8">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-bold text-xl text-gray-900">Ashok Kapoor</p>
                    <p className="text-primary font-semibold">Director and Founder</p>
                    <p className="text-sm text-muted-foreground mt-1">VIP Plastics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Consolidated Manufacturing Facilities</h2>
        <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 lg:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <CardTitle className="mb-4 text-gray-900">Covered Area</CardTitle>
                <div className="text-3xl font-bold text-primary mb-1">33,000</div>
                <p className="text-primary/80 font-medium">sq. feet</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-secondary/20">
              <CardContent className="pt-6">
                <CardTitle className="mb-4 text-gray-900">Capacity to Process</CardTitle>
                <div className="text-3xl font-bold text-secondary mb-1">10</div>
                <p className="text-secondary/80 font-medium">Metric tons per day</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <CardTitle className="mb-4 text-gray-900">Injection Molding Machines</CardTitle>
                <div className="text-2xl font-bold text-primary mb-1">450 - 775</div>
                <p className="text-primary/80 font-medium">tons capacity</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-secondary/20">
              <CardContent className="pt-6">
                <CardTitle className="mb-4 text-gray-900">Plastic Color Sortex</CardTitle>
                <div className="text-3xl font-bold text-secondary mb-1">1</div>
                <p className="text-secondary/80 font-medium">Metric ton per day</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art manufacturing facility is equipped with advanced machinery and technology to ensure consistent quality and efficient production. 
              With our robust infrastructure, we maintain the highest standards while meeting diverse customer requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">2013</div>
            <p className="text-muted-foreground">Established</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">On-Time Delivery</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">1st</div>
            <p className="text-muted-foreground">Optoelectronic Tech in India</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </section>
    </div>
  );
}
