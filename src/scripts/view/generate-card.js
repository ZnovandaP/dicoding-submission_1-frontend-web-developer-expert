import cardComponent from "../component/card.js";
import dataRestaurants from "../../DATA.json";

const generateCard = () => {
  const cardContainer = document.querySelector(".card-container");
  const { restaurants } = dataRestaurants;
  restaurants.forEach((data) => {
    const { id, name, pictureId: image, city, rating } = data;
    cardContainer.innerHTML += cardComponent(id, image, name, rating, city);
  });
};

export default generateCard;
