"use client";

import Image from "next/image";
import { techImages, ImageProp } from "../utils";
import { STRAPI_URL } from "@/src/app/_lib/utils";

const ImageCard = ({imageData:{imageUrl, imageAlt}}: {imageData: ImageProp}) => {
    const src = imageUrl.startsWith("http://localhost:1337") 
        ? imageUrl.replace("http://localhost:1337", STRAPI_URL) 
        : imageUrl;

    return (
        <div className="group relative flex aspect-video w-full max-w-[200px] items-center justify-center rounded-2xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/60 hover:shadow-xl hover:shadow-primary/5">
            <Image 
                width={120}
                height={60}
                src={src}
                alt={imageAlt || "Technology Logo"}
                className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                        const span = document.createElement('span');
                        span.className = "text-xs font-bold text-muted-foreground uppercase";
                        span.innerText = imageAlt || 'Tech';
                        target.parentElement.appendChild(span);
                    }
                }}
            />
        </div>
    )
}

export function TechnologieClient() {
    return (
        <section className="py-24 bg-card/10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] -z-10" />
            
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Technologies <span className="text-primary">maîtrisées</span></h2>
                    <p className="text-muted-foreground text-lg font-medium">
                        Nous utilisons les outils les plus performants et modernes pour garantir la robustesse et l'évolutivité de vos solutions.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
                    {techImages.map((imageData: ImageProp) => (
                        <ImageCard key={imageData.imageUrl} imageData={imageData}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
