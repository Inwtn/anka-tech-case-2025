"use client";

import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Cliente = {
  id: number;
  nome: string;
  email: string;
  status: boolean;
};

// schema zod
const clienteSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  status: z.boolean(),
});

type FormData = z.infer<typeof clienteSchema>;

export default function ClientesPage() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(clienteSchema),
  });

  const { data: clientes, isLoading } = useQuery<Cliente[]>({
    queryKey: ["clientes"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/clientes");
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      await axios.post("http://localhost:3001/clientes", data);
    },
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
    },
  });

  const onSubmit = (data: FormData) => mutation.mutate(data);

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-8">
        <div>
          <Input placeholder="Nome" {...register("nome")} />
          {errors.nome && (
            <p className="text-red-500 text-sm">{errors.nome.message}</p>
          )}
        </div>

        <div>
          <Input placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium flex items-center gap-2">
            <input type="checkbox" {...register("status")} />
            Ativo
          </label>
        </div>
        <h1 className="text-3xl text-green-600">Teste Tailwind</h1>

        <Button type="submit">Cadastrar</Button>
      </form>

      <ul className="space-y-2">
        {isLoading && <p>Carregando...</p>}
        {clientes?.map((cliente) => (
          <li key={cliente.id} className="p-4 border rounded shadow">
            <strong>{cliente.nome}</strong> — {cliente.email} (
            {cliente.status ? "Ativo" : "Inativo"})
          </li>
        ))}
      </ul>
    </main>
  );
}
