import Image from "next/image";
import ing from "@/public/ing.svg";
import { MessageForm } from "../../_Components/MessageForm/MessageForm";
import { getProductsByID } from "@/src/app/_lib/data-services";
import { ProductAttributeType, ProductType } from "../../_lib/types/ProductType";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Box, CheckCircle2 } from "lucide-react";

export default async function Page({ params }: {params: Promise<{productId: number}>}) {
  const {productId} = await params
  const productData: {data: ProductType} = await getProductsByID(productId);
  const product: ProductAttributeType = productData?.data.attributes;

  return (
    <main className="min-h-screen bg-background">
      {/* Product Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#0A0F1E] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        {/* Requested Arch Background Element */}
        <div className="absolute bottom-0 right-0 w-[60%] h-[120%] bg-primary/10 rounded-tl-[100%] translate-x-[20%] translate-y-[20%] pointer-events-none -z-0" />
        <div className="absolute bottom-10 right-10 w-[40%] h-[80%] bg-blue-500/5 rounded-tl-[100%] translate-x-[10%] translate-y-[10%] pointer-events-none -z-0 border-t border-l border-white/5" />
        
        <div className="container mx-auto px-6 relative z-10">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-3 transition-all group">
                <ArrowLeft className="w-5 h-5" />
                Retour aux produits
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
                        <Box className="w-4 h-4" />
                        Produit Phare
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                        {product.title}
                    </h1>
                    
                    <div className="space-y-6">
                        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed italic border-l-4 border-primary pl-6">
                            {product.Description.slice(0, 150)}...
                        </p>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">
                            {product.Description.slice(150)}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-10 py-8 text-xl rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.05] active:scale-95">
                            <a href="#contact">Demander une démo</a>
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative z-10 p-4 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 backdrop-blur-sm shadow-2xl animate-float">
                        <Image
                            src={ing}
                            alt={product.title}
                            width={600}
                            height={600}
                            className="object-contain w-full h-auto drop-shadow-2xl"
                            priority
                        />
                    </div>
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full -z-10" />
                </div>
            </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 bg-background border-b border-border/50">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1 relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4">
                    <video
                        autoPlay
                        loop
                        muted
                        controls
                        className="w-full h-auto rounded-2xl shadow-inner"
                        poster="https://example.com/path-to-image.jpg"
                    >
                        <source src="https://priv-web-nomeo-prod.apnl.ws/assets/projects/media-video17176839096661c6c58fa26.mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                 </div>

                 <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">{product.title} <span className="text-primary">en action</span></h2>
                    
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                        Découvrez comment notre solution peut transformer votre quotidien et optimiser vos processus métiers avec les dernières technologies du marché.
                    </p>

                    <ul className="space-y-4 pt-4">
                        {[
                            "Performance optimisée en temps réel",
                            "Interface intuitive et ergonomique",
                            "Sécurité des données de bout en bout",
                            "Support technique dédié 24/7"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center gap-4 text-lg font-bold">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                 </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <MessageForm />
    </main>
  );
}
