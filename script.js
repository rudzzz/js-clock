// intervalo de segundos do relogio
setInterval(setClock, 1000);

// pegando o ponteiro da hora
const hourHand = document.querySelector('#hour-hand');

// pegando o ponteiro do minuto
const minuteHand = document.querySelector('#minute-hand');

// pegando o ponteiro dos segundos
const secondHand = document.querySelector('#second-hand');

// funcção que define a hora exata e define a rotação de cada ponteiro
function setClock(){

    // pegando a data atual
    const currentDate = new Date();

    // pegando os segundos da data apenas
    const secondsRatio = currentDate.getSeconds() / 60;

    // pegando os minutos da data apenas
    const minutesRatio = (secondsRatio + currentDate.getMinutes())  / 60;

    // pegando as horas da data apenas
    const hourRatio = (minutesRatio + currentDate.getHours()) / 12;

    // setando a rotação do ponteiro de segundos
    setRotation(secondHand, secondsRatio);

    // setando a rotação do ponteiro de minutos
    setRotation(minuteHand, minutesRatio);

    // setando a rotação do ponteiro da hora
    setRotation(hourHand, hourRatio);
}

// função que executa a rotação dos ponteiros
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

// invocando a função
setClock();