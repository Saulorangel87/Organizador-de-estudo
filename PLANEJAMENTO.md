# 📚 Organizador de Estudos

Projeto pequeno desenvolvido com **React + Vite + JavaScript + CSS**, com foco principal em praticar JavaScript e React sem depender da criação automática de código por IA.

## 🎯 Objetivo do projeto

Criar um painel simples para cadastrar matérias, acompanhar sessões de estudo e visualizar o progresso.

O projeto será desenvolvido em etapas. Cada versão deve ser concluída e testada antes de avançar para a próxima.

---

# 🛠️ Tecnologias

- React
- Vite
- JavaScript
- CSS
- LocalStorage (a partir da V4)

### Dependências iniciais

Não instalar bibliotecas adicionais sem necessidade.

A ideia é aprender primeiro usando os recursos básicos do React e do JavaScript.

---

# 📌 Regras de aprendizado

Este projeto também será um exercício de programação.

### 1. Tentar antes de pedir código

Antes de pedir uma solução para a IA, tentar resolver sozinho.

### 2. IA como professora

A IA pode:

- explicar conceitos;
- explicar erros;
- indicar quais conceitos estudar;
- revisar código escrito por mim;
- sugerir exercícios;
- ajudar a encontrar bugs.

Evitar pedir:

> "Faça essa funcionalidade inteira para mim."

Preferir:

> "Eu tentei fazer assim. Onde estou errando?"

### 3. Não avançar sem entender

Uma versão só deve ser considerada concluída quando eu entender razoavelmente o código que escrevi.

### 4. Evitar dependências desnecessárias

O objetivo inicial não é criar o projeto mais sofisticado possível.

O objetivo é aprender.

---

# 🚀 V1 — Estrutura básica

## Objetivo

Criar a primeira versão funcional do organizador.

## Funcionalidades

- [ ] Criar a estrutura inicial do projeto com Vite
- [ ] Criar componente principal
- [ ] Criar formulário para cadastrar uma matéria
- [ ] Exibir matérias cadastradas
- [ ] Excluir matéria
- [ ] Criar layout básico com CSS

## Conceitos para praticar

### JavaScript

- `const`
- `let`
- funções
- arrays
- objetos
- `push`
- condições

### React

- componentes
- JSX
- `useState`
- eventos
- renderização de listas
- `key`
- props

---

# 🔎 V2 — Manipulação de dados

## Objetivo

Começar a trabalhar melhor com arrays e objetos.

## Funcionalidades

- [ ] Pesquisar matéria
- [ ] Filtrar matérias
- [ ] Ordenar matérias
- [ ] Contar quantidade de matérias
- [ ] Exibir quantidade de sessões estudadas
- [ ] Criar cálculo simples de progresso

## Conceitos para praticar

- `map()`
- `filter()`
- `find()`
- `findIndex()`
- `sort()`
- `reduce()`
- funções com parâmetros
- retorno de funções
- operadores ternários

---

# 📊 V3 — Progresso e interação

## Objetivo

Adicionar controle de sessões de estudo.

## Funcionalidades

- [ ] Botão "Estudei hoje"
- [ ] Incrementar sessões
- [ ] Calcular progresso
- [ ] Exibir barra de progresso
- [ ] Definir uma meta de sessões
- [ ] Exibir matérias concluídas

## Conceitos para praticar

- atualização de estado
- funções de atualização
- cálculos
- condições
- renderização condicional
- composição de componentes

---

# 💾 V4 — Persistência

## Objetivo

Fazer os dados continuarem disponíveis depois de fechar o navegador.

## Funcionalidades

- [ ] Salvar matérias no `localStorage`
- [ ] Recuperar matérias ao abrir o sistema
- [ ] Atualizar dados salvos
- [ ] Excluir dados do `localStorage`
- [ ] Criar tratamento para dados inexistentes

## Conceitos para praticar

- `localStorage`
- `JSON.stringify()`
- `JSON.parse()`
- `useEffect()`
- ciclo de vida do componente
- tratamento de dados

---

# 🎨 V5 — Melhorias de interface

## Objetivo

Melhorar a experiência visual sem transformar o projeto em um exercício de biblioteca de UI.

## Funcionalidades

- [ ] Responsividade
- [ ] Dark mode
- [ ] Melhorar cards
- [ ] Melhorar barra de progresso
- [ ] Estados de formulário
- [ ] Mensagens quando não existem matérias
- [ ] Mensagens de confirmação
- [ ] Pequenas animações

## Conceitos para praticar

- CSS
- classes condicionais
- estados de interface
- responsividade
- organização de componentes

---

# 📈 V6 — Estatísticas

## Objetivo

Usar os dados existentes para criar informações úteis.

## Funcionalidades

- [ ] Total de matérias
- [ ] Total de sessões
- [ ] Matéria mais estudada
- [ ] Matéria menos estudada
- [ ] Média de sessões
- [ ] Progresso geral
- [ ] Meta semanal

## Conceitos para praticar

- `reduce()`
- cálculos
- funções reutilizáveis
- derivação de dados
- organização de lógica

---

# 🧩 V7 — Organização do código

## Objetivo

Melhorar a arquitetura do frontend sem alterar o funcionamento.

## Possível estrutura

```text
src/
├── components/
│   ├── FormMateria.jsx
│   ├── ListaMaterias.jsx
│   ├── CardMateria.jsx
│   └── BarraProgresso.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

## Conceitos para praticar

- componentização
- props
- responsabilidades dos componentes
- reutilização
- organização de arquivos
- separação entre interface e lógica

---

# 🟦 V8 — Preparação para TypeScript

Esta versão não precisa necessariamente adicionar TypeScript ao projeto.

O objetivo é revisar o JavaScript e identificar onde tipos de dados seriam importantes.

## Revisar

- objetos
- arrays
- funções
- parâmetros
- retornos
- estados
- props
- estruturas de dados

Depois disso, o projeto poderá ser migrado para:

**React + TypeScript**

---

# 🧠 Conteúdos de JavaScript que quero dominar

Durante o desenvolvimento, acompanhar esta lista:

- [ ] Variáveis
- [ ] Tipos de dados
- [ ] Operadores
- [ ] `if / else`
- [ ] `switch`
- [ ] `for`
- [ ] `while`
- [ ] Funções
- [ ] Arrow functions
- [ ] Arrays
- [ ] Objetos
- [ ] `map`
- [ ] `filter`
- [ ] `find`
- [ ] `reduce`
- [ ] `sort`
- [ ] Destructuring
- [ ] Spread operator
- [ ] Rest operator
- [ ] Template literals
- [ ] Módulos
- [ ] JSON
- [ ] `localStorage`
- [ ] Promises
- [ ] `async / await`
- [ ] `fetch`

---

# ⚛️ Conteúdos de React que quero dominar

- [ ] Componentes
- [ ] JSX
- [ ] Props
- [ ] `useState`
- [ ] `useEffect`
- [ ] Eventos
- [ ] Formulários
- [ ] Renderização condicional
- [ ] Renderização de listas
- [ ] `key`
- [ ] Componentização
- [ ] Estado compartilhado
- [ ] Hooks
- [ ] Organização de componentes

---

# 🏁 Critério para considerar o projeto concluído

O projeto será considerado concluído quando eu conseguir:

1. Criar uma aplicação React do zero.
2. Criar componentes sem depender de código pronto.
3. Manipular arrays e objetos com JavaScript.
4. Trabalhar com estado no React.
5. Criar formulários.
6. Persistir dados no navegador.
7. Entender o código que escrevi.
8. Corrigir pequenos erros sozinho.
9. Saber pesquisar documentação quando necessário.
10. Conseguir explicar como as principais partes do projeto funcionam.

---

# 🚦 Próximo passo

## V1

Começar somente pela estrutura básica.

**Não avançar para V2 antes de concluir e entender a V1.**

