"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Ativo = {
  nome: string;
  valor: number;
};

export default function AtivosPage() {
  const { data: ativos, isLoading } = useQuery<Ativo[]>({
    queryKey: ["ativos"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/ativos");
      return response.data;
    },
  });

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ativos Financeiros</h1>

      {isLoading && <p>Carregando ativos...</p>}

      <ul className="space-y-2">
        {ativos?.map((ativo, index) => (
          <li key={index} className="p-4 border rounded shadow">
            <strong>{ativo.nome}</strong>: R$ {ativo.valor.toFixed(2)}
          </li>
        ))}
      </ul>
    </main>
  );
}
