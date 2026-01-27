import { Button } from "@/components/ui/button";
import { LucideMapPin, LucideMail, LucidePhone } from "lucide-react";


export function MessageForm() {
  return (
    <section className="pt-10 ">
        <div>
            <h1 className="text-center text-4xl font-black">Laisser Un Message</h1>
        </div>

        <div className="flex flex-row justify-center gap-x-10 px-50 py-14">
          <div className="">
              <p className="text-2xl font-bold">Notre personnel vous rappellera et répondra à vos questions.</p>
              <form>
                <input type="text"
                        className="border-2 rounded-md w-85 p-2 my-5 mr-6"
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        required
                        data-error="Vailler saisir votre nom" />

                <input type="text"
                        placeholder="Email"
                        id="email"
                        className="border-2 rounded-md w-85 p-2"
                        name="email"
                        required
                        data-error="Vailler saisir votre email"/><br />

                <input  type="text"
                        placeholder="Sujet"
                        id="subject"
                        name="subject"
                        className="border-2 rounded-md w-176 p-2"
                        required
                        data-error="Veiller saisir le sujet de votre message" /><br />

                <textarea className="border-2 rounded-md w-176 my-5 p-2"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows={7}
                        data-error="Rédigez votre message !"
                        required></textarea> <br />

                <Button className="py-7 px-9 bg-blue-950 font-black text-lg font-serif" type="submit">
                  Envoyer
                </Button>


              </form>
          </div>

          <div className="flex flex-col gap-y-6">
              <h1 className="font-extrabold text-3xl text-center">CONTACTEZ-NOUS</h1>
              
              <div className="flex flex-row items-center gap-x-4">
                <LucideMapPin size={32} className="w-14 h-14 p-2 bg-blue-950 text-white rounded-full"/>
                <p className="text-2xl">
                    055 Ilot C Zone Château D’Eau Nouakchott – Mauritanie
                </p>
              </div>
              
              <div className="flex flex-row items-center gap-x-4">
                <LucideMail size={32} className="w-14 h-14 p-2 bg-blue-950 text-white rounded-full"/>
                <p className="text-2xl">
                  <a href="mailto:info@interlink.mr" className="block">
                    info@interlink.mr
                  </a>
                </p>
              </div>
              
              <div className="flex flex-row items-center gap-x-4">
                <LucidePhone size={32} className="w-14 h-14 p-2 bg-blue-950 text-white rounded-full"/>
                <p className="text-2xl">
                  <a href="#" className="block">
                    {" "}
                    + (222) 45 25 23 56
                  </a>
                  <a href="#" className="block">
                    + (222) 45 25 32 30
                  </a>
                </p>
              </div>

          </div>
        </div>
    </section>
  );
}
