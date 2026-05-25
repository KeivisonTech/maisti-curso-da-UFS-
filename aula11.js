// Faça um script que leia os dados de uma turma de alunos. 
// usar function
// Depois lerá os nomes de todos os alunos. 
// Finalmente lerá as notas finais de cada um dos alunos. 
// O programa deverá imprimir os nomes dos alunos que foram aprovados. 
// Considera-se aprovado o aluno com nota maior ou igual a cinco.

const prompt = require('prompt-sync')();

function calcularNotasEscolares() {
    const alunos = [];
    let continuar = "s";

    
    while (continuar.toLowerCase() === "s") {
        const nome = prompt("Nome do aluno: ").trim();
        
        let somaNotas = 0;
        
        for (let s = 1; s <= 4; s++) {
            const nota = parseFloat(prompt(`Nota do ${s}º semestre: `));
            somaNotas += nota;
        }

        const mediaIndividual = somaNotas / 4;
        alunos.push({ nome, media: mediaIndividual });

        
        continuar = prompt("Deseja cadastrar outro aluno? (s/n): ");
    }

   
    const mediaTurma = alunos.reduce((acc, a) => acc + a.media, 0) / alunos.length;
    
    console.log("\n--- RESULTADOS ---");
    console.log(`Média Geral da Turma: ${mediaTurma.toFixed(2)}`);
    
    console.log("\nLista de Alunos e Médias:");
    alunos.forEach(aluno => {
        const status = aluno.media >= mediaTurma ? "[ACIMA DA MÉDIA]" : "[ABAIXO DA MÉDIA]";
        console.log(`${aluno.nome}: ${aluno.media.toFixed(2)} ${status}`);
    });
}

calcularNotasEscolares();
