import Fastify from "fastify";
import cors from "@fastify/cors";
import { clienteRoutes } from "./routes/cliente";

async function bootstrap() {
  const app = Fastify();

  // Habilita CORS
  await app.register(cors, {
    origin: "*",
  });

  // Rotas
  app.register(clienteRoutes, { prefix: "/clientes" });

  app.get("/ativos", async () => {
    return [
      { nome: "Bitcoin", valor: 120000 },
      { nome: "Ethereum", valor: 9000 },
      { nome: "Tesouro Direto", valor: 110 },
    ];
  });

  // Inicia servidor
  await app.listen({ port: 3001 });
  console.log("🚀 Servidor rodando em http://localhost:3001");
}

bootstrap(); // executa
