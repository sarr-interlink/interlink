import { LucideMapPin, LucideMail, LucidePhone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageFormContact } from "./MForm";

export function MessageForm() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text4xl md:text-5xl font-black mb-4  text-4xl bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block">Contactez-Nous</h2>
                <p className="text-[#2b619fce] text-lg font-medium">
                    Vous avez un projet ou une question ? Notre équipe d&apos;experts est à votre écoute pour vous accompagner.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Form Card */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
                    <CardContent className="pt-8">
                        <MessageFormContact />
                    </CardContent>
                </Card>

                {/* Info Column */}
                <div className="lg:pl-8 space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black">Informations de contact</h3>
                        <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                            Notre personnel dédié vous rappellera rapidement pour répondre à toutes vos interrogations.
                        </p>
                    </div>
                    
                    <div className="space-y-8">
                        <ContactInfoItem 
                            icon={<LucideMapPin className="w-6 h-6" />}
                            title="Notre Siège"
                            text="055 Ilot C Zone Château D’Eau Nouakchott – Mauritanie"
                        />
                        <ContactInfoItem 
                            icon={<LucideMail className="w-6 h-6" />}
                            title="Email"
                            text="info@interlink.mr"
                            href="mailto:info@interlink.mr"
                        />
                        <ContactInfoItem 
                            icon={<LucidePhone className="w-6 h-6" />}
                            title="Téléphone"
                            text="+ (222) 45 25 23 56"
                            href="tel:+22245252356"
                        />
                    </div>

                    {/* Simple badge or extra info */}
                    <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                        <p className="text-[#0d4c92] font-bold text-lg italic">
                            &ldquo;L&apos;expertise technologique au service de votre croissance digitale.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, text, href }: { icon: React.ReactNode, title: string, text: string, href?: string }) {
    return (
        <div className="flex gap-6 items-start group">
            <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-[#0d4c92] group-hover:text-primary-foreground">
                {icon}
            </div>
            <div className="space-y-1">
                <h4 className="font-bold text-slate-500 uppercase tracking-wider text-xs">{title}</h4>
                {href ? (
                    <a href={href} className="text-xl font-black hover:text-primary transition-colors block">
                        {text}
                    </a>
                ) : (
                    <p className="text-xl font-black">{text}</p>
                )}
            </div>
        </div>
    );
}
