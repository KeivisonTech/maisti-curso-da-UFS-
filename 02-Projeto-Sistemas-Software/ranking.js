class Aluno{
    constructor(nome){
        this.nome = nome;
        this.matematica = [];
        this.portugues = [];
    }

    adicionaNota(nota, disciplina){
        if (disciplina == "matematica"){
            this.matematica.push(nota)
        }
        else if (disciplina == "portugues"){
            this.portugues.push(nota)
        }
    }

    media(array){
        let soma = 0;
        for (let nota of array){
            soma += nota;
        }
        return soma / array.length
    }

    calculaMedia(disciplina){
        if (disciplina == "matematica"){
            return this.media(this.matematica)
        }
        else if(disciplina == "portugues"){
            return this.media(this.portugues)
        }
        else{
            console.log("Disciplina não reconhecida.")
        }
    }
}

class Turma{
    constructor(nomeTurma){
        this.nomeTurma = nomeTurma;
        this.alunos = [];
    }

    criaRanking(disciplina){
        const ranking = [... this.alunos];

        for(let i = 0; i < ranking.length; i++) {
            for (let j = 0; j < ranking.length - 1 - i; j++) {

                const mediaA = ranking[j].calculaMedia(disciplina);
                const mediaB = ranking [ j + 1].calculaMedia(disciplina);

                if (mediaB > mediaA) {
                    let temp = ranking[j];
                    ranking[j] = ranking[j + 1];
                    ranking[j+1] = temp;
                }
            }
        }
        console.log(` Ranking das ${disciplina} - Turma ${this.nomeTurma}:`)
        for (let i = 0; i < ranking.length; i++){
            const media = ranking[i].calculaMedia(disciplina);
            console.log(`${i + 1}° - ${ranking[i].nome}: ${media.toFixed(2)}`);
        }

    }
}


// Casos de teste

let a1 = new Aluno("Beltrano");
a1.adicionaNota(8, "matematica");
a1.adicionaNota(9, "matematica");

let a2 = new Aluno("Fulano");
a2.adicionaNota(10, "matematica");
a2.adicionaNota(7, "matematica");

let a3 = new Aluno("Ciclana");
a3.adicionaNota(10, "matematica");
a3.adicionaNota(9, "matematica");

let a4 = new Aluno("sla");
a4.adicionaNota(3, "matematica");
a4.adicionaNota(10, "matematica")

let turma = new Turma("3º Ano");

turma.alunos.push(a1);
turma.alunos.push(a2);
turma.alunos.push(a3);
turma.alunos.push(a4);

console.log(turma.criaRanking("matematica"));