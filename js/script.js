async function buscaEndereco() {
    var consultaCep = await fetch('https://viacep.com.br/ws/26525037/json/')
    var consultaCepConvertida = await consultaCep.json();
    console.log(consultaCepConvertida);
}

buscaEndereco();