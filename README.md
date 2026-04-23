# 📌 Dashboard System (Frontend Challenge)

## 📖 Sobre o projeto

Este projeto é uma aplicação de dashboard desenvolvida em **React + TypeScript**, com foco em gerenciamento de menus e itens dinâmicos consumidos via API.

O sistema permite navegação entre menus, visualização de itens relacionados, além de funcionalidades como **exclusão (lixeira) e restauração de itens**.

---

## 🚀 Funcionalidades

- 🔐 Estrutura de autenticação (login/logout)
- 📂 Sidebar com menu dinâmico vindo de API
- 📑 Submenus com seleção ativa
- 📊 Listagem de itens baseada no submenu selecionado
- 🗑️ Funcionalidade de lixeira (excluir e restaurar itens)
- 🌐 Internacionalização (i18n)
- 🎨 Interface componentizada e reutilizável
- 🔄 Integração com API mock

---

## 🧱 Tecnologias utilizadas

- React
- TypeScript
- Vite
- Zustand (state management)
- Styled-components
- React i18next
- REST API (JSON Server / Mock API)

---

## 📡 API utilizada

### Menus
http://my-json-server.typicode.com/EnkiGroup/DesafioFrontEnd2026Jr/menus

### Items
http://my-json-server.typicode.com/EnkiGroup/DesafioFrontEnd2026Jr/items/{id}

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── sidebar/
│   ├── dropdown/
│   ├── button/
│   └── ...
├── pages/
│   ├── dashboard/
│   ├── login/
├── store/
├── config/
├── enum/
├── i18n/
└── App.tsx
```

---

## 🗑️ Lógica da lixeira

- Itens podem ser removidos da listagem principal
- Itens removidos vão para a lixeira
- Itens podem ser restaurados
- Estado gerenciado via Zustand

---

## 🌐 Internacionalização (i18n)

O projeto utiliza `react-i18next`.

### Exemplo de tradução:

```json
{
  "sidebar": {
    "logout": "Logout",
    "register": "Register"
  }
}
```

---

## ▶️ Como rodar o projeto

### Instalar dependências

```bash
npm install
```

### Rodar projeto

```bash
npm run dev
```

---
