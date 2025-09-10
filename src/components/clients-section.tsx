"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const clientLogos = [
  { src: "/client-logos/client-1.png", alt: "Client 1" },
  { src: "/client-logos/client-2.png", alt: "Client 2" },
  { src: "/client-logos/client-3.png", alt: "Client 3" },
  { src: "/client-logos/client-4.png", alt: "Client 4" },
  { src: "/client-logos/client-5.png", alt: "Client 5" },
  { src: "/client-logos/client-6.png", alt: "Client 6" },
  { src: "/client-logos/client-7.png", alt: "Client 7" },
  { src: "/client-logos/client-8.png", alt: "Client 8" },
  { src: "/client-logos/client-9.png", alt: "Client 9" },
  { src: "/client-logos/client-10.png", alt: "Client 10" },
  { src: "/client-logos/client-11.png", alt: "Client 11" },
  { src: "/client-logos/client-12.png", alt: "Client 12" },
  { src: "/client-logos/client-13.png", alt: "Client 13" },
];

export function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-scroll clients
  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 6) % clientLogos.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const visibleClients = clientLogos.slice(currentIndex, currentIndex + 6).concat(
    clientLogos.slice(0, Math.max(0, (currentIndex + 6) - clientLogos.length))
  );

  return (
    <section className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to serve some of the most respected companies across various industries, 
            delivering quality plastic solutions that meet their demanding requirements.
          </p>
        </div>

        {/* Client logos grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-50'
        }`}>
          {visibleClients.map((client, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={80}
                className="object-contain max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-200"
              />
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(clientLogos.length / 6) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentIndex(index * 6);
                  setIsVisible(true);
                }, 300);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / 6) === index 
                  ? "bg-primary scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to client group ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
