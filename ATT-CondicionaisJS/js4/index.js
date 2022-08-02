let dia = Number(prompt("Digite de 1 a 7 para saber o dia da semana: "));
switch (dia) {
  case 1:
    document.write(dia, " Domingo");
    break;
  case 2:
    document.write(dia, " Segunda");
    break;
  case 3:
    document.write(dia, " Terça");
    break;
  case 4:
    document.write(dia, " Quarta");
    break;
  case 5:
    document.write(dia, " Quinta");
    break;
  case 6:
    document.write(dia, " Sexta");
    break;
  case 7:
    document.write(dia, " Sabado");
    break;
  default:
    document.write("Algo deu errado!, Digite um numero de 1 a 7");
    break;
}