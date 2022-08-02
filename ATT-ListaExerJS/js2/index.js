const valor = 33;

 
  if (valor === 2 || valor === 3 || valor == 5 || valor == 7) {
    console.log(`${valor} é primo`);
  } else if (valor % 2 !== 0 && valor % 3 !== 0 && valor % 5 !== 0 && valor % 7 !== 0) {
    console.log(`${valor} é primo`);
  } else {
    console.log(`${valor} não é primo`);
  }