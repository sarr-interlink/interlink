import { getServices } from "@/src/app/_lib/data-services";
import { ServiceType } from "@/src/app/_lib/types/ServiceType";
import { ServiceClient } from "./ServiceClient";

export async function Services() {
  const services: {data: ServiceType[]} = await getServices();
  return (
    <ServiceClient services={services}/>
  )
} 