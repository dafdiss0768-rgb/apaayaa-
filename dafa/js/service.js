const workCards = document.querySelectorAll('.work-card');

function revealAndFloat(){
  workCards.forEach((card, i) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(cardTop < windowHeight - 100){
      card.style.opacity = 1;
      card.classList.add('float');
    }
  });
}

window.addEventListener('scroll', revealAndFloat);
window.addEventListener('load', revealAndFloat);