const imageArray = [];

for (let i = 1; i <= 9; i++) {
  const imageObj = {
    thumb: `./img/img${i}_THUMB.jpg`,
    high: `./img/img${i}_HIGH.jpg`,
    alt: `Image_${i}`,
  };
  imageArray.push(imageObj);
}


// append image
const gridElement = document.getElementById("imageGrid");

imageArray.forEach((image, index) => {
  const imageContainer = document.createElement("div");
  imageContainer.className = "blur-load";
  imageContainer.style.backgroundImage = `url('${image.thumb}')`;

  const imgElement = document.createElement("img");
  imgElement.src = image.high;
  imgElement.loading = "lazy";
  imgElement.alt = image.alt;

  imageContainer.appendChild(imgElement);
  gridElement.appendChild(imageContainer);
});

// loading
const blurDivs = document.querySelectorAll(".blur-load");

blurDivs.forEach((div) => {
  const img = div.querySelector("img");

  const loaded = () => {
    div.classList.add("loaded");
  };
  img.complete ? loaded() : img.addEventListener("load", loaded);
});
