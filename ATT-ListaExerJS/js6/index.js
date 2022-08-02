const suaIdade = Number(prompt('Digite sua idade:'));

 if (isNaN(suaIdade) || !suaIdade) {
   alert('Ops dado inválido!! Tente novamente com numeros. ');

   window.location.reload();
 } else {
   const temHepatite = confirm(
     ' Se você teve hepatite ou realizou alguma cirugia gastro intestinal clique em Ok, senão em Cancelar!'
   );

   if (suaIdade < 18 || suaIdade > 67 || temHepatite) {
     alert('você não pode doar sangue');
   } else {
     alert('pode doar sangue');
   }
 }