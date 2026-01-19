
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices } from "@/src/app/_lib/data-services";
import { IconTypeData, IconTypeDataAttribute, ServiceType, ServiceTypeAttribute } from "@/src/app/_lib/types/ServiceType";
import { ServiceClient } from "./ServiceClient";

export async function Services() {
  const services: {data: ServiceType[]} = await getServices();
  return (
    <ServiceClient services={services}/>
  )
} 