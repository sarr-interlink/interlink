"use client"

import { Button } from "@/components/ui/button"
import { LucideLoaderCircle, Send } from "lucide-react";
import { useFormStatus } from "react-dom";

export const ButtonSubmit =  () => {
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} className="w-full py-7 bg-[#185397d7] hover:bg-[#0d4c92] text-primary-foreground font-black text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 group" type="submit">
            {
                pending
                ?
                <LucideLoaderCircle className="w-4 h-4"/>
                :
                (<>
                <span>Envoyer le message</span>
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
                )

            }
        </Button>
    
    )
}