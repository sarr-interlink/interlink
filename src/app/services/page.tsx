import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Services} from "../_Components/Services/Service"
import Image from "next/image"
import { techImages, ImageProp } from "../_Components/utils"
import { Methodologie } from "../_Components/Services/Methodologie"


export default function ServicesPage() {
    return (
        <div>
            {/* <h1 className="text-7xl text-center py-[25%]">Services Page In Construction</h1> */}
            <Services />
            <Methodologie />
            <Technologie />

        </div>
    )
}



const ImageCard = ({imageData:{imageUrl, imageAlt}}: {imageData: ImageProp}) => {
    return (
        <picture className="w-64 flex rounded-lg border-black border h-32  justify-center items-center">
            <Image 
            width={'100'}
            height={'100'}
            src={imageUrl}
            alt={imageAlt}></Image>
        </picture>
    )
}

function Technologie() {
    return (
        <Card className="mb-8 mx-54">
            <CardHeader>
                <CardTitle className="text-center text-5xl font-extrabold">Technologies maîtrisées</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-4 px-32">
                    {techImages.map((imageData: ImageProp) => {
                        return <ImageCard key={imageData.imageUrl} imageData={imageData}/>
                    })}
                </div>
            </CardContent>
        </Card>
    )
}