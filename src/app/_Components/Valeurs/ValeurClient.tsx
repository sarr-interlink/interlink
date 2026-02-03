"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ValueAttributeType, ValueType } from "@/src/app/_lib/types/ValuesType";
import { BackgroundGradient } from "@/src/components/ui/background-gradient";

export function ValuesClient({values}: {values: {data: ValueType[]}}) {

  
  return (
    <div className="relative overflow-hidden py-4 pb-6 bg-gray-100">
       

        <div className="relative z-10">
          
          <h1 className="text-center text-6xl font-extrabold">Valeurs</h1>
          <h3 className="text-center text-3xl font-black mt-3">Pourquoi nous choisir</h3>
          
          <div className="mt-10 flex flex-row items-center justify-center flex-wrap gap-x-6 gap-y-10">
            {values &&
                values.data &&
                values.data.length > 0 &&
                values.data.map((value: ValueType) => {
                  const attributes: ValueAttributeType = value.attributes || {} as ValueAttributeType;
                  return (
                    <ValueCard key={attributes.createdAt} attributes={attributes}/>
                  )
                })
              } 
          </div>

        </div>
    </div>
  );
}


const ValueCard = ({attributes}: {attributes: ValueAttributeType}) => {
  
  return (
    <BackgroundGradient>

      <Card className="w-120 h-70 bg-neutral-800 text-white">
        
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-5">
            <i className={`${attributes.iconClass} text-4xl bg-blue-950 text-yellow-500 rounded-md p-3`}></i>
            {/* <TypewriterEffectSmooth words={[{text: title}]} /> */}
            <h4 className="">
              {attributes.title || "No Title"}
            </h4>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-body-color dark:text-dark-6 font-bold text-xl">
            {attributes.description || "No Description"}
          </p>
        </CardContent>
      </Card>
    </BackgroundGradient>
  )
}

