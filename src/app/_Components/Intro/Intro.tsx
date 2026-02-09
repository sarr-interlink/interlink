"use client";
import Image from "next/image";
import robot2 from "@/public/robot2.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LightRays from "@/components/LightRays"
import { TextGenerateEffect } from "@/src/components/ui/text-generate-effect";

export function Intro() {
   const word = "INTERLINK : Votre Partenaire Digital"
   const subwords = "Propulsez votre entreprise avec des solutions logicielles innovantes et l'intelligence artificielle. Depuis 15 ans, nous concevons le futur digital sur mesure."
   
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0F1E]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="right"
          lightSpread={2}
          fadeDistance={2}
          saturation={2}
          mouseInfluence={1}
          noiseAmount={0.26}
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6 backdrop-blur-sm">
                Innovation & Expertise
            </div>
            
            <div className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              <TextGenerateEffect
                className="text-white"
                words={word} 
              />
            </div>

            <div className="text-lg md:text-xl text-slate-400 font-medium mb-10 max-w-xl">
              <TextGenerateEffect
                className="text-slate-400"
                words={subwords} 
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-8 py-7 text-lg md:text-xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                <Link href="#contact">
                  Découvrir nos solutions
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 font-bold px-8 py-7 text-lg md:text-xl rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all">
                <Link href="/services">
                  Nos Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative z-10 animate-float">
              <Image
                src={robot2}
                alt="AI Robot Innovation"
                width={500}
                height={500}
                className="drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                priority
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}