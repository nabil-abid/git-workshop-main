document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.style.display = "block";
        form.reset();
        setTimeout(() => {
            formMessage.style.display = "none";
        }, 5000);
    });
});
