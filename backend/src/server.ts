import Fastify from "fastify";
import { clienteRoutes } from "./routes/cliente";

const app = Fastify();

app.register(clienteRoutes, { prefix: "/clientes" });

app.listen({ port: 3001 }).then(() => {
  console.log("🚀 Servidor rodando em http://localhost:3001");
});
