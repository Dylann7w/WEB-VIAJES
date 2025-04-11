document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        alert(`¡Prepárate para viajar a ${card.querySelector('h3').textContent}!`);
      });
    });
  
    console.log("¡Web de viajes activa!");
  });
  