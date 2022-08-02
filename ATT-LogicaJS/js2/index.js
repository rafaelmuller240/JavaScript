const valor = Number(prompt('Informe um valor inteiro positivo: '));

if (isNaN(valor) || valor <= 0) {
  alert('O valor informado não é um número válido.');
} else {
  if (valor % 2) {

    alert('Número é impar!');
  } else {
    alert('Número é par!');
  }

  window.location.reload();
}
