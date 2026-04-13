document.addEventListener('DOMContentLoaded', () => {

    /* HEADER */
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    /* SERVICES */
    const services = document.querySelector('.services');

    const observerServices = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                services.classList.add('active');
            } else {
                services.classList.remove('active');
            }
        });
    }, { threshold: 0.4 });

    if (services) observerServices.observe(services);


    /* CARDS */
    const cards = document.querySelectorAll('.AI');

    const observerCards = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observerCards.observe(card);
    });


    /* PREÇO */
    const precos = document.querySelectorAll('.preco-promo');

    precos.forEach(preco => {
        const final = parseFloat(preco.innerText.replace(/[^\d]/g, '')) || 0;
        let atual = 0;

        const animar = () => {
            const incremento = final / 30;

            const intervalo = setInterval(() => {
                atual += incremento;

                if (atual >= final) {
                    atual = final;
                    clearInterval(intervalo);
                    preco.classList.add('finalizado');
                }

                preco.innerText = 'R$ ' + Math.floor(atual);
            }, 30);
        };

        const observerPreco = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animar();
                    observerPreco.unobserve(preco);
                }
            });
        });

        observerPreco.observe(preco);
    });

});





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