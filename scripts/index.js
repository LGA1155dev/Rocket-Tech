const elements = document.querySelectorAll('.services');

let lastScroll = 0;

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // controla intensidade (quanto maior, mais suave)
  const maxScroll = 150;

  // calcula progresso (0 até 1)
  let progress = scrollY / maxScroll;

  if (progress > 1) progress = 1;

  // aplica estilos dinamicamente (fluido)
  header.style.backgroundColor = `rgba(255, 255, 255, ${progress * 0.9})`;
  header.style.backdropFilter = `blur(${progress * 10}px)`;
  header.style.webkitBackdropFilter = `blur(${progress * 10}px)`;
  header.style.boxShadow = `0 4px 20px rgba(0,0,0,${progress * 0.15})`;

});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else{
        entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.3 // ativa quando 20% do elemento aparece
});

elements.forEach(el => observer.observe(el));