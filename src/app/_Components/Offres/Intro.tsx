import Image from "next/image"
import { HebergementType } from "../../_lib/types/HebergementType"

export const OffreIntro  = ({
    hebergement, pathImg
}: {
    hebergement: HebergementType
    pathImg: string
}
) => {
    return (
        <div className="py-12 font-serif flex flex-row items-center justify-center gap-x-20">
            <div className="">
              <h1 className="max-w-lg text-5xl font-black text-blue-950">
                {hebergement.attributes.title}
              </h1>
              <p className="pt-4 text-gray-700 font-bold text-xl">
                {hebergement.attributes.description}
              </p>
            </div>
            <Image
            alt="Image"
            width={520}
            height={100}
            decoding="async"
            className="inline-block"
            style={{
              color: "transparent",
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
            }}
            src={pathImg}/>
          </div>
    )
}