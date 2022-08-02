let dia = Number(prompt("Digite de 1 a 7 para saber o dia da semana: "))
   if (dia === 1) {
      document.write(dia, ' Domingo')
   } else if (dia === 2){
      document.write(dia, ' Segunda')
   } else if(dia === 3){
      document.write(dia, ' Terça')
   }else if(dia === 4){
      document.write(dia, ' Quarta')
   }else if(dia === 5){
      document.write(dia, ' Quinta')
   }else if(dia ===6){
      document.write(dia, ' Sexta')
   }else if(dia === 7){
      document.write(dia, ' Sabado')
   }else{
    document.write('Algo deu errado!, Digite um numero de 1 a 7')
   }