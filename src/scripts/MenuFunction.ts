const btnNavbarToggle = document.getElementById("btn-navbar-toggle");
const navMenu = document.getElementById("navbar-menu");

function closeMenu() {
  btnNavbarToggle?.setAttribute("aria-expanded", "false");
  navMenu?.classList.add("hidden");
}

// Toggle the menu
btnNavbarToggle?.addEventListener("click", () => {
  btnNavbarToggle?.setAttribute("aria-expanded", "true");
  navMenu?.classList.toggle("hidden");
});

// Close the menu when clicking outside
document.addEventListener("click", (event: any) => {
  if (
    !event.target?.closest("#navbar-menu") &&
    !event.target?.closest("#btn-navbar-toggle")
  ) {
    closeMenu();
  }
});

// close menu when screen is bigger than 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// close menu when click on a link
document.querySelectorAll("#navbar-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});