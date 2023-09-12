import openModal from "./mobile-menu";
const btnOpen = document.querySelector(".header__feedback-btn");
const btnClose = document.querySelector(".feedback__close-btn");
const feedbackModal = document.querySelector(".feedback");
const btnOpenSecond = document.querySelector(".mobile-menu__btn_message");

openModal(btnOpen, btnClose, feedbackModal, "right");
openModal(btnOpenSecond, btnClose, feedbackModal, "right");
