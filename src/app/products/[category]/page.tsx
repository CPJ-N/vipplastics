import { notFound } from "next/navigation";
import Image from "next/image";
import { categoryBySlug } from "@/data/categories";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Package, Ruler, Weight } from "lucide-react";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const data = categoryBySlug[category];
  if (!data) return {};
  return { title: data.title, description: data.desc };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const data = categoryBySlug[category];
  if (!data) return notFound();
  
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{data.desc}</p>
      </div>

      {/* Category Features */}
      {data.features && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      {data.products && data.products.length > 0 ? (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Available Models</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md h-full flex flex-col">
                {/* Image Container */}
                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Container - Flex grow to fill remaining space */}
                <div className="flex flex-col flex-grow">
                  {/* Header */}
                  <CardHeader className="pb-3 pt-6 flex-shrink-0">
                    <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-md inline-block w-fit">
                      Model: {product.model}
                    </CardDescription>
                  </CardHeader>

                  {/* Main Content - Flex grow */}
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    {/* Specifications Grid */}
                    <div className="grid grid-cols-1 gap-3 text-sm bg-gray-50/80 p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Ruler className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground font-medium">Dimensions:</span>
                        </div>
                        <span className="font-semibold text-gray-900 text-xs">{product.dimensions}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Weight className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground font-medium">Weight:</span>
                        </div>
                        <span className="font-semibold text-gray-900 text-xs">{product.weight}</span>
                      </div>
                    </div>

                    {/* Colors */}
                    {product.colors && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-muted-foreground font-medium">Colors:</span>
                        <div className="flex gap-1 flex-wrap">
                          {product.colors.slice(0, 4).map((color) => (
                            <span key={color} className="text-xs bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                              {color}
                            </span>
                          ))}
                          {product.colors.length > 4 && (
                            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                              +{product.colors.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Features - Limited to first 3 for consistency */}
                    <div className="flex-grow">
                      <span className="text-sm font-semibold text-gray-900 mb-2 block">Key Features:</span>
                      <ul className="text-xs text-muted-foreground space-y-1.5">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 leading-relaxed">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                        {product.features.length > 3 && (
                          <li className="text-primary text-xs font-medium">
                            +{product.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Button - Always at bottom */}
                    <div className="pt-2 mt-auto">
                      <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-200" size="sm">
                        <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Get Quote
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        /* Fallback for categories without products */
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Available Models</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center">
                  <Package className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="mb-2">Model {i}</CardTitle>
                  <CardDescription>Dimensions, capacity, colors</CardDescription>
                  <Button asChild className="w-full mt-4" size="sm">
                    <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Get Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Applications Section */}
      {data.applications && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Applications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.applications.map((application, index) => (
              <div key={index} className="p-4 border rounded-lg text-center">
                <span className="font-medium text-gray-700">{application}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Custom Solutions?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Contact us for custom colors, branding, or specific dimensions. We offer flexible solutions 
          tailored to your business requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Quote
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:+919999009090">
              Call +91 9999009090
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
