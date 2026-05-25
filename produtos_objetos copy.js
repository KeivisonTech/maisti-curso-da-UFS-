// Faça um programa em JavaScript que simule um sistema de gerenciamento de estoque de produtos utilizando menu no terminal.
// O sistema deverá permitir o cadastro de produtos e consultas sobre o estoque.

// Cada produto deverá conter: nome, preço, quantidade em estoque e categoria.

// O programa deverá apresentar um menu com as seguintes opções:

// [1] Cadastrar produto — permite adicionar um novo produto ao sistema, solicitando todas as suas informações.
// [2] Revisar estoque — exibe todos os produtos que estão em situação de escassez, ou seja, com quantidade em estoque menor que 5 unidades.
// [3] Buscar produto — solicita o nome de um produto e exibe o valor total em estoque desse produto, calculado como preço multiplicado pela quantidade.
// [4] Relatório geral — exibe todos os produtos cadastrados, mostrando seus dados e também a média de preço dos produtos cadastrados.
// [5] Sair — encerra o programa.

// O sistema deve funcionar em loop, permitindo que o usuário execute várias operações até escolher a opção de saída.


const prompt = require("prompt-sync")();


let produtos = []; 
let opcao;

do {
    console.log("\n===== MENU =====");
    console.log("[1] Cadastrar produto");
    console.log("[2] Produtos em escassez");
    console.log("[3] Buscar valor total por nome");
    console.log("[4] Relatório geral");
    console.log("[5] Sair");

    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {

        case 1:
            console.log("\n[Cadastrar produto]");
            let nome = prompt("Nome do produto: ");
            let preco = Number(prompt("Preço: "));
            let quantidade = Number(prompt("Quantidade: "));

            produtos.push({ nome, preco, quantidade });
            console.log("Produto} while (opcao !== 5); cadastrado!");
            break;

        case 2:
            console.log("\n[Produtos em escassez]");
            let escassos = produtos.filter(p => p.quantidade < 5);

            if (escassos.length === 0) {
                console.log("\n[Nenhum produto em escassez]");
            } else {
                escassos.forEach(p => {
                    console.log(`${p.nome} - Quantidade: ${p.quantidade}`);
                });
            }
            break;

        case 3:
            console.log("\n[Buscar produto]");
            let busca = prompt("Digite o nome do produto: ");
            let encontrado = produtos.find(
                p => p.nome.toLowerCase() === busca.toLowerCase()
            );

            if (encontrado) {
                console.log(`Nome: ${encontrado.nome}`);
                console.log(`Preço: R$ ${encontrado.preco.toFixed(2)}`);
                console.log(`Quantidade: ${encontrado.quantidade}`);
            } else {
                console.log("Produto não encontrado");
            }
            break;

        case 4:
            console.log("\n[Relatório geral]");
            if (produtos.length === 0) {
                console.log("Nenhum produto cadastrado.");
            } else {
                produtos.forEach(p => {
                    console.log(`${p.nome} - R$ ${p.preco.toFixed(2)} - Qtd: ${p.quantidade}`);
                });
            }
            break;

        case 5:
            console.log("\nSaindo do programa...");
            break;

        default:
            console.log("\nOpção inválida!");
    }

} while (opcao !== 5);