function displayTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const options = { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = new Intl.DateTimeFormat('pt-BR', options).format(now);
    clock.textContent = formattedTime;
  }
  
  // Atualiza a hora a cada segundo
  setInterval(displayTime, 1000);  




let date = new Date().toLocaleDateString("pt-BR");
document.getElementById("date").innerHTML = date;

  