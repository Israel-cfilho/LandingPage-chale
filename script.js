document.addEventListener("DOMContentLoaded", () => {

    // =============================================
    // WHATSAPP
    // =============================================

    /*
      Coloque aqui o número verdadeiro.
  
      Exemplo:
      83 99999-9999
  
      vira:
  
      5583999999999
    */

    const numeroWhatsApp = "5583993624884";

    const mensagemWhatsApp =
        "Olá! Vi o site do Chalé da Serra e gostaria de saber o valor da diária e a disponibilidade para hospedagem.";


    const whatsappLinks =
        document.querySelectorAll(".whatsapp-link");


    whatsappLinks.forEach((link) => {

        const mensagem =
            encodeURIComponent(mensagemWhatsApp);

        link.href =
            `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

        link.target = "_blank";

        link.rel = "noopener noreferrer";

    });


    // =============================================
    // HEADER
    // =============================================

    const header =
        document.getElementById("header");


    function atualizarHeader() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        atualizarHeader
    );


    atualizarHeader();


    // =============================================
    // MENU MOBILE
    // =============================================

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.getElementById("nav");


    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle("active");

        }
    );


    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("active");

            }
        );

    });


    // =============================================
    // CARROSSEL
    // =============================================

    const slides =
        document.querySelectorAll(
            ".carousel-slide"
        );

    const prevBtn =
        document.getElementById("prevBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const dotsContainer =
        document.getElementById(
            "carouselDots"
        );

    const counter =
        document.getElementById(
            "carouselCounter"
        );


    let currentSlide = 0;


    // =============================================
    // CRIAR BOLINHAS
    // =============================================

    slides.forEach((slide, index) => {

        const dot =
            document.createElement("button");


        dot.classList.add(
            "carousel-dot"
        );


        dot.setAttribute(
            "aria-label",
            `Ir para foto ${index + 1}`
        );


        if (index === 0) {

            dot.classList.add("active");

        }


        dot.addEventListener(
            "click",
            () => {

                showSlide(index);

            }
        );


        dotsContainer.appendChild(dot);

    });


    const dots =
        document.querySelectorAll(
            ".carousel-dot"
        );


    // =============================================
    // MOSTRAR FOTO
    // =============================================

    function showSlide(index) {

        if (index >= slides.length) {

            currentSlide = 0;

        } else if (index < 0) {

            currentSlide =
                slides.length - 1;

        } else {

            currentSlide = index;

        }


        slides.forEach((slide) => {

            slide.classList.remove("active");

        });


        dots.forEach((dot) => {

            dot.classList.remove("active");

        });


        slides[currentSlide]
            .classList.add("active");


        dots[currentSlide]
            .classList.add("active");


        const atual =
            String(currentSlide + 1)
                .padStart(2, "0");


        const total =
            String(slides.length)
                .padStart(2, "0");


        counter.textContent =
            `${atual} / ${total}`;

    }


    // =============================================
    // SETAS
    // =============================================

    nextBtn.addEventListener(
        "click",
        () => {

            showSlide(currentSlide + 1);

        }
    );


    prevBtn.addEventListener(
        "click",
        () => {

            showSlide(currentSlide - 1);

        }
    );


    // =============================================
    // SWIPE NO CELULAR
    // =============================================

    const carouselTrack =
        document.getElementById(
            "carouselTrack"
        );


    let touchStartX = 0;
    let touchEndX = 0;


    carouselTrack.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    carouselTrack.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const diferenca =
            touchStartX - touchEndX;


        if (Math.abs(diferenca) < 50) {
            return;
        }


        if (diferenca > 0) {

            showSlide(currentSlide + 1);

        } else {

            showSlide(currentSlide - 1);

        }

    }


    // =============================================
    // TECLADO
    // =============================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "ArrowRight") {

                showSlide(
                    currentSlide + 1
                );

            }


            if (event.key === "ArrowLeft") {

                showSlide(
                    currentSlide - 1
                );

            }

        }
    );


    // =============================================
    // ANO
    // =============================================

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    // =============================================
    // LUCIDE
    // =============================================

    if (window.lucide) {

        lucide.createIcons();

    }

});