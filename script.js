const btnToggle = document.getElementById("btn-toggle");
const navbarMenu = document.getElementById("navbar__menu");

let isToggleBtnActive = false;

// function to show 'navbar__menu'
const showNavbarMenu = () => {
  navbarMenu.style.display = "block";
  isToggleBtnActive = true;
};

// function to hide 'navbar__menu'
const hideNavbarMenu = () => {
  navbarMenu.style.display = "none";
  isToggleBtnActive = false;
};

// function to toggle 'navbar__menu'
const toggleNavbarMenu = () => {
  if (isToggleBtnActive) hideNavbarMenu();
  else showNavbarMenu();

  btnToggle.classList.toggle("toggle-active");
  navbarMenu.classList.toggle("toggle-active");
};

// event-listener, listening on btn-toggle for 'click' event
btnToggle.addEventListener("click", () => {
  toggleNavbarMenu();
});

// event-listener, listening on the entire document except 'navbar__menu' for 'click' event
document.addEventListener("click", (e) => {
  const isClickedInside = navbarMenu.contains(e.target);
  const isToggleBtnClicked = btnToggle.contains(e.target);

  if (!isClickedInside && !isToggleBtnClicked && isToggleBtnActive) {
    hideNavbarMenu();
    btnToggle.classList.toggle("toggle-active");
  }
});
