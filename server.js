const express = require('express');

const processosService = require('./processos');

const app = express();

const port = 3333;

app.use(express.json());

app.get('/processos', (req, res) => {

    const resultado = processosService.buscarTodosProcessos();

    res.json(resultado);

});

app.get('/processos/:numero', (req, res) => {

    const numero = Number(req.params.numero);

    const processo = processosService.buscarProcessoPorNumero(numero);

    if (!processo) {
    return res.status(404).json({
        mensagem: "Processo não encontrado"
        });

    }

    res.json(processo);

});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});