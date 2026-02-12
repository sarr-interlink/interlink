import Image from "next/image"
import { HebergementType } from "../../_lib/types/HebergementType"

export const OffreIntro  = ({
    hebergement, pathImg
}: {
    hebergement: HebergementType
    pathImg: string
}
) => {
    console.log("IMAGE URL:", pathImg);
    return (
        <section className="relative py-24 absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_80%)] overflow-hidden">
            <div className="absolute inset-0 bg-white" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-bold text-blue-400 mb-8 backdrop-blur-sm uppercase tracking-widest">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                            Solutions d'Hébergement
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-4xl font-black  leading-[1] mb-8 tracking-tighter  bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block">
                            {hebergement.attributes.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#2b619fce] font-medium leading-relaxed max-w-xl italic">
                            {hebergement.attributes.description}
                        </p>
                    </div>

                    <div className="flex-1 flex  justify-center lg:justify-end">
                        <div className="relative">
                            
                            <Image
                                alt="Hébergement Visual"
                                width={520}
                                height={400}
                                className="object-contain bg-white animate-float"
                                src={pathImg}
                                priority
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-blue-500/10 blur-[100px] rounded-full -z-10" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Transition to next section */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}