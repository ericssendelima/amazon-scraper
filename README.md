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
 ├── backend/
 │   ├── server.js
 │   ├── package.json
 │   └── ...
 ├── frontend/
 │   ├── package.json
 │   ├── index.html
 │   ├── src/
 │   │   ├── assets/
 │   │   │   ├── styles.css
 │   │   │   └── ...
 │   │   ├── main.js
 │   │   └── ...
 ├── .gitignore
 ├── package.json
 ├── README.md
 └── ...
```

## 🚀 Configuração para rodar o projeto localmente

1. **Escolha uma pasta, abra o terminal e clone o repositório:**
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

3. **Instale as dependências do Vite para o frontend:**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Inicie o projeto:**
   ```bash
   npm run start
   ```

6. **Abra o navegador e acesse `http://localhost:5173` (ou a porta que o vite fornecer), para ver o aplicativo em ação.**

## 💡 Uso

1. Insira uma palavra-chave no campo de entrada.
2. Clique no botão "Coletar Dados".
3. Veja os resultados coletados na página.

## 🛠️ Depuração

Se você encontrar a mensagem de erro "Falha ao coletar dados da Amazon. Por favor, tente novamente mais tarde.", siga os passos abaixo para depurar:

1. **Verifique o log do servidor no terminal onde o backend está rodando.**
2. **Adicione logs adicionais no código do backend para identificar o problema.**
3. **Certifique-se de que todas as dependências estão instaladas corretamente.**
4. **Verifique a conectividade de rede e a disponibilidade da página da Amazon.**

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
