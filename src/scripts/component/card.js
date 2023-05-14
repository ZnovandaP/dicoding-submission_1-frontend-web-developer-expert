const cardComponent = (id, imageUrl, restaurantName, rate, location) => {
  return `
  <div class="card" aria-label="Card content" role="card" tabindex="0" data-id="${id}">
  <img
    src="${imageUrl}"
    alt="Restaurant ${restaurantName}"
    loading="lazy"
    class="card-image"
  />
  <div class="overlay" data-id="${id}">
    <div class="rate">
      <i
        class="fa-regular fa-star star"
        aria-label="Icon bintang"
      ></i>
      <p>${rate}</p>
    </div>

    <button
      type="button"
      class="detail-button"
      title="Tombol info rincian"
      data-id="${id}"
    >
      <i
        class="fa-solid fa-circle-info info-icon"
        aria-label="Tombol info"
        data-id="${id}"
      ></i>
    </button>

    <div class="card-content" data-id="${id}">
      <p>
        <i
          class="fa-solid fa-map-location-dot"
          aria-label="Icon peta"
        ></i>
        ${location}
      </p>
      <h2>${restaurantName}</h2>
    </div>
  </div>
</div>
  `;
};

export default cardComponent;