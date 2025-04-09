import React from "react";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaQrcode,
  FaCalendarAlt,
} from "react-icons/fa"; // Exemplos de ícones

interface FuncionalidadeProps {
  icon: React.ReactNode; // Ícone como componente React
  title: string;
  description: string;
}

const FuncionalidadeCard: React.FC<FuncionalidadeProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="funcionalidade-card bg-white shadow-md p-6 text-center rounded-lg">
      {/* Contêiner do ícone centralizado */}
      <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 text-primary rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const funcionalidades = [
  {
    icon: <FaMobileAlt size={40} />, // Ícone de design responsivo
    title: "Design Responsivo",
    description:
      "Seu site será adaptado para todos os dispositivos, garantindo uma ótima experiência.",
  },
  {
    icon: <FaPaintBrush size={40} />, // Ícone de personalização
    title: "Fácil Personalização",
    description:
      "Altere textos, imagens e cores com facilidade para atender às suas necessidades.",
  },
  {
    icon: <FaQrcode size={40} />, // Ícone de QR Code
    title: "QR Code Personalizado",
    description:
      "Receba um QR Code exclusivo para o seu site e surpreenda quem você ama.",
  },
  {
    icon: <FaCalendarAlt size={40} />, // Ícone de calendário
    title: "Linha do tempo e datas importantes",
    description:
      "Crie uma linha do tempo com as datas mais importantes da sua história.",
  },
];

const Funcionalidades: React.FC = () => {
  return (
    <section className="funcionalidades bg-gray-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Funcionalidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {funcionalidades.map((funcionalidade, index) => (
          <FuncionalidadeCard
            key={index}
            icon={funcionalidade.icon}
            title={funcionalidade.title}
            description={funcionalidade.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Funcionalidades;
