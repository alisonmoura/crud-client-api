

function fazerCompras() {

    comprarLeite(function(){
        console.log("O leite tá no jeito")
    })

    comprarFralda(function(){
        console.log("O fralda tá no jeito")
        comprarCerveja(function(){
            console.log("O cerveja tá no jeito")
        })
    })

    comprarPao(function(){
        console.log("O pão está pronto");
    });
    
}

function comprarPao(callback) {
    setTimeout(callback, 5000);
}

function comprarLeite(callback) {
    setTimeout(callback, 500);
}

function comprarFralda(callback) {
    setTimeout(callback, 500);
}

function comprarCerveja(callback) {
    setTimeout(callback, 100);
}

fazerCompras();