"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { methodologieTabData } from "../utils"
import { CheckCircle2, ChevronRight } from "lucide-react"

export const Methodologie = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Notre <span className="text-primary">Méthodologie</span></h2>
                    <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                        Un processus structuré et agile pour transformer vos idées en solutions concrètes et performantes.
                    </p>
                </div>

                <Tabs defaultValue="conseil" className="w-full max-w-6xl mx-auto">
                    <TabsList className="flex flex-wrap h-auto bg-transparent gap-4 mb-12 justify-center p-0">
                        {methodologieTabData.map(({value, title}, index) => (
                            <TabsTrigger 
                                key={index} 
                                value={value}
                                className="px-8 py-4 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all font-bold text-sm md:text-base hover:bg-card/60"
                            >
                                {index + 1}. {title.split(' ')[0]} {title.split(' ')[1] || ""}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    
                    <div className="relative mt-8">
                        {methodologieTabData.map(({value, tabContent}, index) => (
                            <TabsContent key={index} value={value} className="focus-visible:outline-none focus-visible:ring-0">
                                <Card className="border-none bg-card/40 backdrop-blur-md shadow-2xl overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        <div className="p-8 md:p-12 lg:p-16 space-y-8">
                                            <div className="space-y-4">
                                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-xl shadow-lg shadow-primary/20">
                                                    0{index + 1}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-black">{tabContent.title}</h3>
                                            </div>
                                            
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {tabContent.listData.map((item) => (
                                                    <li key={item} className="flex items-start gap-3 group">
                                                        <div className="mt-1 flex-shrink-0 text-primary transition-transform group-hover:scale-110">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                        </div>
                                                        <span className="text-lg font-semibold text-foreground/80 leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="hidden lg:flex bg-primary/5 items-center justify-center p-12 border-l border-white/5">
                                            <div className="relative">
                                                <div className="w-64 h-64 rounded-full bg-primary/10 blur-[60px] animate-pulse" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-primary/40">
                                                        <ChevronRight size={160} strokeWidth={0.5} />
                                                    </div>
                                                </div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                                                    <span className="text-6xl font-black text-primary/20 mb-2">STEP</span>
                                                    <span className="text-8xl font-black text-primary/10">0{index + 1}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
            
            {/* Background decorative sweep */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-primary/5 to-transparent -z-10" />
        </section>
    )
}