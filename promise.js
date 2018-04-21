function buscarCep(cep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var enderecoRetorno = {
                rua: "Austragésilo de Ataíde",
                bairro: "Betaville",
                numer: 76
            }
            resolve(enderecoRetorno);
        }, 1000)
    })

}

async function executarBuscarCep() {
    var enderecoResultante = await buscarCep(79060231);
    console.log(enderecoResultante);
}

executarBuscarCep();

console.log("Esta mensagem está escrita depois da invocação do buscarCep mas será executada primeiro")