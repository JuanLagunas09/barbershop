const btnNavbarToggle = document.getElementById("btn-navbar-toggle");
const navMenu = document.getElementById("navbar-menu");
const headerNav = document.getElementById("header-nav");

function closeMenu() {
  transparentBar();
  btnNavbarToggle?.setAttribute("aria-expanded", "false");
  navMenu?.classList.add("hidden");
}

function transparentBar() {
  headerNav?.classList.remove("shadow-sm");
  headerNav?.classList.add("bg-transparent");
  headerNav?.classList.remove("bg-primary-color");
}

function solidBar() {
  headerNav?.classList.add("shadow-sm");
  headerNav?.classList.remove("bg-transparent");
  headerNav?.classList.add("bg-primary-color");
}

function changeBar() {
  if (window.scrollY > 0) {
    solidBar();
  } else {
    transparentBar();
  }
}

window.addEventListener("scroll", () => {
  changeBar();
});



// Toggle the menu
btnNavbarToggle?.addEventListener("click", () => {
  btnNavbarToggle?.setAttribute("aria-expanded", "true");
  navMenu?.classList.toggle("hidden");
  if (navMenu?.classList.contains("hidden")) {
    changeBar();
  } else {
    solidBar();
  }
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

document.addEventListener("DOMContentLoaded", () => {
  changeBar();
});