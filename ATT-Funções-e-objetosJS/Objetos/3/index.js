const aluno1 = {
    nome: 'maria',
    notas: [8, 3],
  };
  
  const aluno2 = {
    nome: 'odette',
    notas: [6, 9],
  };
  
  const turma = [aluno1, aluno2];
  
  let somaNotasTurma = 0;
  
  turma.forEach((aluno) => {
    const media =
      aluno.notas.reduce((valorInicial, proximo) => valorInicial + proximo) / aluno.notas.length;
  
    console.log(`As notas de ${aluno.nome} são:${aluno.notas} e sua média é ${media}`);
  
    somaNotasTurma += media;
  });
  
  console.log(`A média da Turma ${somaNotasTurma / turma.length}`);