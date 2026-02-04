"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, Autoplay, FreeMode} from 'swiper/modules';
// Import Swiper styles
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
  const [, setError] = useState<string>("");

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
    <div className="pt-14 pb-10 px-32 bg-gray-100  overflow-hidden relative">
      
      <div className='relative z-10'>
        <h1 className="text-center text-5xl font-extrabold  mb-5">Produits</h1>
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  
                }}
                navigation={true}
                modules={[Autoplay, FreeMode, Pagination, Navigation]}
                className="m-8 w-full"
                // pagination={{
                //     type: 'progressbar',
                // }}
                // navigation={true}
                // modules={[Pagination, Navigation]}
                >
                {productData.map((product: ProductType) => {
                    return (
                        <SwiperSlide className='py-16 px-[3%]' key={product.id}>
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

          <Card className="py-8 w-120 h-100 bg-zinc-800 text-white">
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
                  <p className="text-lg font-medium line-clamp-7">
                      {attributes.Description}
                  </p>
              </CardContent>
          </Card>
    )
}