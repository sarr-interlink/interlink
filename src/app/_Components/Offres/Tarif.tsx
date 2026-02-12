import Image from "next/image"
import Link from "next/link"
import { TarificationType } from "../../_lib/types/TarificationTYpe"
import { Button } from "@/components/ui/button"
import { ArrowRight, BadgeCheck } from "lucide-react"

export const Tarif = ({
    tarificationData, pathImg
} : {
    tarificationData: {data: TarificationType},
    pathImg: string }) => {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
             {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-4xl bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-foreground">
                            {tarificationData.data.attributes.title}
                        </h2>

                        <p className="text-xl text-[#2b619fce] font-medium leading-relaxed mb-10 max-w-xl">
                            {tarificationData.data.attributes.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-8 mb-12">
                            <Button asChild size="lg" className="bg-gradient-to-r from-[#3b82f6] to-[#0d4c92]      // ← Dégradé bleu
            hover:from-[#0d4c92] hover:to-[#3b82f6]          // ← Inversion au survol
            text-white
            font-semibold
            px-10 py-6                                        // ← Padding augmenté
            text-2xl
            rounded-xl
            shadow-lg                                         // ← Ombre plus prononcée
            hover:shadow-xl                                   // ← Ombre augmentée au survol
            hover:scale-105                                   // ← Légère mise à l'échelle
            transition-all duration-300                       // ← Animation fluide
            border-0                                          // ← Retrait de bordure
            group                                             // ← Pour effets enfants
            relative overflow-hidden">
                                <Link href="/contact" className="flex items-center gap-2">
                                    {tarificationData.data.attributes.actionLabel}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            
                            <Link href="/contact" className="group flex items-center gap-3 text-lg font-bold hover:text-primary transition-all">
                                Consulter nos experts
                                <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-border group-hover:border-primary group-hover:bg-primary/5 transition-all">
                                    <ArrowRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
                                </div>
                            </Link>
                        </div>

                        <div className="relative p-8 rounded-[2rem] bg-card/60 border border-border/50 backdrop-blur-md shadow-xl overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                            <div className="flex items-start gap-4">
                                <BadgeCheck className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                                <p className="text-foreground/90 font-bold text-xl leading-snug">
                                    {tarificationData.data.attributes.summary}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative z-10 p-4 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 backdrop-blur-sm shadow-2xl animate-float">
                            <Image
                                src={pathImg}
                                width={800}
                                height={600}
                                alt="Tarification"
                                className="rounded-[2rem] shadow-2xl"
                                priority
                            />
                        </div>
                        
                        {/* Orbiting element decorative effect (optional look-alike) */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse" />
                        <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-blue-500/10 blur-[120px] rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}