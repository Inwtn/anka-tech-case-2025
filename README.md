# anka-tech-case-2025

# 💼 Anka Tech - Case Técnico 2025.1

Projeto fullstack desenvolvido como parte do processo seletivo da Anka Tech.

Backend:
Fastify + Prisma

Banco MySQL com Docker

API REST /clientes (GET, POST)

API REST /ativos (GET fixa)

CORS configurado corretamente

💻 Frontend:
Next.js App Router

React Query para dados dinâmicos

Formulário validado com Zod + React Hook Form

Tailwind CSS + ShadCN UI

Responsivo e limpo

---

## 🛠️ Tecnologias Utilizadas

### 🔙 Backend:

- [Fastify](https://www.fastify.io/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL via Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

### 💻 Frontend:

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Zod + React Hook Form](https://react-hook-form.com/)

---

## ⚙️ Como rodar o projeto localmente

### 🔧 Pré-requisitos:

- Node.js
- Docker + Docker Compose

### ▶️ Iniciando o Backend

```bash
# Vá para a pasta do backend
cd backend

# Instale as dependências
npm install

# Suba o banco de dados
docker compose up -d

# Execute a migração do Prisma
npx prisma migrate dev --name init

# Inicie o servidor
npm run dev

# A API estará rodando em: http://localhost:3001

# Vá para a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor
npm run dev

# A aplicação estará rodando em: http://localhost:3000


🧪 Funcionalidades
✅ Clientes (/clientes)
Listagem de clientes

Cadastro com validação (nome, e-mail e status)

Integração com backend em tempo real

✅ Ativos (/ativos)
Listagem fixa de ativos financeiros vindos da API

Exibição com layout limpo e responsivo
```
