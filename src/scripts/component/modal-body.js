const modalBodyComponent = (
  imageUrl,
  restaurantName,
  rate,
  location,
  description
) => {
  return `
  <!-- left/top -->
          <section class="left">
            <img
              src="${imageUrl}"
              alt="Restoran ${restaurantName}"
              loading="lazy"
              class="modal-image"
            />
          </section>

  <!-- right/bottom -->
          <section class="right">
            <div class="name-restaurant">
              <h2 class="title">Nama Restoran<span class="line"></span></h2>
              <h3>${restaurantName}</h3>
            </div>

            <div class="location-restaurant">
              <h2 class="title">Lokasi Restoran<span class="line"></span></h2>
              <h3>
                <i
                  class="fa-solid fa-map-location-dot"
                  aria-label="Icon peta"
                ></i>
                ${location}
              </h3>
            </div>

            <div class="rate-restaurant">
              <h2 class="title">Rating Restoran<span class="line"></span></h2>
              <h3>
                <i
                  class="fa-regular fa-star star"
                  aria-label="Icon bintang"
                ></i>
                <span>${rate}</span>
              </h3>
            </div>

            <div class="description-restaurant">
              <h2 class="title">
                Deskripsi Restoran<span class="line"></span>
              </h2>
              <article>
              <p class="description-text">
                ${description}
              </p>
              </article>
            </div>
          </section>
  `;
};

export default modalBodyComponent;
