import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface DatasImportantesProps {
  datas: { data: string; descricao: string }[];
  onAdd: (novaData: { data: string; descricao: string }) => void;
}

const DatasImportantes: React.FC<DatasImportantesProps> = ({
  datas,
  onAdd,
}) => {
  const [novaData, setNovaData] = useState({ data: "", descricao: "" });

  const handleAdd = () => {
    if (novaData.data && novaData.descricao) {
      onAdd(novaData);
      setNovaData({ data: "", descricao: "" });
    }
  };

  return (
    <div className="mb-4">
      <Label>Adicione Datas Importantes</Label>
      <div className="flex gap-2 mb-2">
        <Input
          type="date"
          value={novaData.data}
          onChange={(e) => setNovaData({ ...novaData, data: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Descrição"
          value={novaData.descricao}
          onChange={(e) =>
            setNovaData({ ...novaData, descricao: e.target.value })
          }
        />
        <Button type="button" onClick={handleAdd}>
          Adicionar
        </Button>
      </div>
      <ul className="list-disc pl-5">
        {datas.map((item, index) => (
          <li key={index}>
            {item.data} - {item.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatasImportantes;
