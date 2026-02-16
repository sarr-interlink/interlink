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

  useEffect(() => {
    async function fetchReference() {
      try {
        const data: {data: ReferenceType[]} = await getReferences();
        setReferences(data);
      } catch (err) {
        console.error("Error fetching references:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchReference();
  }, []);

  const referencesData = Array.isArray(references.data) ? references.data : [];
  
  return (
    <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
            <h1 className="text-center text4xl md:text-5xl font-black mb-4  text-4xl  bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block">Nos Références
            </h1>
            <LogoH data={swipeData(referencesData)}/>
        </div>
    </section>
  );
}

const LogoH = ({data}: {data: {node: React.ReactNode}[]}) => {
  return (
     <div className="relative overflow-hidden py-10">
      <LogoLoop
        className="h-32 flex flex-col justify-center"
        logos={data}
        speed={30}
        direction="left"
        logoHeight={80}
        gap={100}
        hoverSpeed={10}
        scaleOnHover
        fadeOut
        fadeOutColor="var(--background)"
        ariaLabel="Technology partners"
      />
      </div>
  )
}

const swipeData = (referencesData: ReferenceType[]) => {
  return referencesData.map((reference: ReferenceType) => {
    const attributes: ReferenceAttributeType = reference.attributes || {};
    const logoUrl = attributes.logo?.data?.attributes?.url || "";
    const ImageComp = (
        <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 px-4">
            <Image
                width={160}
                height={60}
                className="object-contain max-h-16 w-auto"
                src={`${STRAPI_URL}${logoUrl}`}
                alt={attributes.Name || "Client logo"}
            />
        </div>
    );
    return { node: ImageComp };
  });
}
