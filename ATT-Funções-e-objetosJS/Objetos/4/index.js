const candidatos = [
    {
      nome: 'Tia Márcia',
      idade: 68,
      skills: ['Python', 'C#', 'javascript'],
    },
    {
      nome: 'Dona Iolanda',
      idade: 89,
      skills: ['Fortran', 'Pascal', 'Cobol'],
    },
    {
      nome: 'Shirley',
      idade: 45,
      skills: ['html', 'css', 'Javascript', 'c++', 'java', 'PHP', 'VueJs'],
    },
    {
      nome: 'Lurdinha',
      idade: 50,
      skills: ['javascript', 'Typescript', 'c++', 'java'],
    },
    {
      nome: 'Dona Evinha',
      idade: 70,
      skills: ['typescript', 'c++', 'jaVa'],
    },
  ];
  
  function encontrarIdosas(array, skillDeclarada) {
    const selecionados = array.filter((candidato) => {
      return candidato.skills.some((skill) => {
        return skill.toLowerCase() === skillDeclarada.toLowerCase();
      });
    });
  
    console.log(selecionados);
  }
  
  encontrarIdosas(candidatos, 'typeScript');