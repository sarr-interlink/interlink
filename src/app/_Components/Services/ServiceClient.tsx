"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconTypeData, IconTypeDataAttribute, ServiceType, ServiceTypeAttribute } from "@/src/app/_lib/types/ServiceType";
import ElectricBorder from "@/components/ElectricBorder"
import { TypewriterEffectSmooth } from "@/src/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/src/components/ui/text-generate-effect";
import { StarsBackground } from "@/src/components/animate-ui/components/backgrounds/stars";

export function ServiceClient({services}: {services:{data: ServiceType[]}}) {
    const description = "Nous proposons des solutions innovantes en e-gouvernance, e-santé, développement informatique, messagerie, géolocalisation et cybersécurité."
//  const services: {data: ServiceType[]} = await getServices();

  return (
    <StarsBackground>

    <div id="services" className="py-16">
        <div className="flex flex-row justify-center">
          <TypewriterEffectSmooth className="services-title text-6xl text-center font-extrabold mb-3 text-white" words={[{text: "Services"}]} />
        </div>
        
        <TextGenerateEffect 
        className="text-center font-bold text-gray-300 w-3xl mx-auto"
        words={description}/>
        
            
        <div  className="services-grid mt-8 mx-auto w-full flex md:flex-wrap flex-col items-center justify-center md:flex-row gap-x-8 gap-y-14">
          {services &&
            services.data &&
            services.data.length > 0 &&
            services.data.map((service: ServiceType) => {
              const attributes: ServiceTypeAttribute = service.attributes || {} as ServiceTypeAttribute;
              const iconData: IconTypeData = attributes.icon?.data || {} as IconTypeData;
              const iconAttributes: IconTypeDataAttribute = iconData.attributes || {} as IconTypeDataAttribute;
              console.log(attributes.iconClass);
              
              if (attributes.title !== "Slogan") {
                return (
                        <ServiceCard key={service.id} service={service} attributes={attributes} />
                    
                );
              }
            })}
        </div>
      </div>
    </StarsBackground>
  );
}

const ServiceCard = ({service, attributes}: {service: ServiceType, attributes: ServiceTypeAttribute}) => {
  const title = attributes.title || "No Title"
  const body = attributes.description || "No Description"
    return (
    // <FireworksBackground>
        <ElectricBorder
        color="red"
        speed={2}
        chaos={0.12}
        className={"border-2"}
        style={{  }}
        >
            <Card className="service-card w-70 h-70 md:w-120 md:h-70 ">
            
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-x-6">
                
                <i className={`${attributes.iconClass} service-icon text-5xl text-center text-yellow-600 bg-blue-950 p-3 rounded-xl mt-2`}></i>      
                {/* <h4 className="lg:text-lg md:text-xl font-semibold text-blue-700"> */}
                    <TypewriterEffectSmooth className="text-sm" words={[{text: attributes.title || "No Title",
                      className: "text-2xl font-bold"}]} />
                {/* </h4> */}
                </CardTitle>
            </CardHeader> 
            
            <CardContent>
                <p className="text-xl font-bold">
                {attributes.description || "No Description"}
                </p>
            </CardContent>
            
            </Card>

        </ElectricBorder>

    // </FireworksBackground>
  )
}

