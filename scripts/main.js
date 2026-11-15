const app = {
  init: function () {
    loadImage();
  },
};

function loadImage() {
  const galleryContainer = document.getElementById("gallery");

  galleryContainer.innerHTML = "";

  const imagesScriptPath = "scripts/images.js";
  const imagesScript = document.createElement("script");
  imagesScript.src = imagesScriptPath + "?nocache=" + new Date().getTime();
  imagesScript.async = true;
  document.head.appendChild(imagesScript);
  imagesScript.onload = function () {
    sketch_images.forEach((image) => {
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
  };
}

app.init();
