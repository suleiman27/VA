
// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });
}

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navigation?.classList.remove("active");
    });
});

// AUTOMATIC FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
