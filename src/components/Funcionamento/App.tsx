import React from "react";
import { FaGlobe, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa"; // Importando ícones do React Icons
import Card from "@/components/CardFuncion/App";

const steps = [
  {
    icon: <FaGlobe size={40} />, // Ícone de formulário
    title: "1. Formulário",
    description: "Preencher o nosso formulário com as informações do seu site.",
  },
  {
    icon: <FaFileAlt size={40} />, // Ícone de pagamento
    title: "2. Pagamento",
    description:
      "Escolha o plano que mais se encaixa com você e faça o pagamento.",
  },
  {
    icon: <FaEnvelopeOpenText size={40} />, // Ícone de recebimento do site
    title: "3. Receba seu site",
    description:
      "Após o pagamento, você receberá um e-mail com o seu site pronto.",
  },
];

const Funcionamento: React.FC = () => {
  return (
    <section className="funcionamento py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Como Funciona?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Funcionamento;
