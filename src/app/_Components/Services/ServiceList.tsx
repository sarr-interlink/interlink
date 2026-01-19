"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceType, ServiceTypeAttribute, IconTypeData, IconTypeDataAttribute } from "@/src/app/_lib/types/ServiceType"; // Adjusted path based on grep/ls results? 
// Wait, I need to check where types are. The previous cat showed imports from "@/src/app/_lib/types/ServiceType"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceListProps {
    services: ServiceType[];
}

export function ServiceList({ services }: ServiceListProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate cards on scroll
        // Select all cards using a class or just child nodes
        const cards = gsap.utils.toArray<HTMLElement>(".service-card");

        gsap.fromTo(cards,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // Start when top of container is 80% down the viewport
                    toggleActions: "play none none reverse",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="mt-8 mx-auto w-full flex md:flex-wrap flex-col items-center justify-center md:flex-row gap-x-8 gap-y-14">
            {services.map((service) => {
                const attributes: ServiceTypeAttribute = service.attributes || {} as ServiceTypeAttribute;
                // Filter out Slogan here or pre-filter? The original code did it inside the map.
                if (attributes.title === "Slogan") return null;

                return (
                    <ServiceCard key={service.id} attributes={attributes} />
                );
            })}
        </div>
    );
}

const ServiceCard = ({ attributes }: { attributes: ServiceTypeAttribute }) => {
    // Simple hover effect using CSS or GSAP? 
    // Let's stick to CSS for simple hovers to keep it performant, 
    // but we can add constraints or use GSAP for more complex interactions if requested.
    // For 'premium' feel, maybe a subtle scale and shadow lift.

    const iconClass = attributes.iconClass || "";

    return (
        <Card className="service-card w-70 h-70 md:w-120 md:h-70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50 border-none shadow-md">
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-x-6">
                    <i className={`${iconClass} text-5xl text-center text-yellow-600 bg-blue-950 p-3 rounded-xl mt-2`}></i>
                    <h4 className="lg:text-lg md:text-xl font-semibold text-blue-700">
                        {attributes.title || "No Title"}
                    </h4>
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-xl font-bold text-gray-600">
                    {attributes.description || "No Description"}
                </p>
            </CardContent>
        </Card>
    )
}
