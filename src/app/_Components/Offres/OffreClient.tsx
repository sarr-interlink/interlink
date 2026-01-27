"use client"
import Image from "next/image";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { HSaasDescriptionType } from "../../_lib/types/HSaasDescription";
import { HSaas, HSaasAttributeImageType } from "../../_lib/types/HSaas";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundBeams } from "@/src/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/src/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/src/components/ui/text-generate-effect";
import { BackgroundGradient } from "@/src/components/ui/background-gradient";

export function OffreClient({
    HebergementSaasDesciptionData,  
    hebergementSaas } : 
    {
    HebergementSaasDesciptionData: {data: HSaasDescriptionType},
    hebergementSaas: HSaas[]
    }) {

//   const HebergementSaasDesciptionData: {data: HSaasDescriptionType} = await getHebergementSaasDesciption();
//   const hebergementSaasData: {data: HSaas[]} = await getHebergementsSaas();
//   const hebergementSaas: HSaas[] = hebergementSaasData?.data;
  const offresText = "Nos Offres"
  const modeH = HebergementSaasDesciptionData.data.attributes.title
  const modeHbDescription = HebergementSaasDesciptionData.data.attributes.description
  return (
    <div className="py-16 bg-neutral-950 relative">
        <div className="relative z-10">
            <div className="flex flex-row justify-center">
              <TypewriterEffectSmooth cursorClassName="hidden" className="text-center text-5xl font-extrabold text-orange-300" words={[{text: offresText, 
                className: ""}]}/>
            </div>
            <div className="flex flex-row justify-center">
              <TypewriterEffectSmooth cursorClassName="hidden" className="text-center font-black mt-4 text-orange-200" words={[{text: modeH, 
                className: ""}]}/>
            </div>
            <TextGenerateEffect className="font-medium text-lg mt-4 text-orange-100 max-w-5xl mx-auto"
            words={modeHbDescription}
            />


            <div className="mt-16 flex flex-row items-center justify-center flex-wrap gap-6">

                {
                hebergementSaas.map((hebergement: HSaas) => {
                    const image: HSaasAttributeImageType = hebergement.attributes.image;
                    const imageUrl: string = image?.data?.attributes?.url || "";
                    const pathImg: string = STRAPI_URL + imageUrl
                    return (
                    <OffreCard key={hebergement.id} hebergement={hebergement} pathImg={pathImg}/>
                    )
                })
                }

            </div>
        </div>
        <BackgroundBeams />

    </div>
  
        
  );
}

const OffreCard = ({hebergement, pathImg}: {hebergement: HSaas, pathImg: string}) => {
  return (
    

    <BackgroundGradient>

    <Card className="max-w-lg bg-transparent">

      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center gap-y-5">
          <Image
          src={pathImg}
          alt={hebergement.attributes.title}
          className=""
          width={200}
          height={1000}
          />
          <h3 className="text-2xl font-extrabold text-white">
            {hebergement.attributes.title}
          </h3>
        </CardTitle>
      </CardHeader>

      <CardContent className="">
        <p className="text-orange-300 font-bold text-xl text-center">
          {hebergement.attributes.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-row justify-center mx-4 mb-6">
        <Button asChild className="w-full p-6 font-extrabold text-lg bg-blue-950">
          <Link href="#">
            {hebergement.attributes.actionLabel}
          </Link>
          </Button>
      </CardFooter>

    </Card>
    </BackgroundGradient>
    
  )
}
