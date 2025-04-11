"use client";

import React, { useState } from "react";
import Formulario, { FormData } from "@/components/Form/App";
import PageQRCode from "@/app/PageQRCode/page";

export default function App(): React.ReactElement {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
  };

  const handleBackToForm = () => {
    setFormData(null);
  };

  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-center min-h-screen bg-gray-100 p-4 gap-8">
      {/* Formulário */}
      <div className="w-full md:w-1/2 max-w-xl">
        <Formulario onSubmit={handleFormSubmit} />
      </div>

      {/* Pré-visualização (QR Code ou Carta) */}
      <div className="w-full md:w-1/2 max-w-xl">
        <PageQRCode />
      </div>
    </section>
  );
}
