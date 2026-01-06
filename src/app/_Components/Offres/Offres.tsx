import Image from "next/image";
import {
  getHebergementSaasDesciption,
  getHebergementsSaas,
} from "@/src/app/_lib/data-services";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { HSaasDescriptionType } from "../../_lib/types/HSaasDescription";
import { HSaas, HSaasAttributeImageType } from "../../_lib/types/HSaas";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function Offres() {

  const HebergementSaasDesciptionData: {data: HSaasDescriptionType} = await getHebergementSaasDesciption();
  const hebergementSaasData: {data: HSaas[]} = await getHebergementsSaas();
  const hebergementSaas: HSaas[] = hebergementSaasData?.data;
  
  return (
    <div className="py-6 bg-blue-100">
      <h1 className="text-center text-5xl font-extrabold text-blue-950">Nos Offres</h1>
      <h3 className="text-center text-3xl font-black mt-4">{HebergementSaasDesciptionData.data.attributes.title}</h3>
      <p className="font-medium text-xl mt-4 text-gray-600 max-w-3xl mx-auto">
        {HebergementSaasDesciptionData.data.attributes.description}
      </p>

      <div className="mt-16 flex flex-row items-center justify-center gap-6">

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
  
        
  );
}

const OffreCard = ({hebergement, pathImg}: {hebergement: HSaas, pathImg: string}) => {
  return (
    
    <Card className="max-w-lg">

      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center gap-y-5">
          <Image
          src={pathImg}
          alt={hebergement.attributes.title}
          className=""
          width={200}
          height={1000}
          />
          <h3 className="text-xl font-extrabold text-blue-950">
            {hebergement.attributes.title}
          </h3>
        </CardTitle>
      </CardHeader>

      <CardContent className="">
        <p className="text-gray-600 font-medium text-lg">
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
  )
}
