const burger = document.querySelector(".header__burger");
const burgerClose = document.querySelector(".mobile-menu__btn_close");
const mobileMenu = document.querySelector(".mobile-menu");

function openModal(btn, btnClose, modal, from) {
  let menuIsOpen = false;
  let startTransform = "translateX(0)";
  let endTransform = "translateX(-105%)";
  if (from == "right") {
    endTransform = "translateX(105%)";
  }
  btn.addEventListener("click", (e) => {
    e.preventDefault;
    menuIsOpen = !menuIsOpen;
    modal.style.transform = startTransform;
    modal.style.visibility = "visible";
    modal.style.display = "block";
  });

  btnClose.addEventListener("click", (e) => {
    e.preventDefault;
    menuIsOpen = !menuIsOpen;
    modal.style.transform = endTransform;
    modal.style.visibility = "hidden";
  });

  document.addEventListener("mouseup", (e) => {
    const withinBoundarioes = e.composedPath().includes(modal);
    if (!withinBoundarioes && menuIsOpen) {
      menuIsOpen = !menuIsOpen;
      modal.style.transform = endTransform;
      modal.style.visibility = "hidden";
    }
  });
}
openModal(burger, burgerClose, mobileMenu);

export default openModal;
