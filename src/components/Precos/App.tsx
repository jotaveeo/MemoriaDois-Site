import React from "react";

interface PrecoProps {
  title: string;
  price: string;
  features: string[];
  cta: string;
}

const PrecoCard: React.FC<PrecoProps> = ({ title, price, features, cta }) => {
  return (
    <div className="preco-card bg-white shadow-md p-6 text-center rounded-lg border">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-extrabold text-primary mb-4">{price}</p>
      <ul className="text-left mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 mb-2">
            • {feature}
          </li>
        ))}
      </ul>
      <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition">
        {cta}
      </button>
    </div>
  );
};

const pacotes = [
  {
    title: "Básico",
    price: "R$99/mês",
    features: [
      "1 página personalizada",
      "Suporte básico",
      "Hospedagem inclusa",
    ],
    cta: "Escolher Plano",
  },
  {
    title: "Intermediário",
    price: "R$199/mês",
    features: [
      "Até 5 páginas",
      "Suporte prioritário",
      "Hospedagem inclusa",
      "SEO básico",
    ],
    cta: "Escolher Plano",
  },
  {
    title: "Premium",
    price: "R$299/mês",
    features: [
      "Páginas ilimitadas",
      "Suporte dedicado",
      "Hospedagem inclusa",
      "SEO avançado",
      "QR Code personalizado",
    ],
    cta: "Escolher Plano",
  },
];

const Precos: React.FC = () => {
  return (
    <section className="precos bg-gray-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Nossos Planos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pacotes.map((pacote, index) => (
          <PrecoCard
            key={index}
            title={pacote.title}
            price={pacote.price}
            features={pacote.features}
            cta={pacote.cta}
          />
        ))}
      </div>
    </section>
  );
};

export default Precos;