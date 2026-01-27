"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HebergementLocalType } from "../../_lib/types/HebergementLocal";
import { HebergementLocalDesciptionType } from "../../_lib/types/HebergementLocalDesc";
import { STRAPI_URL } from "../../_lib/utils";
import Image from "next/image";
import LightPillar from "@/components/LightPillar";


export const OnPerm = (
    {HebergementLocaleDesciptionData, hebergementLocale}: 
    {
        HebergementLocaleDesciptionData: {data: HebergementLocalDesciptionType},
        hebergementLocale: HebergementLocalType[]
    }) => {
    return (
        <div className="relative">
            <LightPillar
            topColor="#0000ff"
            bottomColor="#ff0000"
            rotationSpeed={1.2}
            glowAmount={0.001}
            pillarWidth={7.2}
            pillarHeight={1.6}
            pillarRotation={266}
            />

            <div className="relative z-10 py-10">
                <h1 className="text-4xl font-semibold text-white text-center">
                {HebergementLocaleDesciptionData.data.attributes.title}
                </h1>
                <p className="my-4 text-xl font-medium text-white max-w-3xl mx-auto text-center">
                {HebergementLocaleDesciptionData.data.attributes.description}
                </p>
            
                <div className="flex flex-row items-center justify-center gap-10 px-64">
                    {hebergementLocale.map((hebergement: HebergementLocalType) => {
                        const image = hebergement.attributes.image;
                        const imageUrl = image?.data?.attributes?.url || "";
                        const pathImg = STRAPI_URL + imageUrl

                        return <OnPermCard key={hebergement.id} hebergement={hebergement} pathImg={pathImg}/>
                    })}
                </div>
            </div>
        </div>
        
    )
}


const OnPermCard = ({hebergement, pathImg}: {hebergement: HebergementLocalType, pathImg: string}) => {
    return (
        <Card className="w-xl h-110 shadow-zinc-600">
            <CardHeader className="flex flex-col items-center">
                <CardTitle>

                <Image
                src={pathImg}
                alt={hebergement.attributes.title}
                className=""
                width={200}
                height={200}
                />
                </CardTitle>

                <h2 className="text-xl font-extrabold">{hebergement.attributes.title}</h2>
            </CardHeader>

            <CardContent>
                <p className="text-lg font-medium">{hebergement.attributes.description}</p>
            </CardContent>
        </Card>
    )
}