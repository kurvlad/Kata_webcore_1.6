const btnMoreOne = document.querySelector(".brand__btn");
const listOne = document.querySelector(".brand__list");

const btnMoreTwo = document.querySelector(".machine__btn");
const listTwo = document.querySelector(".machine__list");

function openAll(btnMore, list) {
  let btnPress = false;
  
  document.addEventListener("DOMContentLoaded", () => {
    btnMore.addEventListener("click", (e) => {
      e.preventDefault;
      btnPress = !btnPress;
      if (btnPress) {
        btnMore.textContent = "Скрыть";
        btnMore.classList.add(`${btnMore.classList[0]}--up`);
        list.style.maxHeight = "none";
      } else {
        btnMore.textContent = "Показать все";
        btnMore.classList.remove(`${btnMore.classList[0]}--up`);
        list.style.maxHeight = "160px";
      }
    });
  });
}

openAll(btnMoreOne, listOne);
openAll(btnMoreTwo, listTwo);
