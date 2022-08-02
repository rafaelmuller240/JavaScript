const notebook = {
    processador: 'i7',
    memoria: '16GB',
    preco: 5000,
    hd: '1TB',
    ssd: '256GB',
  };
  for (const key in notebook) {
    const element = notebook[key];
    console.log(`Descrição: ${key},valor :${element}.`);
  }