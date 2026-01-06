import { DesktopNavigation } from "./DesktopNav";
import { MobileNavigation } from "./MobileNav";
import Image from "next/image";
import newlogoInterlink from "@/public/4.svg"


export function SHeader() {
    return (
        <div className="sticky z-50 top-0 left-0 right-0 ">
            <div className="h-8 w-full bg-black md:hidden "></div>
            <div className="bg-orange-300">
                <div className="flex-1 flex flex-row items-center sm:justify-between md:justify-start py-1">
        
                    <Image alt={""} width={290} height={100} src={newlogoInterlink} className="md:ml-5 md:mr-8" />
                    <DesktopNavigation />
                    <MobileNavigation />
                </div>
            </div>
        </div>
    )
}