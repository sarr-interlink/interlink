import {Services} from "../_Components/Services/Service"
import { Methodologie } from "../_Components/Services/Methodologie"
import { TechnologieClient } from "../_Components/Services/TechnologieClient"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section for Services */}
            <section className="relative pt-32 pb-12  overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Nos <span className="text-primary italic">Expertises</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
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