const burger = () => {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");
  const menuLinks = document.querySelectorAll(".mobile-menu__link");


  function toggleMenu() {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }

  burger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
  });

}


export default burger;