const sistemaEscolar = []
function adicionar(nome,idade,nota){
    const alunos = {
        nome:nome,
        idade:idade,
        nota:nota,
    }
    sistemaEscolar.push(alunos)
}

adicionar("Luhydy",16,2.5);
adicionar("Mylla",15,2.9);
adicionar("Anna Sophia",16,2.8);
adicionar("Mayã",15,2.8);

console.log(sistemaEscolar)