const mandaUmNumero = Number(prompt('digite um numero'));

 if (isNaN(mandaUmNumero)) {
   console.log('Bah deu ruim! Não é um numero');
   window.location.reload();
 } else {
   for (let index = 2; index < mandaUmNumero; index++) {
     if (index % 2) {
       document.write(`${index} é impar <br>`);
     }
   }
}