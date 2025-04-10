"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Formulario, { FormData } from "@/components/Form/App";

export default function App(): React.ReactElement {
  const handleFormSubmit = (formData: FormData) => {
    console.log("Dados enviados:", formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <section>
      {/* Formulário */}
      <Formulario onSubmit={handleFormSubmit} />
    </section>
  );
}
