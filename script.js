// Scrivere data di riferimenti
let countDownDate = new Date("Apr 28, 2023 09:30:00").getTime();

// Aggiornare ogni secondo 
let update = setInterval(function() {

  // Comunicare data e ora di "in questo momento"
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Calcolo tempo in giorni, ore, minuti e secondi
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Risultato stampato in id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Scrivi fino a 0
  if (distance < 0) {
    clearInterval(update);
    document.getElementById("countdown").innerHTML = "TEMPO SCADUTO";
  }
}, 1000);

