const dias = document.getElementById("cardOne");
const horas = document.getElementById("card2nd");
const minutos = document.getElementById("card3nd");
const segundos = document.getElementById("card4nd");
console.log(minutos)
const lancamento = "01 dec 2023";

function countDown(){

    const dataLanc = new Date(lancamento);
    const hoje = new Date();

    const totalSecond = (dataLanc - hoje) / 1000;

    const finalDay = Math.floor(totalSecond / 60 / 60 / 24);
    const finalHoras = Math.floor(totalSecond / 60 / 60) %24;
    const finalMinutos = Math.floor(totalSecond / 60) % 60;
    const finalSegundos = Math.floor(totalSecond) % 60;

    dias.innerHTML = `${finalDay}D`
    horas.innerHTML = `${finalHoras}H `
    minutos.innerHTML = `${finalMinutos}M `
    segundos.innerHTML = `${finalSegundos}S `
}

countDown();
setInterval(countDown, 1000);


