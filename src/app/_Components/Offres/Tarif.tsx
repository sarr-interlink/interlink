import Image from "next/image"
import Link from "next/link"
import { TarificationType } from "../../_lib/types/TarificationTYpe"
import { Button } from "@/components/ui/button"
import { LucideArrowRight } from "lucide-react"

export const Tarif = ({
    tarificationData, pathImg
} : {
    tarificationData: {data: TarificationType},
    pathImg: string }) => {
    return (
        <div className="flex flex-row items-center justify-center px-64 py-16 bg-gray-200">
            <div className="mr-4">
              <h1 className="text-5xl font-bold font-serif mb-4">
                {tarificationData.data.attributes.title}
              </h1>

              <hr className="my-4 border-t border-gray-300" />

              <p className="text-lg mb-4">
                {tarificationData.data.attributes.description}
                <br />
                adaptée à vos exigences
              </p>

               <div className="flex flex-row items-center gap-x-4">
                {/* Button */}
                <Button asChild className="p-6 text-xl font-serif font-bold bg-blue-950">
                    <Link
                    href="/contact">
                    {tarificationData.data.attributes.actionLabel}
                    </Link>
                </Button>

                <Link
                  href="">
                    <LucideArrowRight size={44} className="bg-blue-950 text-white rounded-full"/>
                  {/* <i className="lni lni-arrow-right"></i> */}
                </Link>
              </div>

              <p className="mt-6 text-left text-gray-700 text-xl font-medium">
                {tarificationData.data.attributes.summary}
              </p>

            </div>


            {/* <div className="lg:w-[50%] flex justify-center lg:justify-end"> */}
              <Image
                src={pathImg}
                width={720}
                height={100}
                alt="Tarification"
                className="rounded-lg shadow-lg"
              />
            {/* </div> */}
        </div>


            
          
    )
}