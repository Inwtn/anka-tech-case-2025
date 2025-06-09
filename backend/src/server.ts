import Fastify from "fastify";
import { clienteRoutes } from "./routes/cliente";

const app = Fastify();

app.register(clienteRoutes, { prefix: "/clientes" });

// ✅ Rota GET /ativos direto aqui
app.get("/ativos", async () => {
  return [
    { nome: "Bitcoin", valor: 120000 },
    { nome: "Ethereum", valor: 9000 },
    { nome: "Tesouro Direto", valor: 110 },
  ];
});

app.listen({ port: 3001 }).then(() => {
  console.log("🚀 Servidor rodando em http://localhost:3001");
});
