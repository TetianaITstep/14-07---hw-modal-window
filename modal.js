const buttonElem = document.querySelector(".sign_in");
const modalElem = document.querySelector(".modal");
const closeButtonElem = modalElem.querySelector(".modal_close");

modalElem.style.display = "none";

const openModal = (event) => {
  event.preventDefault();
  modalElem.style.display = "flex";
};

const closeModal = () => {
  modalElem.style.display = "none";
};

buttonElem.addEventListener("click", openModal);
closeButtonElem.addEventListener("click", closeModal);

const formElem = modalElem.querySelector(".combined_form");
formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form submitted!");
  closeModal();
});
