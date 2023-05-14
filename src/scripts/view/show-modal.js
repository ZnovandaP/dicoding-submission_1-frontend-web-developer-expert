import generateModalBody from "./generate-modal-body";

const cardContainer = document.querySelector(".card-container");
const modalParent = document.querySelector(".modal-parent");
const modalButtonClose = modalParent.querySelector(".modal-button-close");
const body = document.body;
const DURATION_TIME_OUT = 400;

const showModal = () => {
  modalParent.classList.add("block");
  setTimeout(() => {
    modalParent.classList.add("show-modal");
    body.classList.add("modal-freeze-page");
  }, DURATION_TIME_OUT);
};

const hiddenModal = () => {
  modalParent.classList.remove("show-modal");
  body.classList.remove("modal-freeze-page");
  setTimeout(() => {
    modalParent.classList.remove("block");
  }, DURATION_TIME_OUT);
};

const isButtonDetail = (event) => {
  return (
    event.target.classList.contains("detail-button") ||
    event.target.classList.contains("info-icon")
  );
};

const isCard = (event) => {
  return (
    event.target.classList.contains("overlay") ||
    event.target.classList.contains("card-content") ||
    event.target.classList.contains("rate")
  );
};

/* menerapkan metode event delegation dengan memanfatkan event bubling */
cardContainer.addEventListener("click", function (event) {
  if (isButtonDetail(event)) {
    const getId = event.target.dataset.id;
    generateModalBody(getId);
    showModal();
  }

  if (isCard(event)) {
    const getId = event.target.dataset.id;
    generateModalBody(getId);
    showModal();
  }
});

modalButtonClose.addEventListener("click", function () {
  hiddenModal();
});
