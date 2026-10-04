const app = {
  init: function () {
    loadImage();
  },
};

function loadImage() {
  const galleryContainer = document.getElementById("gallery");

  galleryContainer.innerHTML = "";

  images.forEach((image) => {
    const imageThumbnail = `
        <a
          class="gallery-thumbnail shadow"
          href="${image}"
          target="_blank"
        >
          <img src="${image}" class="img-fluid" />
        </a>
     `;
    galleryContainer.insertAdjacentHTML("beforeend", imageThumbnail);
  });
}

app.init();
