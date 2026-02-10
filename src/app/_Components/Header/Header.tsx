import { DesktopNavigation } from "./DesktopNav";
import { MobileNavigation } from "./MobileNav";
import Image from "next/image";
import newlogoInterlink from "@/public/4.svg"

export function Header() {
    return (
        <div className="sticky z-50 top-0 w-full bg-[#fdfdfd]">
            <div className="h-8 w-full bg-black md:hidden "></div>
                <div className="flex-1 flex flex-row items-center sm:justify-between md:justify-start py-1">
                    <Image alt={""} width={290} height={100} src={newlogoInterlink} className="md:ml-5 md:mr-8" />
                    <DesktopNavigation />
                    <MobileNavigation />
                </div>
        </div>
    )
}

