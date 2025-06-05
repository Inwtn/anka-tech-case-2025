import { FastifyInstance } from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function clienteRoutes(app: FastifyInstance) {
  // Listar todos os clientes
  app.get("/", async () => {
    const clientes = await prisma.cliente.findMany();
    return clientes;
  });

  // Criar novo cliente
  app.post("/", async (request, reply) => {
    const createClienteSchema = z.object({
      nome: z.string(),
      email: z.string().email(),
      status: z.boolean(),
    });

    const { nome, email, status } = createClienteSchema.parse(request.body);

    const novoCliente = await prisma.cliente.create({
      data: { nome, email, status },
    });

    return reply.status(201).send(novoCliente);
  });

  // Editar cliente existente
  app.put("/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const updateSchema = z.object({
      nome: z.string(),
      email: z.string().email(),
      status: z.boolean(),
    });

    const { id } = paramsSchema.parse(request.params);
    const { nome, email, status } = updateSchema.parse(request.body);

    const clienteAtualizado = await prisma.cliente.update({
      where: { id: Number(id) },
      data: { nome, email, status },
    });

    return reply.send(clienteAtualizado);
  });
}
