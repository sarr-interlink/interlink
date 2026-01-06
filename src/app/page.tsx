import { ArticleSection } from "./_Components/ArticleSection/ArticleDiv";
import { Testimonial } from "./_Components/ClientSection/ClientSection";
import { Intro } from "./_Components/Intro/Intro";
import { Map } from "./_Components/Map/Map";
import { MessageForm } from "./_Components/MessageForm/MessageForm";
import { Offres } from "./_Components/Offres/Offres";
import { ProductsDiv } from "./_Components/Products/Product";
import { ReferenceDiv } from "./_Components/Reference/References";
import Services from "./_Components/Services/Service";
import { Values } from "./_Components/Valeurs/Valeurs";


export default function Home() {
  return (
    <div>
      <Intro />
      <Services />
      <Offres />
      <ProductsDiv />
      <Values />
      <ReferenceDiv />
      <ArticleSection />
      <Testimonial />
      <MessageForm />
      <Map />
    </div>
  );
}
