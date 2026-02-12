"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTestimonials } from "@/src/app/_lib/data-services";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { TestimonialAttribute, TestimonialType } from "@/src/app/_lib/types/TestimonialType";
import { Quote } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function Testimonial() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const [testimonials, setTestimonials] = useState<{data: TestimonialType[]}>({data: []});
    const [, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetTestimonials() {
            try {
                const data: {data: TestimonialType[]} = await getTestimonials();
                setTestimonials(data);
                setCount(data.data.length)
            } catch (err) {
                console.error("Error fetching setTestimonials:", err);
            } finally {
                setLoading(false);
            }
        }
        fetTestimonials();
    }, []);

    useEffect(() => {
        if (!api) return
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
  
    const testimonialData = testimonials && Array.isArray(testimonials.data) ? testimonials.data : [];

    return (
        <section className="py-24 bg-primary/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Ce que nos <span className="text4xl md:text-5xl font-black mb-4  text-4xl   bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block">clients</span> disent</h2>
                    <p className="text-[#2b619fce] text-lg font-medium max-w-2xl mx-auto">
                        La satisfaction de nos partenaires est notre plus grande réussite. Découvrez leurs retours d'expérience.
                    </p>
                </div>
                
                <div className="mx-auto max-w-4xl relative">
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {testimonialData.map((testimonial: TestimonialType, index) => {
                                const attributes: TestimonialAttribute = testimonial.attributes  || {} as TestimonialAttribute;
                                const logoUrl = attributes.image?.data?.attributes?.url || "";
                                return (
                                    <CarouselItem key={index}>
                                        <TestimonialCard attributes={attributes} logoUrl={logoUrl} />
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-16 border-border/50 bg-background/50 backdrop-blur-sm" />
                            <CarouselNext className="-right-16 border-border/50 bg-background/50 backdrop-blur-sm" />
                        </div>
                    </Carousel>
                    
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonialData.map((_, i) => (
                            <div 
                                key={i} 
                                className={`h-1.5 rounded-full transition-all duration-300 ${current === i + 1 ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}`} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const TestimonialCard = ({attributes, logoUrl}: {attributes: TestimonialAttribute, logoUrl: string}) => {
    return (
        <Card className="border-none bg-card/40 backdrop-blur-md shadow-2xl mx-4 my-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
            <CardHeader className="pt-12">
                <div className="absolute top-6 left-8 text-primary/20">
                    <Quote size={80} strokeWidth={3} />
                </div>
                <CardTitle className="relative z-10 px-4 md:px-8">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-foreground/90">
                        {attributes.commentary}
                    </p>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center pb-12">
                <div className="h-20 w-20 rounded-full border-4 border-background overflow-hidden mb-6 shadow-xl bg-white flex items-center justify-center">
                    <Image
                        src={`${STRAPI_URL}${logoUrl}`}
                        alt={attributes.Name || "Client logo"}
                        width={90}
                        height={90}
                        className="object-contain p-2"
                    />
                </div>
                <h4 className="font-black text-xl text-[#0d4c92] uppercase tracking-tight">
                  {attributes.Name}
                </h4>
                <p className="font-bold text-muted-foreground">
                  {attributes.Compagnie}
                </p>
            </CardContent>
        </Card>
    )
}