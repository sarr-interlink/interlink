import Image from "next/image"
import newlogoInterlink from "@/public/assets/interlink-assets/images/4.svg"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { SquareMenu } from 'lucide-react';

export function MobileNavigation() {
    return (
        <div className="md:hidden w-full ml-20">
        <Drawer>
            <DrawerTrigger className="md:hidden">
                {/* Open */}
                <SquareMenu  size={45}/>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </div>
    )
}