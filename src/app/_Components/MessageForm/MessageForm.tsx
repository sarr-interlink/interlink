import { Button } from "@/components/ui/button";
import { LucideMapPin, LucideMail, LucidePhone, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MessageForm() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4">Contactez-<span className="text-primary">Nous</span></h2>
                <p className="text-muted-foreground text-lg font-medium">
                    Vous avez un projet ou une question ? Notre équipe d'experts est à votre écoute pour vous accompagner.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Form Card */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
                    <CardContent className="pt-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold ml-1">Nom complet</label>
                                    <input 
                                        type="text"
                                        id="name"
                                        className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        placeholder="Jean Dupont"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold ml-1">Email professionnel</label>
                                    <input 
                                        type="email"
                                        id="email"
                                        className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        placeholder="contact@entreprise.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold ml-1">Sujet</label>
                                <input 
                                    type="text"
                                    id="subject"
                                    className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="Comment pouvons-nous vous aider ?"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold ml-1">Message</label>
                                <textarea 
                                    id="message"
                                    rows={5}
                                    className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                    placeholder="Dites-nous en plus sur votre projet..."
                                    required
                                ></textarea>
                            </div>

                            <Button className="w-full py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 group" type="submit">
                                Envoyer le message
                                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </form>
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
                            text="Abidjan, Côte d'Ivoire"
                        />
                        <ContactInfoItem 
                            icon={<LucideMail className="w-6 h-6" />}
                            title="Email"
                            text="contact@interlink.ci"
                            href="mailto:contact@interlink.ci"
                        />
                        <ContactInfoItem 
                            icon={<LucidePhone className="w-6 h-6" />}
                            title="Téléphone"
                            text="+225 00 00 00 00 00"
                            href="tel:+2250000000000"
                        />
                    </div>

                    {/* Simple badge or extra info */}
                    <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                        <p className="text-primary font-bold text-lg italic">
                            "L'expertise technologique au service de votre croissance digitale."
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
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
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
