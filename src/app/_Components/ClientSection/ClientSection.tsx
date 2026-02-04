"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTestimonials } from "@/src/app/_lib/data-services";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Renommer ici
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { TestimonialAttribute, TestimonialType } from "@/src/app/_lib/types/TestimonialType";

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
    const [, setError] = useState<string>("");

    useEffect(() => {
        async function fetTestimonials() {
        try {
            const data: {data: TestimonialType[]} = await getTestimonials();
            setTestimonials(data);
            setCount(data.data.length)
        } catch (err) {
            console.error("Error fetching setTestimonials:", err);
            setError("Failed to load setTestimonials.");
        } finally {
            setLoading(false);
        }
        }

        fetTestimonials();
    }, []);

    useEffect(() => {
        
        // setCount(testimonials.data.length)
        
        if (!api) {
        return
        }
    
        // setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
  
  const testimonialData =
    testimonials && Array.isArray(testimonials.data) ? testimonials.data : [];

  return (
    <div className="bg-blue-200  pt-10 pb-10">
        <h1 className="text-center text-4xl py-10 font-extrabold text-blue-950">Ce que nos clients disent de nous</h1>
        
        {/* <div className="flex flex-col items-center gap-y-8"> */}
        <div className="mx-auto max-w-4xl">
            <Carousel setApi={setApi} className="w-full max-w-4xl">
                <CarouselContent className="">
                    {
                        testimonialData.length > 0 &&
                                testimonialData.map((testimonial: TestimonialType, index) => {
                                    const attributes: TestimonialAttribute = testimonial.attributes  || {} as TestimonialAttribute;
                                    const logoUrl = attributes.image?.data?.attributes?.url || "";
                                    return (
                                        <CarouselItem key={index} className="">
                                            <TestimonialCard key={testimonial.id} attributes={attributes} logoUrl={logoUrl} />
                                        </CarouselItem>
                                    )
                                })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
             <div className="text-muted-foreground py-2 text-center text-sm">
                Slide {current} of {count}
            </div>
        </div>
        {/* </div> */}
    </div>
  );
}


const TestimonialCard = ({attributes, logoUrl}: {attributes: TestimonialAttribute, logoUrl: string}) => {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>
                    <p className="text-gray-600 leading-loose text-xl">
                        <span className="text-6xl">
                            “
                        </span>
                        {attributes.commentary}
                        <span className="text-6xl" style={{ float: "right" }}>
                            ”
                        </span>{" "}
                    </p>
                </CardTitle>
                
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-y-2">
                <Image
                    src={`${STRAPI_URL}${logoUrl}`}
                    alt=""
                    width={90}
                    height={40}
                    />
                <h2 className="font-extrabold text-blue-950 text-xl uppercase">
                  {attributes.Name}
                </h2>
                <h3 className="font-bold text-lg">
                  {attributes.Compagnie}
                </h3>
            </CardContent>
        </Card>
    )
}