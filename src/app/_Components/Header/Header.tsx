import { DesktopNavigation } from "./DesktopNav";
import { MobileNavigation } from "./MobileNav";
import Image from "next/image";
import newlogoInterlink from "@/public/4.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavbarDemo } from "./NewNav";

export function Header() {
  return (
    <div>
      <NavbarDemo />
    </div>
    // <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/10 supports-backdrop-filter:bg-white/5 border-b border-white/20 transition-all duration-300">
    //     <div className="container mx-auto flex h-15 items-center justify-between px-4 md:px-6">
    //         <div className="flex items-center gap-6">
    //             <Link href="/" className="flex items-center space-x-2">
    //                 <Image
    //                     alt="Interlink Logo"
    //                     width={220}
    //                     height={60}
    //                     src={newlogoInterlink}
    //                     className="transition-opacity hover:opacity-"
    //                     priority
    //                 />
    //             </Link>
    //             <nav className="hidden md:flex">
    //                 <DesktopNavigation />

    //             </nav>
    //         </div>
    // {/* <div className="flex items-center gap-4">
    //     <MobileNavigation />
    //     <Button asChild className="hidden lg:flex border border-blue-500/30 bg-blue-500/10  text-[#0d4c92]  hover:bg-[#0d4c92]  font-bold rounded-full px-6">
    //         <Link href="#contact">Contact</Link>
    //     </Button>
    // </div> */}
    //     </div>
    // </header>
  );
}
