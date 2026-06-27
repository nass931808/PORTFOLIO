document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector("[data-year]");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Ouvrir le menu");
            });
        });
    }

    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    revealItems.forEach((element) => observer.observe(element));
});
