import openModal from "./mobile-menu";
const btnOpen = document.querySelector(".header__call-btn");
const btnClose = document.querySelector(".feedback-call__close-btn");
const feedbackModal = document.querySelector(".feedback-call");
const btnOpenSecond = document.querySelector(".mobile-menu__btn_phone");
console.log(btnOpenSecond, btnClose, feedbackModal);

openModal(btnOpen, btnClose, feedbackModal, "right");
openModal(btnOpenSecond, btnClose, feedbackModal, "right");
