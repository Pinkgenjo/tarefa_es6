const alunos = [
    { nome: 'Anderson', nota: 8 },
    { nome: 'Julia', nota: 5 },
    { nome: 'Agatha', nota: 7 },
    { nome: 'Jorge', nota: 4 },
    { nome: 'Lucia', nota: 6 }
];

const filtrarAlunosAprovados = (alunos) => 
    alunos.filter(aluno => aluno.nota >= 6);

const alunosAprovados = filtrarAlunosAprovados(alunos);

const textoAlunosAprovados = `Os alunos aprovados com nota 6 ou maior são: ${alunosAprovados.map(aluno => aluno.nome).join(', ')}`;

console.log(textoAlunosAprovados);
