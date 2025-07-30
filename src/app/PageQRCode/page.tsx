// pages/CartaAmada.tsx
"use client";
import React, { useEffect, useState } from "react";
import FotoCarrossel from "@/components/Carrosel/App";
import { Mensagem } from "@/components/CarrMensagem/App";
import { LinhaDoTempo } from "@/components/CarrLinhaTemp/App";
import { Card } from "@/components/ui/card";
import { TempoJuntos } from "@/components/CarrTempoJun/App";

export default function CartaAmada(): React.ReactElement {
  const [formData] = useState({
    nome1: "João",
    nome2: "Beatriz",
    historia: "Desde o dia que te conheci, minha vida mudou...",
    fotos: ["/eu (1).jpg", "/eu (2).jpg", "/eu (3).jpg", "/eu (4).jpg"],
    dataInicio: "2023-01-01",
    datasImportantes: [
      { data: "07-01-2023", descricao: "Primeiro encontro" },
      { data: "07-01-2023", descricao: "Primeiro 'eu te amo'" },
    ],
  });

  const [tempoJuntos, setTempoJuntos] = useState("");

  useEffect(() => {
    const calcularTempo = () => {
      const inicio = new Date(formData.dataInicio);
      const agora = new Date();
      const diff = agora.getTime() - inicio.getTime();

      const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const meses = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const dias = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );

      setTempoJuntos(`${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)`);
    };

    calcularTempo();
    const interval = setInterval(calcularTempo, 1000);
    return () => clearInterval(interval);
  }, [formData.dataInicio]);

  return (
    <div className="bg-[url('/paper-texture.jpg')] bg-cover bg-center min-h-screen p-4 flex items-center justify-center">
      <Card className="w-full max-w-md bg-white p-4 rounded-xl shadow-lg">
        <h1 className="text-2xl text-center font-bold">
          Para {formData.nome2}
        </h1>
        <TempoJuntos tempo={tempoJuntos} />
        <FotoCarrossel fotos={formData.fotos} />
        <Mensagem texto={formData.historia} />
        <LinhaDoTempo datas={formData.datasImportantes} />
        <p className="text-center mt-6 text-xs text-gray-400">
          Com amor, {formData.nome1} 💖
        </p>
      </Card>
    </div>
  );
}
