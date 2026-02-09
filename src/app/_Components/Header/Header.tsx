import { DesktopNavigation } from "./DesktopNav";
import { MobileNavigation } from "./MobileNav";
import Image from "next/image";
import newlogoInterlink from "@/public/4.svg"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image 
                            alt="Interlink Logo" 
                            width={220} 
                            height={60} 
                            src={newlogoInterlink} 
                            className="transition-opacity hover:opacity-80" 
                            priority
                        />
                    </Link>
                    <nav className="hidden md:flex">
                        <DesktopNavigation />
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <MobileNavigation />
                    <Button asChild className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6">
                        <Link href="#contact">Contact</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

