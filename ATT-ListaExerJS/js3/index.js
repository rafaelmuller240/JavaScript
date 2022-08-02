const altura = Number(prompt('Digite a altura'));
const sexo = Number(prompt('Digite 1 para Feminino ou 2 para Masculino'));
let peso;
switch (sexo) {
  case 1:
    peso = (62.1 * altura - 44.7).toFixed(2);

    alert(`Seu peso ideal é ${peso}`);
    break;
  case 2:
    peso = (72.7 * altura - 58).toFixed(2);
    alert(`Seu peso ideal é ${peso}`);
    break;
  default:
    alert('erro: opção inválida');
    break;
}