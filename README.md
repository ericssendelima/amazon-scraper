# 📦 Amazon Scraper

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/vite-2.9.9-brightgreen.svg)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/express-4.18.1-blue.svg)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/node.js-14.17.0-green.svg)](https://nodejs.org/)
[![GitHub stars](https://img.shields.io/github/stars/ericssendelima/amazon-scraper.svg?style=social&label=Star)](https://github.com/ericssendelima/amazon-scraper)

## 📝 Descrição
Este projeto é um script simples para coletar listagens de produtos da Amazon na primeira página de resultados de pesquisa para uma determinada palavra-chave.

## 📂 Estrutura de Arquivos e Pastas

```plaintext
amazon-scraper/
├── .gitignore
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── src/
│   │   ├── assets/
│   │   │   ├── styles.css
│   │   │   └── ...
│   │   ├── main.js
│   │   └── ...
├── README.md
└── ...
```

## 🚀 Configuração

1. **Clone o repositório:**
   ```bash
   git clone <URL-do-repositório>
   cd amazon-scraper
   ```

2. **Instale as dependências do servidor:**
   ```bash
   cd backend
   bun install
   cd ..
   ```

3. **Inicie o servidor:**
   ```bash
   bun run backend/server.js
   ```

4. **Instale as dependências do Vite para o frontend:**
   ```bash
   cd frontend
   npm install
   ```

5. **Inicie o servidor de desenvolvimento do Vite:**
   ```bash
   npm run dev
   ```

6. **Abra o navegador e acesse `http://localhost:5173` (ou a porta que o vite fornecer), para ver o aplicativo em ação.**

## 💡 Uso

1. Insira uma palavra-chave no campo de entrada.
2. Clique no botão "Coletar Dados".
3. Veja os resultados coletados na página.

## 📦 Dependências

### Backend
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [jsdom](https://github.com/jsdom/jsdom)
- [cors](https://github.com/expressjs/cors)
- [bun](https://bun.sh/)

### Frontend
- [Vite](https://vitejs.dev/)

## 🛠️ Tratamento de Erros
- O backend trata erros de requisição e problemas ao analisar a página da Amazon.
- O frontend exibe mensagens de erro amigáveis caso ocorra algum problema durante a requisição.

## 🏗️ Contribuição
Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request para contribuir.

## 👥 Autores
- **Yalê Ericssen** - *Desenvolvedor Principal* - [GitHub](https://github.com/ericssendelima)
