import Banner from "@/components/Banner/App";
import Frase from "@/components/Frase/App";
import Funcionamento from "@/components/Funcionamento/App";
import Funcionalidades from "@/components/Funcionalidades/App";
import Preco from "@/components/Precos/App";
import FraseButton from "@/components/FraseButton/App";
import Duvidas from "@/components/Duvidas/App";
import Footer from "@/components/Footer/App";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <Banner />
        </section>
        <section>
          <Frase />
        </section>
        <section>
          <Funcionamento />
        </section>
        <section>
          <Funcionalidades />
        </section>
        <section>
          <Preco />
        </section>
        <section>
          <FraseButton />
        </section>
        <section>
          <Duvidas />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
