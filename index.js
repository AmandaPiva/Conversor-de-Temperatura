//pegando valores dos inputs range
var rangeC = document.querySelector('#celsius');
var rangeF = document.querySelector('#fahrenheit');
var rangeK = document.querySelector('#kelvin');

//pegando valores dos inputs numbers
var valorC = document.querySelector('#numeroC');
var valorF = document.querySelector('#numeroF');
var valorK = document.querySelector('#numeroK');

//função atualizar a caixinha das temperaturas ao manipular o input range

function atualizaCelsius(){ //atualiza o input range do celsius
    valorC.value = rangeC.value; //o valor do input se torna o valor do range
}

function atualizaFahrenheit(){  //atualiza o input range do fahrenheit
    let celsiusForFahrenheit = (rangeC.value * 9/5) + 32;   //calculo da conversão de temperatura
    valorF.value = celsiusForFahrenheit.toFixed(2); //o valor do input se torna o resultado do calculo da conversao
}

function atualizaKelvin(){  //atualiza o input range do kelvin
    let celsiusForKelvin = parseFloat(rangeC.value) + 273.00;   //calculo da conversão de temperatura
    valorK.value = parseFloat(celsiusForKelvin).toFixed(2); //o valor do input se torna o resultado do calculo da conversao
}

function zerar(){   //função do botão zerar
    //zerando os inputs
    valorC.value = 0;
    valorF.value = '';
    valorK.value = '';
}

