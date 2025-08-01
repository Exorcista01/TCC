
document.querySelectorAll(".accordion-item-header, .header-segund").forEach(header => {
    header.addEventListener("click", () => {
        // Alterna a classe ativa no item clicado
        header.classList.toggle("active");

        // Se quiser fechar os outros ao abrir um
        // document.querySelectorAll(".accordion-item-header, .header-segund").forEach(h => {
        //     if(h !== header) h.classList.remove("active");
        // });
    });
});

