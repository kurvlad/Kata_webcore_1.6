const btnMoreServices = document.querySelector(".services__more");
const paragraph = document.querySelector(".services__p");
let btnPress = false;

btnMoreServices.addEventListener("click", (e) => {
  e.preventDefault;
  btnPress = !btnPress;
  if (btnPress) {
    paragraph.style.height = "auto";
    btnMoreServices.textContent = "Скрыть";
    btnMoreServices.classList.add("services__more--up");
  } else if (window.innerWidth > 768) {
    paragraph.style.height = "160px";
    btnMoreServices.classList.remove("services__more--up");
    btnMoreServices.textContent = "Читать далее";
  } else if (window.innerWidth < 768) {
    paragraph.style.height = "90px";
    btnMoreServices.classList.remove("services__more--up");
    btnMoreServices.textContent = "Читать далее";
  }
});
