"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";

export const ButtonSubmit =  () => {
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} className="py-7 px-9 bg-blue-950 font-black text-lg font-serif" type="submit">
          Envoyer
        </Button>
    )
}