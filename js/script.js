/*==================================================
Portfolio Christie DAMBA - Script.js
Menu burger, filtre projets, cartes flip
===================================================*/

// Menu burger (mobile)

const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click",() =>{
    burger.classList.toggle("open");
    navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", navLinks.classList.contains("open"));
});

// ferme le menu quand on clique sur le lien
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        burger.classList.remove("open");
        navLinks.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
    });
});

// filtre des projets
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".flip-card");

filterButtons.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        // boutton actif
        filterButtons.forEach((b)=> b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projectCards.forEach((card) =>{
            const show = filter === "all" || card.dataset.category === filter;
            card.classList.toggle("hidden", !show);
            // on remet la carte à l'endroit quand elle est filtrée
            if(!show) card.classList.remove("is-flipped");
        });
    });
});