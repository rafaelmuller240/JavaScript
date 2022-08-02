function calcularMedia(n1, n2, n3, nome) {
    const media = (n1 + n2 + n3) / 3;
    alert(`${nome}, sua média é ${media.toFixed(2)}`);
    console.log(`nota 1: ${n1}`);
    console.log(`nota 2: ${n2}`);
    console.log(`nota 3: ${n3}`);
  }
  
  calcularMedia(7, 10, 5, 'Jamerson');
  