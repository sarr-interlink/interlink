import Image from "next/image";
import { getProducts } from "@/src/app/_lib/data-services";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { ProductAttributeType, ProductType } from "../_lib/types/ProductType";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Products() {
  const productsData: {data: ProductType[]} = await getProducts();
  const products = productsData?.data || [];

  return (
    <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-whiteoverflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            <div className="container mx-auto px-6 relative z-10 text-center">
              
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block mb-8 tracking-tighter">
                   Nos Produits
                </h1>
                <p className="text-xl text-[#2b619fce] max-w-2xl mx-auto font-medium leading-relaxed">
                    Optimisez votre performance avec notre expertise sectorielle et des outils conçus pour l'avenir de votre entreprise.
                </p>
            </div>
            
            {/* Background elements */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product: ProductType) => {
                        const attributes: ProductAttributeType = product.attributes || {} as ProductAttributeType;
                        const title = attributes.title;
                        const description = attributes.Description;
                        const logo = attributes.logo;
                        const logoUrl = logo?.data?.attributes?.url || "";
                        const pathImg = STRAPI_URL + logoUrl;
                        
                        return (
                            <ProductCard 
                                key={product.id} 
                                productId={product.id} 
                                title={title} 
                                description={description} 
                                pathImg={pathImg}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    </main>
  );
}

const ProductCard = ({title, description, productId, pathImg}: {title: string, description: string, productId: number, pathImg: string}) => {
    return (
        <Card className="group relative flex flex-col h-full border-border/40 bg-card/60 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors" />
            
            <CardHeader className="pt-10">
                <div className="mb-8 flex justify-center p-8 rounded-3xl bg-white/5 border border-white/5 shadow-inner transition-all duration-500 group-hover:scale-105 group-hover:bg-white/10">
                    <Image
                        src={pathImg}
                        alt={title}
                        width={120}
                        height={120}
                        className="object-contain h-24 w-24 drop-shadow-2xl transition-transform duration-500"
                    />
                </div>
                <CardTitle className="text-2xl font-black text-center group-hover:text-[#0d4c92] transition-colors duration-300">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
                <p className="text-muted-foreground group-hover:text-[#2b619fce] text-center font-medium leading-relaxed line-clamp-3">
                    {description}
                </p>
            </CardContent>
            
            <CardFooter className="pb-10 pt-6 px-10">
                <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-[#0d4687cf] hover:text-primary-foreground font-black py-7 rounded-2xl text-lg transition-all group/btn shadow-sm hover:shadow-lg hover:shadow-primary/20">
                    <Link href={`/products/${productId}`} className="flex items-center justify-center gap-2">
                        Plus d'infos
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Card>
    );
};