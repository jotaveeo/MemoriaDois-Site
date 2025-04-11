"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import DatasImportantes from "@/components/DatasImportantes/App";

interface FormularioProps {
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  nome1: string;
  nome2: string;
  historia: string;
  fotos: File[];
  dataInicio: string;
  horarioInicio: string;
  datasImportantes: { data: string; descricao: string }[];
}

const Formulario: React.FC<FormularioProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    nome1: "",
    nome2: "",
    historia: "",
    fotos: [],
    dataInicio: "",
    horarioInicio: "",
    datasImportantes: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const maxSizeMB = 10; // Tamanho máximo permitido por arquivo (em MB)
      const maxFiles = 5; // Número máximo de arquivos permitidos

      // Filtra arquivos que excedem o tamanho máximo
      const validFiles = files.filter(
        (file) => file.size <= maxSizeMB * 1024 * 1024
      );

      // Verifica se o número de arquivos excede o limite
      if (validFiles.length > maxFiles) {
        alert(`Você pode enviar no máximo ${maxFiles} fotos.`);
        setFormData({ ...formData, fotos: validFiles.slice(0, maxFiles) });
      } else {
        if (validFiles.length < files.length) {
          alert(
            "Algumas imagens foram ignoradas por excederem o tamanho máximo de 10MB."
          );
        }
        setFormData({ ...formData, fotos: validFiles });
      }
    }
  };

  const handleAddDataImportante = (novaData: {
    data: string;
    descricao: string;
  }) => {
    setFormData({
      ...formData,
      datasImportantes: [...formData.datasImportantes, novaData],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="formulario bg-gray-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        Preencha o Formulário
      </h2>
      <div className="flex flex-col gap-10">
        {/* Formulário */}
        <Card className="max-w-lg bg-white p-6 rounded-lg shadow-md flex-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="nome1">Seu nome</Label>
              <Input
                placeholder="Digite seu nome"
                type="text"
                id="nome1"
                name="nome1"
                value={formData.nome1}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="nome2">Nome da pessoa amada</Label>
              <Input
                placeholder="Digite o nome da pessoa amada"
                type="text"
                id="nome2"
                name="nome2"
                value={formData.nome2}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="dataInicio">
                Data de início do relacionamento
              </Label>
              <Input
                type="date"
                id="dataInicio"
                name="dataInicio"
                value={formData.dataInicio}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="horarioInicio">
                Horário do início do relacionamento
              </Label>
              <Input
                type="time"
                id="horarioInicio"
                name="horarioInicio"
                value={formData.horarioInicio}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="historia">
                Deixe uma mensagem ou conte sua história
              </Label>
              <Textarea
                id="historia"
                name="historia"
                value={formData.historia}
                onChange={handleInputChange}
                rows={5}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="fotos">Envie Fotos</Label>
              <Input
                type="file"
                id="fotos"
                name="fotos"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <DatasImportantes
              datas={formData.datasImportantes}
              onAdd={handleAddDataImportante}
            />
            <Button type="submit">Enviar</Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Formulario;
