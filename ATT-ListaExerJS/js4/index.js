const turno = prompt(
    ' Que turno vc estuda(digitar “M” para matutino ou “V” para vespertino ou “N”):'
  ).toLowerCase();

  switch (turno) {
    case 'm':
      alert('BOM DIA');
      break;
    case 'v':
      alert('BOM TARDE');
      break;
    case 'n':
      alert('BOM NOITE');
      break;

    default:
      alert('erro: opção inválida');
      break;
  }