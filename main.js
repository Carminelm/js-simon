const stampa = document.getElementById("NumeriStampa")
const stampasecondi = document.getElementById("secondi")
let timer;
//Visualizzare in pagina 5 numeri casuali.

function generaNumeriCasuali() {
    let numeriCasuali = [];
    for (let i = 0; i < 5; i++) {
      let numeroCasuale = Math.floor(Math.random() * 100) + 1; // tra 1 e 100
      numeriCasuali.push(numeroCasuale);
    }
    stampa.innerText=numeriCasuali;
  }
  let numeri = generaNumeriCasuali();
  

//Da lì parte un timer di 30 secondi.

function StartTimer (){
    let secondi=30; 
   timer = setInterval (function(){
        secondi--;
        //output
        stampasecondi.innerText=secondi;
        if (secondi === 0){
            clearInterval(timer);
            stampa.classList.add("display")
            stampasecondi.classList.add("display")
    
    
        }
    },1000)

}
let timerstop = StartTimer();



