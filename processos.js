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

    //console.log(buscarTodosProcessos());*/

function buscarProcessoPorNumero() {

    const processo = processos.find((p) => {

        return p.numero === 102;

    });

    return processo;
}

console.log(buscarProcessoPorNumero().numero);