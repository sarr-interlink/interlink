"use client";
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, Autoplay} from 'swiper/modules';
import AuroraShader  from '@/src/components/lightswind/aurora-shader'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';





import { getProducts } from "@/src/app/_lib/data-services";
import Image from "next/image";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { ProductAttributeType, ProductType } from "@/src/app/_lib/types/ProductType";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spotlight } from '@/src/components/ui/spotlight-new';

export function ProductsDiv() {
  const [members, setMembers] = useState<{data: ProductType[]}>({data: []});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchMembers() {
      try {
        const data: {data: ProductType[]} = await getProducts();
        setMembers(data);
      } catch (err) {
        console.error("Error fetching members:", err);
        setError("Failed to load members.");
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

 

  const productData = Array.isArray(members.data) ? members.data : [];

  //swiper



  return (
    <div className="pt-64 pb-10 px-32 bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden relative">
      <Spotlight />
      <div className='relative z-10'>
        <h1 className="text-center text-4xl font-extrabold text-white mb-5">Produits</h1>
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  type: 'progressbar'
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="m-8 w-full"
                // pagination={{
                //     type: 'progressbar',
                // }}
                // navigation={true}
                // modules={[Pagination, Navigation]}
                >
                {productData.map((product: ProductType) => {
                    return (
                        <SwiperSlide className='px-[35%] py-16' key={product.id}>
                            <CarouselCard key={product.id} product={product}/>
                        </SwiperSlide>
                    )
                })}
                </Swiper>        

      </div>
    </div>
  );
}

const CarouselCard = ({product}: {product: ProductType}) => {
    const attributes: ProductAttributeType = product.attributes || {} as ProductAttributeType;
    const logoUrl = attributes.logo?.data?.attributes?.url || "";
    return (
        <Card className="w-70 h-70 md:w-120 md:h-70 bg-blue-950 text-white">
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-x-6">
                    <Image
                    alt={attributes.title || "Product Image"}
                    // loading="lazy"
                    // fill
                    width="80"
                    height="100"
                    decoding="async"
                    src={`${STRAPI_URL}${logoUrl}`}
                    />
                    <h1 className="text-3xl font-extrabold">{attributes.title}</h1>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg font-medium line-clamp-4">
                    {attributes.Description}
                </p>
            </CardContent>
        </Card>
    )
}