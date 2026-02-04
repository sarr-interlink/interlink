import Image from "next/image";
import { getProducts } from "@/src/app/_lib/data-services";
import { STRAPI_URL } from "@/src/app/_lib/utils";
import { ProductAttributeType, ProductType } from "../_lib/types/ProductType";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { LucideArrowRight } from 'lucide-react';
import Link from "next/link";


export default async function Products() {

  const productsData: {data: ProductType[]} = await getProducts();

  const products = productsData?.data;

  return (
    <div className="bg-[#f7fdff]">
        <h1 className="p-32 text-center text-5xl">
            Optimisez votre Performance avec notre 
            <span className="relative inline-block">
                <span className="absolute inset-0 bg-blue-950 h-20  -skew-x-12 skew-y-2 rounded-md"></span>
                    <span className="relative text-white px-3 py-1">
                        expertise sectorielle
                    </span>
            </span>
            
        </h1>

        <div className="mb-10 px-24 flex flex-row gap-8 items-center justify-center flex-wrap">
          {
            products.length > 0 &&
              products.map((product: ProductType) => {
                const attributes: ProductAttributeType = product.attributes || {} as ProductAttributeType;
                const title = attributes.title;
                const description = attributes.Description;
                const logo = attributes.logo;
                const logoUrl = logo.data.attributes.url || "";
                const pathImg = STRAPI_URL + logoUrl
                return (
                  <ProductCard key={product.id} productId={product.id} title={title} description={description} pathImg={pathImg}/>
                );
              })
          }
        </div>

    </div>
  );
}


const ProductCard = ({title, description, productId,pathImg}: {title: string, description: string, productId: number,pathImg: string}) => {

    return (
        <Card className="w-lg bg-blue-200">
            <CardHeader>
                    <Image
                    className=""
                    src={pathImg}
                    alt={"lazy"}
                    width={120}
                    height={150} />

                    <h1 className="text-xl font-extrabold text-blue-950">
                        {title}
                    </h1>

            </CardHeader>

            <CardContent>
                <p className="line-clamp-4 text-lg font-medium">
                    {description && description }
                </p>
            </CardContent>
            
            <CardFooter>
                <Link href={`/products/${productId}`} className="flex flex-row gap-x-3">
                    <LucideArrowRight className="bg-black text-white rounded-full"/>
                    Plus d&apos; infos
                </Link>
            </CardFooter>
        </Card>
    )
}