import { formHandler } from "@/src/actions/server"
import { ButtonSubmit } from "./ButtonSubmit"

export const MessageFormContact = () => {
    return (
        <form action={formHandler} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold ml-1">Nom complet</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Jean Dupont"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold ml-1">Email professionnel</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="contact@entreprise.com"
                        required
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold ml-1">Sujet</label>
                <input 
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Comment pouvons-nous vous aider ?"
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold ml-1">Message</label>
                <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Dites-nous en plus sur votre projet..."
                    required
                ></textarea>
            </div>
            <ButtonSubmit />
        </form>
    )
}