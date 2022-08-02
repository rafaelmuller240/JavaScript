
const ehUmNumber = Number(prompt('Digite um numero de 1 a 10:'));

if (isNaN(ehUmNumber)) {
   alert('Ops não é número,tente novamente!');

   window.location.reload();
} else if (ehUmNumber < 1 || ehUmNumber > 10) {
   alert('Ops só numeros de 1 a 10,tente novamente!');

   window.location.reload();
} else {
   for (let count = 1; count <= 10; count++) {
     const result = ehUmNumber * count;

     document.write(ehUmNumber + ' x ' + count + ' = ' + result + '<br>');
   }
}