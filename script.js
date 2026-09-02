document.addEventListener("DOMContentLoaded", () => {

    /*
    ==========================================
    CONFIGURAÇÃO DO WHATSAPP
    ==========================================
  
    Troque pelo número verdadeiro do proprietário.
  
    Formato:
    55 + DDD + número
  
    Exemplo:
    5583999999999
    */

    const numeroWhatsApp = "5583996246304";

    const mensagemWhatsApp =
        "Olá! Vi o site do Chalé da Serra e gostaria de saber o valor da diária e a disponibilidade para hospedagem.";


    // ==========================================
    // LINKS DO WHATSAPP
    // ==========================================

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


    // ==========================================
    // HEADER AO ROLAR A PÁGINA
    // ==========================================

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


    // ==========================================
    // MENU MOBILE
    // ==========================================

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.getElementById("nav");

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

    });


    // Fecha menu depois de clicar em um link

    const navLinks =
        nav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });


    // ==========================================
    // GALERIA / MODAL
    // ==========================================

    const slides = document.querySelectorAll(".carousel-slide");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const dotsContainer = document.getElementById("carouselDots");
    const counter = document.getElementById("carouselCounter");

    let currentSlide = 0;


    /* CRIA AS BOLINHAS */

    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            showSlide(index);
        });

        dotsContainer.appendChild(dot);

    });


    const dots = document.querySelectorAll(".carousel-dot");


    /* MOSTRA FOTO */

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");


        const atual =
            String(currentSlide + 1).padStart(2, "0");

        const total =
            String(slides.length).padStart(2, "0");

        counter.textContent = `${atual} / ${total}`;
    }


    /* SETAS */

    nextBtn.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    prevBtn.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    // CARROSSEL MOBILE
    let touchStartX = 0;
    let touchEndX = 0;

    const carouselTrack =
        document.getElementById("carouselTrack");

    carouselTrack.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    carouselTrack.addEventListener("touchend", (event) => {

        touchEndX = event.changedTouches[0].screenX;

        handleSwipe();

    });

    function handleSwipe() {

        const difference =
            touchStartX - touchEndX;

        if (difference > 50) {
            showSlide(currentSlide + 1);
        }

        if (difference < -50) {
            showSlide(currentSlide - 1);
        }

    }


    // ==========================================
    // ANO DO FOOTER
    // ==========================================

    const currentYear =
        document.getElementById("currentYear");

    currentYear.textContent =
        new Date().getFullYear();


    // ==========================================
    // LUCIDE ICONS
    // ==========================================

    if (window.lucide) {
        lucide.createIcons();
    }

});