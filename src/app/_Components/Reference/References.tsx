"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getReferences } from "@/src/app/_lib/data-services";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { ReferenceAttributeType, ReferenceType } from "../../_lib/types/ReferenceType";
import LogoLoop from "@/components/LogoLoop";

export function ReferenceDiv() {
  const [references, setReferences] = useState<{data: ReferenceType[]}>({data:[]});
  const [, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string>("");

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

    <div className="">
      <h1 className="text-center text-5xl font-extrabold pt-8">
        Références
      </h1>
      <LogoH data={swipeData(referencesData)}/>
    </div>

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
        logos={data}
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
