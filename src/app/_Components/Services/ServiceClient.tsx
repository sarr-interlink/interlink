"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceType, ServiceTypeAttribute } from "@/src/app/_lib/types/ServiceType";
import { TypewriterEffectSmooth } from "@/src/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/src/components/ui/text-generate-effect";
import { BackgroundGradient } from "@/src/components/ui/background-gradient";


export function ServiceClient({services}: {services:{data: ServiceType[]}}) {
    const description = "Nous proposons des solutions innovantes en e-gouvernance, e-santé, développement informatique, messagerie, géolocalisation et cybersécurité."

  return (
    <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6  bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block">
                    Nos Services
                </h2>
                <div className="text-lg text-[#2b619fce]  font-medium  leading-relaxed max-w-3xl mx-auto">
                    <TextGenerateEffect words={description}/>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services?.data?.map((service: ServiceType) => {
                    const attributes: ServiceTypeAttribute = service.attributes || {} as ServiceTypeAttribute;
                    if (attributes.title !== "Slogan") {
                        return <ServiceCard key={service.id} attributes={attributes} />;
                    }
                    return null;
                })}
            </div>
        </div>
    </section>
  );
}

const ServiceCard = ({attributes}: {attributes: ServiceTypeAttribute}) => {
    return (
        <Card className="group relative overflow-hidden border-border/40 bg-card/60 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-[#0d4c92] group-hover:text-primary-foreground group-hover:scale-110  shadow-inner">
                    <i className={`${attributes.iconClass} text-3xl`}></i>
                </div>
                <CardTitle className="text-2xl font-black group-hover:text-[#0d4c92] transition-colors duration-300">
                    {attributes.title || "No Title"}
                </CardTitle>
            </CardHeader> 
            
            <CardContent className="relative z-10">
                <p className="text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {attributes.description || "No Description"}
                </p>
            </CardContent>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Card>
  )
}

