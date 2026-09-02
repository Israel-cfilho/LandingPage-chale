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

    const numeroWhatsApp = "5583999760359";

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

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalClose =
        document.getElementById("modalClose");


    galleryItems.forEach((item) => {

        item.addEventListener("click", () => {

            const image =
                item.dataset.image;

            modalImage.src = image;

            modal.classList.add("active");

            document.body.classList.add("modal-open");

        });

    });


    function fecharModal() {

        modal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }


    modalClose.addEventListener(
        "click",
        fecharModal
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {
                fecharModal();
            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {
                fecharModal();
            }

        }
    );


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