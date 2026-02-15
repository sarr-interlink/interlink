"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { HebergementLocalType } from "../../_lib/types/HebergementLocal";
import { HebergementLocalDesciptionType } from "../../_lib/types/HebergementLocalDesc";
import { STRAPI_URL } from "../../_lib/utils";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react"

export const OnPerm = (
    {HebergementLocaleDesciptionData, hebergementLocale}: 
    {
        HebergementLocaleDesciptionData: {data: HebergementLocalDesciptionType},
        hebergementLocale: HebergementLocalType[]
    }) => {
    return (
        <section className="relative bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)] py-32 overflow-hidden border-y border-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.05),transparent_70%)]" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 uppercase tracking-wider backdrop-blur-sm">
                        <ShieldCheck className="w-4 h-4" />
                        Infrastructure Locale
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-black mb-8 tracking-tighter">
                        Mode Local <span className="bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block italic">"On-Premise"</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#2b619fce] font-medium leading-relaxed max-w-3xl mx-auto">
                        {HebergementLocaleDesciptionData.data.attributes.description}
                    </p>
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-20">
                    {hebergementLocale.map((hebergement: HebergementLocalType) => {
                        const image = hebergement.attributes.image;
                        const imageUrl = image?.data?.attributes?.url || "";
                        const pathImg = STRAPI_URL + imageUrl

                        return <OnPermCard key={hebergement.id} hebergement={hebergement} pathImg={pathImg}/>
                    })}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-background to-transparent" />
            <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-background to-transparent" />
                 
        </section>
    )
}

const OnPermCard = ({hebergement, pathImg}: {hebergement: HebergementLocalType, pathImg: string}) => {
    return (
        <Card className="group relative h-full border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            
            <CardHeader className="flex flex-col items-center pt-10">
                <div className="mb-8 p-6 rounded-3xl bg-white/[0.03] border border-white/5 shadow-inner transition-all duration-500 group-hover:scale-105 group-hover:bg-white/[0.08]">
                    <Image
                        src={pathImg}
                        alt={hebergement.attributes.title}
                        width={240}
                        height={160}
                        className="object-contain h-32 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-black text-[#0d4b92bc] text-center group-hover:text-[#0d4c92] transition-colors">
                    {hebergement.attributes.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="pb-12 px-8">
                <p className="text-slate-400 text-center group-hover:text-[#2b619fce] font-medium leading-relaxed text-lg italic">
                    {hebergement.attributes.description}
                </p>
            </CardContent>
            
            <CardFooter className="pb-10 pt-0 flex justify-center">
                 <div className="flex items-center gap-2 text-[#0d4c92] font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explorer cette solution <ArrowRight className="w-4 h-4" />
                 </div>
            </CardFooter>
        </Card>
    )
}