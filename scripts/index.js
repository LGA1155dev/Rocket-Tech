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

