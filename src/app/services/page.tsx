import {Services} from "../_Components/Services/Service"
import { Methodologie } from "../_Components/Services/Methodologie"
import { TechnologieClient } from "../_Components/Services/TechnologieClient"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section for Services */}
            <section className="relative pt-32 pb-12  overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_80%)]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1
  className="
    text-3xl md:text-6xl font-black mb-6
    bg-gradient-to-r from-[#3b82f6] to-[#0d4c92]
    bg-clip-text text-transparent inline-block
  "
>
  Nos Expertises
</h1>

                    <p className="text-xl text-[#2b619fce] max-w-2xl mx-auto font-medium">
                        Des solutions sur mesure pour propulser votre transformation digitale vers de nouveaux sommets.
                    </p>
                </div>
            </section>
            
            <Services />
            <Methodologie />
            <TechnologieClient />
        </main>
    )
}