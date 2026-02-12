import { formHandler } from "@/src/actions/server"
import { ButtonSubmit } from "./ButtonSubmit"

export const Form = () => {
    return (
        <form action={formHandler}>
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

                <ButtonSubmit />


              </form>
    )
}