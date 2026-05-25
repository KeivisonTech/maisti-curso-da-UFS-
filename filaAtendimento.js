const filaDeAtendimento = []

function adicionarNaFila(nome) {
    filaDeAtendimento.push(nome)
    console.log(` ${nome} entrou na fila. Posição: ${filaDeAtendimento.length}`)
}

async function chamarProximo() {
    if (filaDeAtendimento.length === 0) {
        console.log("a fila esta vazia!");
        return;
    }
    
const proximoDaFila = filaDeAtendimento.shift();

console.log(`atendendo: ${proximoDaFila}...`);

await new Promise(resolve => setTimeout (resolve, 20000));

console.log(`Atendimento de ${proximoDaFila} concluido.`);

  chamarProximo();
}

adicionarNaFila("ana")
adicionarNaFila("carlos")
adicionarNaFila("julia")
adicionarNaFila("breno")
adicionarNaFila("mayara")
adicionarNaFila("monica")
adicionarNaFila("Guilherme")

chamarProximo();