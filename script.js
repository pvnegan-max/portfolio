/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {

            icon.classList.remove("bi-list");
            icon.classList.add("bi-x");

        } else {

            icon.classList.remove("bi-x");
            icon.classList.add("bi-list");

        }

    });


    const links = navbar.querySelectorAll("a");

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("bi-x");
            icon.classList.add("bi-list");

        });

    });

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            current = section.id;
        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const elements = document.querySelectorAll(
    ".title, .about-text, .information, .skill, .project, .contact"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(function(element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});