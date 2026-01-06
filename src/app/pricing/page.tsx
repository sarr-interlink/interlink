import Image from "next/image";
import Link from "next/link";
import {
  getHebergement,
  getHebergementLocaleDesciption,
  getHebergementSaasDesciption,
  getHebergementsLocale,
  getHebergementsSaas,
  getTarification,
} from "@/src/app/_lib/data-services";

import { STRAPI_URL } from "@/src/app/_lib/utils";
import { Offres } from "../_Components/Offres/Offres";
import { HebergementAttributeImageType, HebergementType } from "../_lib/types/HebergementType";
import { HSaasDescriptionType } from "../_lib/types/HSaasDescription";
import { HSaas } from "../_lib/types/HSaas";
import { HebergementLocalDesciptionType } from "../_lib/types/HebergementLocalDesc";
import { HebergementLocalType } from "../_lib/types/HebergementLocal";
import { TarificationType } from "../_lib/types/TarificationTYpe";
import { OnPerm } from "../_Components/Offres/OnPerm";
import { Tarif } from "../_Components/Offres/Tarif";
import { OffreIntro } from "../_Components/Offres/Intro";


export default async function Pricing() {
    const hebergementData: {data: HebergementType} = await getHebergement();
    const hebergement: HebergementType = hebergementData?.data;
    const imageHebergement: HebergementAttributeImageType = hebergement.attributes.image;
    const imageHebergementUrl = imageHebergement?.data?.attributes?.url || "";
    const HebergementSaasDesciptionData: {data: HSaasDescriptionType} = await getHebergementSaasDesciption();
    const hebergementSaasData: {data: HSaas[]} = await getHebergementsSaas();
    const hebergementSaas = hebergementSaasData?.data;
    const HebergementLocaleDesciptionData: {data: HebergementLocalDesciptionType} = await getHebergementLocaleDesciption();
    const hebergementLocaleData: {data: HebergementLocalType[]} = await getHebergementsLocale();
    const hebergementLocale = hebergementLocaleData?.data;
    const tarificationData: {data: TarificationType} = await getTarification();
    const tarification = tarificationData?.data;
    const imagePricing = tarification.attributes.image;
    const imagePricingUrl = imagePricing?.data?.attributes?.url || "";


    const introPathImage = STRAPI_URL + imageHebergementUrl
    const tarifPathImg = STRAPI_URL + imagePricingUrl

    return (
        <div>
            {/* <h1 className="text-7xl text-center py-[25%]">Pricing Page In Construction</h1> */}
            <OffreIntro hebergement={hebergement} pathImg={introPathImage}/>
            <Offres />
            <OnPerm HebergementLocaleDesciptionData={HebergementLocaleDesciptionData} hebergementLocale={hebergementLocale}/>
            <Tarif tarificationData={tarificationData} pathImg={tarifPathImg} />
        </div>
    )
}