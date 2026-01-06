
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices } from "@/src/app/_lib/data-services";
import { IconTypeData, IconTypeDataAttribute, ServiceType, ServiceTypeAttribute } from "@/src/app/_lib/types/ServiceType";

async function Services() {
  const services: {data: ServiceType[]} = await getServices();
  return (
    <div className="py-16">
        <h1 className="text-6xl text-center font-extrabold mb-3 text-blue-950">
          Services
        </h1>
        <p className="text-xl text-center font-bold text-gray-700 w-2xl mx-auto ">
          Nous proposons des solutions innovantes en e-gouvernance,
          e-santé, développement informatique, messagerie, géolocalisation
          et cybersécurité.
        </p>
            
        <div className="mt-8 mx-auto w-full flex md:flex-wrap flex-col items-center justify-center md:flex-row gap-x-8 gap-y-14">
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
  );
}

const ServiceCard = ({service, attributes}: {service: ServiceType, attributes: ServiceTypeAttribute}) => {
  return (
    
    <Card className="w-70 h-70 md:w-120 md:h-70">
    
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-x-6">
          
          <i className={`${attributes.iconClass} text-5xl text-center text-yellow-600 bg-blue-950 p-3 rounded-xl mt-2`}></i>      
          <h4 className="lg:text-lg md:text-xl font-semibold text-blue-700">
            {attributes.title || "No Title"}
          </h4>
        </CardTitle>
      </CardHeader> 
      
      <CardContent>
        <p className="text-xl font-bold">
          {attributes.description || "No Description"}
        </p>
      </CardContent>
    
    </Card>
  )
}

export default Services;
