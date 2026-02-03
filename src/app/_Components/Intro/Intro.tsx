"use client";
import Image from "next/image";
import robot2 from "@/public/robot2.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LightRays from "@/components/LightRays"
import { TextGenerateEffect } from "@/src/components/ui/text-generate-effect";

export function Intro() {
   const word = "INTERLINK votre partenaire digital pour des solutions logicielles innovantes, propulsées par l'intelligence artificielle"
   const subwords = "Depuis 15 ans, INTERLINK conçoit des solutions digitales sur mesure pour les entreprises et les institutions..."
   
   
  // Split Text, Text Type, Blur Text, Glitch Text, Count Up
  return (
    
        
        <div className="bg-gray-900 py-[4.5%] flex flex-row items-center justify-center flex-wrap gap-x-4 gap-y-10 relative">
          <div className="absolute inset-0">
             <LightRays
              raysOrigin="right"
              lightSpread={2}
              fadeDistance={2}
              saturation={2}
              mouseInfluence={1}
              noiseAmount={0.26}
              className="custom-rays"
            />
          </div>
          <div className="text-white relative z-10 font-serif flex flex-col items-start gap-y-8">
            
            <TextGenerateEffect
              className="font-black max-w-xl text-2xl"
              words={word} />
            <TextGenerateEffect
              className="font-black max-w-xl text-lg"
              words={subwords} />
             
            
            <Button asChild className="bg-blue-950 font-black p-6 text-xl font-serif">
              <Link className="" href="#contact">
                Contactez Nous
              </Link>
            </Button>
          </div>

          

          <Image
          src={robot2}
          alt=""
          width={420}
          />
          
           
        </div>
  );
}
