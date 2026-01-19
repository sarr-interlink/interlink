import {
  getHebergementSaasDesciption,
  getHebergementsSaas,
} from "@/src/app/_lib/data-services";
import { HSaasDescriptionType } from "../../_lib/types/HSaasDescription";
import { HSaas } from "../../_lib/types/HSaas";

import { OffreClient } from "./OffreClient";

export async function Offres() {

  const HebergementSaasDesciptionData: {data: HSaasDescriptionType} = await getHebergementSaasDesciption();
  const hebergementSaasData: {data: HSaas[]} = await getHebergementsSaas();
  const hebergementSaas: HSaas[] = hebergementSaasData?.data;
  
  return (
    <OffreClient 
    HebergementSaasDesciptionData={HebergementSaasDesciptionData}
    hebergementSaas={hebergementSaas}
    />
  )
}