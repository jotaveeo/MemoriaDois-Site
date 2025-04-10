import React from "react";

interface CardProps {
  icon: React.ReactNode; // Ícone como componente React
  title: string;
  description: string;
}

const CardFuncion: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="funcionalidade-card bg-white shadow-md p-6 text-center rounded-lg">
      {/* Contêiner do ícone centralizado */}
      <div className="flex items-center justify-center w-16 h-16 mx-auto text-primary bg-gray-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CardFuncion;
