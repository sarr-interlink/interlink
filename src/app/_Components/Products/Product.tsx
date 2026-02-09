"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { getProducts } from "@/src/app/_lib/data-services";
import Image from "next/image";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { ProductAttributeType, ProductType } from "@/src/app/_lib/types/ProductType";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductsDiv() {
  const [members, setMembers] = useState<{data: ProductType[]}>({data: []});
  const [, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const data: {data: ProductType[]} = await getProducts();
        setMembers(data);
      } catch (err) {
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMembers();
  }, []);

  const productData = Array.isArray(members.data) ? members.data : [];

  return (
    <section className="py-24 bg-card/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -z-10" />
      
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4">Nos <span className="text-primary">Produits</span></h2>
                <p className="text-muted-foreground text-lg font-medium max-w-2xl mx-auto">
                    Découvrez notre gamme de solutions logicielles conçues pour répondre aux défis d'aujourd'hui.
                </p>
            </div>

            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 30 }
                }}
                freeMode={true}
                loop={productData.length > 3}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, FreeMode, Pagination, Navigation]}
                className="pb-16"
            >
                {productData.map((product: ProductType) => (
                    <SwiperSlide key={product.id}>
                        <CarouselCard product={product}/>
                    </SwiperSlide>
                ))}
            </Swiper>        
        </div>
    </section>
  );
}

const CarouselCard = ({product}: {product: ProductType}) => {
    const attributes: ProductAttributeType = product.attributes || {} as ProductAttributeType;
    const logoUrl = attributes.logo?.data?.attributes?.url || "";
    return (
        <Card className="h-[400px] flex flex-col border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-4">
                    <div className="h-16 w-16 flex-shrink-0 relative bg-white rounded-xl p-2 shadow-sm">
                        <Image
                            alt={attributes.title || "Product Logo"}
                            width={64}
                            height={64}
                            className="object-contain w-full h-full"
                            src={`${STRAPI_URL}${logoUrl}`}
                        />
                    </div>
                    <h3 className="text-xl font-black truncate">{attributes.title}</h3>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground font-medium leading-relaxed line-clamp-6">
                    {attributes.Description}
                </p>
            </CardContent>
        </Card>
    )
}