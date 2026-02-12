"use client"
import Image from "next/image";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { HSaasDescriptionType } from "../../_lib/types/HSaasDescription";
import { HSaas, HSaasAttributeImageType } from "../../_lib/types/HSaas";
import { Card, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextGenerateEffect } from "@/src/components/ui/text-generate-effect";
import { CheckCircle2 } from "lucide-react";

export function OffreClient({
    HebergementSaasDesciptionData,  
    hebergementSaas,
    hrefSpecific
   } : 
    {
    HebergementSaasDesciptionData: {data: HSaasDescriptionType},
    hebergementSaas: HSaas[],
    hrefSpecific: string }) {

  const offresText = "Nos Offres"
  const modeH = HebergementSaasDesciptionData.data.attributes.title
  const modeHbDescription = HebergementSaasDesciptionData.data.attributes.description
  
  return (
    <section className="py-32 bg-background relative overflow-hidden">
        {/* Background Decorative Gradient */}
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-primary/5 blur-[150px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Solutions Cloud
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-3.2xl font-black text-[#3b82f6] mb-6 ">
                    {offresText} <span className=" text-4xl md:text-5xl font-black mb-6  text-4xl  bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block">{modeH}</span>
                </h2>
                <div className="text-lg text-[#2b619fce] md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                    {modeHbDescription}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hebergementSaas.map((hebergement: HSaas) => {
                    const image: HSaasAttributeImageType = hebergement.attributes.image;
                    const imageUrl: string = image?.data?.attributes?.url || "";
                    const pathImg: string = STRAPI_URL + imageUrl
                    return (
                        <OffreCard hrefSpecific={hrefSpecific} key={hebergement.id} hebergement={hebergement} pathImg={pathImg}/>
                    )
                })}
            </div>
        </div>
    </section>
  );
}

const OffreCard = ({hebergement, pathImg, hrefSpecific}: {hebergement: HSaas, pathImg: string, hrefSpecific: string}) => {
  return (
    <Card className="flex flex-col h-full border-border/40 bg-card/60 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:-translate-y-2  hover:shadow-2xl hover:shadow-primary/10 group overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/25 transition-colors" />
      
      <CardHeader className="flex-1 pb-4">
        <div className="mb-8 flex justify-center p-8 rounded-3xl bg-white/5 border border-white/5 shadow-inner  transition-all duration-500 group-hover:scale-105 group-hover:bg-white/10">
          <Image
            src={pathImg}
            alt={hebergement.attributes.title}
            width={240}
            height={160}
            className="object-contain h-32 drop-shadow-2xl"
          />
        </div>
        <CardTitle className="text-2xl font-black text-center mb-4 group-hover:text-[#0d4c92] transition-colors">
            {hebergement.attributes.title}
        </CardTitle>
        <CardContent className="px-0">
            <p className="text-muted-foreground text-center font-medium leading-relaxed group-hover:text-[#2b619fce] mb-6">
                {hebergement.attributes.description}
            </p>
        </CardContent>
      </CardHeader>

      <CardFooter className="pt-4 pb-10 px-10">
        <Button asChild className="w-full bg-[#185397d7] hover:bg-[#0d4c92] text-primary-foreground font-black py-7 rounded-2xl text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 group/btn">
          <Link href={hrefSpecific} className="flex items-center justify-center gap-2">
            {hebergement.attributes.actionLabel}
            <CheckCircle2 className="w-5 h-5 opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
