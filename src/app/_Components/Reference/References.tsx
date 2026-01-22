"use client";

import { useEffect, useState } from "react";
import {
  Autoplay,
  Navigation,
  Scrollbar,
  A11y,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { getReferences } from "@/src/app/_lib/data-services";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { ReferenceAttributeType, ReferenceType } from "../../_lib/types/ReferenceType";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <Image height={100} width={100} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDz7VeoLeo6kyPUJokKtq8ISE_j5MNreaXqKFKqXqLJ6TbPV0jJrhuZ3nPH_Ee47MRTfXx5usIrDcQFb2fFUlpQKmiByAmz6L5OMnU4cU&s'}/>}
];

export function ReferenceDiv() {
  const [references, setReferences] = useState<{data: ReferenceType[]}>({data:[]});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchReference() {
      try {
        const data: {data: ReferenceType[]} = await getReferences();
        setReferences(data);
      } catch (err) {
        console.error("Error fetching members:", err);
        setError("Failed to load members.");
      } finally {
        setLoading(false);
      }
    }

    fetchReference();
  }, []);

  const referencesData =
    references && Array.isArray(references.data) ? references.data : [];
  return (

    <>

    <h1 className="text-center text-5xl font-extrabold mt-8">
      Références
    </h1>
    <LogoH data={swipeData(referencesData)}/>
    </>


    // <div className="bg-blue-200 pt-2">

    //     <div>

    //     <h1 className="text-center text-5xl font-extrabold mt-8">
    //       Références
    //     </h1>

    //     <Swiper
    //       // install Swiper modules
    //       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    //       slidesPerView={5}
    //       spaceBetween={30}
    //       centeredSlides={true}
    //       autoplay={{
    //         delay: 2500,
    //         disableOnInteraction: false,
    //       }}
    //       className="m-8 w-full" 
    //     >
          
    //         {
    //           referencesData.length > 0 &&
    //             referencesData.map((reference: ReferenceType) => {
    //               const attributes: ReferenceAttributeType = reference.attributes || {};
    //               const logoUrl = attributes.logo?.data?.attributes?.url || "";

    //               return (
    //                 <SwiperSlide key={reference.id} className="p-32 flex flex-row items-center justify-center">
    //                     <ReferenceSlide attributes={attributes} logoUrl={logoUrl}/>
    //                 </SwiperSlide>
    //               );
    //             })
              
    //         }
    //     </Swiper>
    //     </div>
      
    //   </div>
  );
}

const LogoH = ({data}: {data: {node: React.ReactNode}[]}) => {
  return (
     <div 
     className="py-32 relative overflow-hidden"
     >
      {/* Basic horizontal loop */}
      <LogoLoop
        className="h-64 flex flex-col justify-center"
        logos={data == undefined ? techLogos : data}
        speed={40}
        direction="left"
        logoHeight={130}
        gap={85}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      </div>
  )
}


const swipeData = (referencesData: ReferenceType[]) => {
  const data = referencesData.map((reference: ReferenceType) => {
                const attributes: ReferenceAttributeType = reference.attributes || {};
                const logoUrl = attributes.logo?.data?.attributes?.url || "";
                const ImageComp = 
                            <Image
                            width={100} // Specify the width of the image (used as a ratio)
                            height={10}
                            className="client-logo w-full h-auto"
                            src={`${STRAPI_URL}${logoUrl}`}
                            alt={attributes.Name || "Client logo"}
                            />
                        
                return {node: ImageComp}

  })
  console.log(data);
  
  return data
}

const ReferenceSlide = ({attributes, logoUrl}: {attributes: ReferenceAttributeType, logoUrl: string}) => {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <Image
                width={100} // Specify the width of the image (used as a ratio)
                height={10}
                className="client-logo w-full h-auto"
                src={`${STRAPI_URL}${logoUrl}`}
                alt={attributes.Name || "Client logo"}
                />
            </HoverCardTrigger>
            <HoverCardContent>
                {attributes.Name || "Client logo"}
            </HoverCardContent>
        </HoverCard>
    )
}