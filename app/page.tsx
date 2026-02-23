import Hero from "@/components/Hero";
import Process from "@/components/Process";
import { StudioMetrics } from "@/components/StudioMetics";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
 <main  > 
 <Hero/>
 <Process/>
 <StudioMetrics/>
 <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Crafting Timeless Interiors
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            At Nirmana Studio, we blend modern minimalism with curated textures, warm palettes, and architectural harmony to transform ordinary spaces into deeply personal sanctuaries.
          </p>
          <Button variant="outline" size="lg">
            Explore Our Work
          </Button>
        </div>
      </section>
 </main>
  );
}
