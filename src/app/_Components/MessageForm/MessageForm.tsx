import { Button } from "@/components/ui/button";
import { formHandler } from "@/src/actions/server";
import { LucideMapPin, LucideMail, LucidePhone } from "lucide-react";
import { Form } from "./Form";


export function MessageForm() {
  return (
    <section className="pt-10">
        <div>
            <h1 className="text-center text-4xl font-black">Laisser Un Message</h1>
        </div>

        <div className="flex flex-row justify-center gap-x-10 px-50 py-14">
          <div className="">
              <p className="text-2xl font-bold">Notre personnel vous rappellera et répondra à vos questions.</p>
              <Form />
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
