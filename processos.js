const processos = [
    {
        numero: 100,
        requerente: "Alex",
        valor: 90000
    },

    {
        numero: 101,
        requerente: "Rose",
        valor: 180000
    },

    {
        numero: 102,
        requerente: "Maria",
        valor: 75000
    }
];

function buscarTodosProcessos() {
    return processos;
}

function buscarProcessoPorNumero(numero) {
    return processos.find(function (processo) {
        return processo.numero === numero;
    });
}

module.exports = {
    buscarTodosProcessos,
    buscarProcessoPorNumero
};