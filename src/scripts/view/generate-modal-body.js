import modalBodyComponent from "../component/modal-body.js";
import dataRestaurants from "../../DATA.json";

const generateModalBody = (datasetID) => {
  const modalBody = document.querySelector(".modal-body");
  const { restaurants } = dataRestaurants;
  restaurants.forEach((data) => {
    const { id, name, description, pictureId: image, city, rating } = data;

    if (datasetID === id) {
      modalBody.innerHTML = modalBodyComponent(
        image,
        name,
        rating,
        city,
        description
      );
    }
  });
};

export default generateModalBody;