"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ValueAttributeType, ValueType } from "@/src/app/_lib/types/ValuesType";

export function ValuesClient({values}: {values: {data: ValueType[]}}) {
  return (
    <section className="py-24relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4  text-4xl  bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block">Valeurs</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2b619fce]">Pourquoi nous choisir</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {values?.data?.map((value: ValueType) => {
                    const attributes: ValueAttributeType = value.attributes || {} as ValueAttributeType;
                    return (
                        <ValueCard key={value.id} attributes={attributes}/>
                    )
                })}
            </div>
        </div>
    </section>
  );
}

const ValueCard = ({attributes}: {attributes: ValueAttributeType}) => {
  return (
    <Card className="group border-border/40 bg-card/60  backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary/70 transition-all duration-500 group-hover:bg-[#0d4c92] group-hover:text-primary-foreground group-hover:rotate-[360deg] shadow-inner">
                <i className={`${attributes.iconClass} text-2xl`}></i>
            </div>
            <span className="text-xl font-black group-hover:text-[#0d4c92] transition-colors duration-300">{attributes.title || "No Title"}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-semibold leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {attributes.description || "No Description"}
          </p>
        </CardContent>
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors duration-500" />
    </Card>
  )
}
