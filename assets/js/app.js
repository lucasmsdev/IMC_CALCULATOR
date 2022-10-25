const form = document.querySelector('#form'); //Aqui capturamos o formulario com o ID form.

form.addEventListener('submit', function (event) {  //Adicionamos um evento no formulario, que é o evento de submit.
    event.preventDefault(); //Previniu o default não deixando o formulário ser enviado.
    const inputPeso = event.target.querySelector('#peso'); //Captura dos dados de peso.
    const inputAltura = event.target.querySelector('#altura'); //Captura dos dados de altura.

    const peso = Number(inputPeso.value); //Converteu input para number.
    const altura = Number(inputAltura.value); //Converteu input para number.

    if(!peso) {
        setResultado('Peso Invalido', false);
        return;
    } //Se o peso nao for avaliado como verdadeiro, como se fosse um NaN, usa a function setResultado para imprimir na tela que é invalido.

    if(!altura) {
        setResultado('Altura Invalida', false);
        return;
    } //Se o altura nao for avaliado como verdadeiro, como se fosse um NaN, usa a function setResultado para imprimir na tela que é invalido.

    const imc = getImc(peso, altura); //Definiu uma constante do imc realizando o calcúlo do mesmo na function getImc.
    const nivelImc = getNivelImc(imc); //Pegou o nível do IMC de acordo com a funtion getNivelImc
    
    
    const msg = `Seu IMC e ${imc} (${nivelImc}).`;

    setResultado(msg,true); //Setar o resultado com a tag true pois foi inserido tudo da forma correta.
});



function getNivelImc (imc) {
    const nivel = 
    ['Abaixo do peso', 'Peso normal', 'Sobrepeso' ,'Obesidade grau 1', 
    'Obesidade grau 2','Obesidade grau 3' ];

    if(imc >= 39.9) {
        return nivel[5];
    } 
    
    if (imc >= 34.9) {
        return nivel[4];
    } 
    
    if (imc >= 29.9) {
        return nivel[3];
    }
    
    if (imc >= 24.9) {
        return nivel[2];
    }
    
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }




} //Function que obtem um array com valores dos niveis do IMC, e baseado ao nivel do IMC ele faz uma lógica para comparar com o IMC.



function getImc(peso,altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
    
} //Esta function realiza o caculo do IMC usando o toFixed para ter apenas duas casas decimais



function criaParagrafo() {
    const p = document.createElement('p');
    return p;
} //Esta function cria umm paragrafo dentro do documento html




function setResultado (msg, isValid) { //Recebe uma mensagem e se o resultado é valido
    const resultado = document.querySelector('#resultado'); //Seleciona a div de resultado
    resultado.innerHTML =''; //Sera o html de resultado

    const p = criaParagrafo(); //Seta uma constante para criar parágrafo
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    } //Se for verdadeira utilizara o fundo verde se nao o bad que é vermelho
 
    p.innerHTML = msg; //Seta o innerHTML como a mensagem que estamos recebendos
    resultado.appendChild(p); //Adiciona essa child no nosso resultado
    
}