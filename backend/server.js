import express from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

// Endpoint para coletar dados dos produtos da Amazon
app.get('/api/scrape', async (req, res) => {
    const keyword = req.query.keyword; // Obtém a palavra-chave da query string
    if (!keyword) {
        return res.status(400).json({ error: 'A palavra-chave é obrigatória' }); // Retorna erro se a palavra-chave não for fornecida
    }

    try {
        // Monta a URL da busca na Amazon com a palavra-chave fornecida
        const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;
        const { data } = await axios.get(url); // Faz a requisição HTTP para a Amazon
        const dom = new JSDOM(data); // Cria um DOM a partir do HTML retornado
        const document = dom.window.document; // Obtém o objeto document do DOM

        // Mapeia os produtos encontrados na página de resultados
        const products = [...document.querySelectorAll('.s-main-slot .s-result-item')].map(product => {
            const title = product.querySelector('.a-size-base-plus span')?.textContent?.trim(); // Obtém o título do produto
            const rating = product.querySelector('.a-icon-alt')?.textContent; // Obtém a avaliação do produto
            const reviews = product.querySelector('.a-size-base.s-underline-text')?.textContent; // Obtém o número de avaliações
            const imageUrl = product.querySelector('.s-image')?.getAttribute('src'); // Obtém a URL da imagem do produto

            // Retorna um objeto com os dados do produto
            return { title, rating, reviews, imageUrl };
        }).filter(product => product.title && product.rating && product.reviews && product.imageUrl); // Filtra produtos com dados válidos

        res.json({ products }); // Retorna os dados dos produtos em formato JSON
    } catch (error) {
        console.error('Erro ao coletar dados da Amazon:', error.message); // Loga o erro no console
        res.status(500).json({ error: 'Falha ao coletar dados da Amazon. Por favor, tente novamente mais tarde.' }); // Retorna erro se algo deu errado
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`); // Inicia o servidor e loga a URL
});