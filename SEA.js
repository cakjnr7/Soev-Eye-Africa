
        const slides = Array.from(document.querySelectorAll(".hero-slide"));
        const dots = Array.from(document.querySelectorAll(".carousel-dot"));
        let currentSlide = 0;

        function showSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle("is-active", slideIndex === currentSlide);
            });
            dots.forEach((dot, dotIndex) => {
                dot.setAttribute("aria-current", String(dotIndex === currentSlide));
            });
        }

        window.setInterval(() => showSlide(currentSlide + 1), 3000);

        document.querySelector(".previous-slide").addEventListener("click", () => {
            showSlide(currentSlide - 1);
        });
        document.querySelector(".next-slide").addEventListener("click", () => {
            showSlide(currentSlide + 1);
        });
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                showSlide(index);
            });
        });

        const menuToggle = document.querySelector(".menu-toggle");
        const navigation = document.querySelector("#primary-navigation");
        menuToggle.addEventListener("click", () => {
            const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
            navigation.classList.toggle("is-open", !isOpen);
        });
        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            });
        });
