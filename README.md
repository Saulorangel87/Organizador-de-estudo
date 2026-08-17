# 📚 Organizador de Estudos

Painel simples para cadastrar matérias, acompanhar sessões de estudo e visualizar o progresso — desenvolvido com **React + Vite + JavaScript + CSS**, sem bibliotecas de UI, como projeto de prática de programação.

## 🎯 Sobre o projeto

Este projeto foi construído em etapas (V1 a V7), seguindo um planejamento próprio, com foco em aprender JavaScript e React na prática — tentando resolver cada funcionalidade antes de pedir ajuda, e só avançando de etapa quando o código anterior estava realmente compreendido.

## ✨ Funcionalidades

- Cadastro de matérias com meta de sessões de estudo
- Marcar sessões estudadas ("Estudei hoje"), com barra de progresso dinâmica
- Pesquisa e ordenação de matérias
- Exclusão de matérias e de todos os dados (com confirmação)
- Persistência dos dados no `localStorage`
- Modo escuro (dark mode) com variáveis CSS
- Layout responsivo
- Painel de estatísticas:
  - Total de matérias e de sessões estudadas
  - Matéria mais e menos estudada
  - Média de sessões
  - Progresso geral (% de matérias concluídas)
  - Sessões estudadas na semana atual (segunda a domingo)
- Pequenas animações (barra "pulsando" ao atingir 100%)

## 🛠️ Tecnologias

- React
- Vite
- JavaScript (ES6+)
- CSS Modules
- LocalStorage

## 📁 Estrutura do projeto

```text
src/
├── components/
│   ├── Header.jsx
│   ├── FormMateria.jsx
│   ├── Pesquisa.jsx
│   ├── ListaMateria.jsx
│   ├── CardMateria.jsx
│   └── BarraProgresso.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Como rodar o projeto

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar na pasta do projeto
cd organizador-de-estudos

# Instalar as dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

O projeto abrirá em `http://localhost:5173` (porta padrão do Vite).

## 🧠 Conceitos praticados

- `useState` e `useEffect`
- Renderização condicional e de listas
- Componentização e comunicação via props
- Manipulação de arrays e objetos (`map`, `filter`, `reduce`, `sort`, `flatMap`)
- Persistência de dados com `localStorage`
- Trabalho com datas (`Date`, `getDay`, `setDate`)
- CSS Modules e variáveis CSS (dark mode)
- Organização e refatoração de componentes

## 📌 Status

Projeto concluído conforme o planejamento original (V1 a V7).
