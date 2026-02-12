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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-[4.5%] ">
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

      <div className=" container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6 backdrop-blur-sm">
                Innovation & Expertise
            </div> */}
            
            <div className="text-slate-800  mb-15 relative z-10 font-sans flex flex-col items-start gap-y-4">
              <TextGenerateEffect
               className="  tracking-tight text-4xl md:text-6xl leading-tight lg:text-5xl *:leading-normal text-[#0d4c92]"
         
              //  className="text-white text-4xl md:text-6xl  text-white leading-tight"
                words={word} 
              />
          
        {/* <div className="text-lg md:text-xl text-slate-400 font-medium mb-10  max-w-xl"> */}
              <TextGenerateEffect
                className="text-[#2b619fce] font-medium max-w-xl text-lg lg:text-xl leading-relaxed"
                
          // className="text-slate-600 font-medium max-w-xl text-lg lg:text-xl leading-relaxed"
                words={subwords} 
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-linear-to-r from-[#3b82f6] to-[#0d4c92]      // ← Dégradé bleu
            hover:from-[#0d4c92] hover:to-[#3b82f6]          // ← Inversion au survol
            text-white
            font-semibold
            px-10 py-6                                        // ← Padding augmenté
            text-lg
            rounded-xl
            shadow-lg                                         // ← Ombre plus prononcée
            hover:shadow-xl                                   // ← Ombre augmentée au survol
            hover:scale-105                                   // ← Légère mise à l'échelle
            transition-all duration-300                       // ← Animation fluide
            border-0                                          // ← Retrait de bordure
            group                                             // ← Pour effets enfants
            relative overflow-hidden                          // ← Pour effet de brillance
          ">
                <Link href="#contact">
                  Découvrir nos solutions
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-[#2b619fce] hover:bg-white/20 font-bold px-10 py-6 text-lg md:text-xl rounded-full backdrop-blur-lg border border-white/50 hover:border-white/10 transition-all shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <Link href="/services">
                  Nos Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className=" relative">
            <div className="relative z-10 animate-float">
              <Image
                src={robot2}
                alt="AI Robot Innovation"
                width={460}
                height={500}
                className="drop-shadow-[0_0_50px_rgba(100,130,240,0.4)]"
                priority
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}