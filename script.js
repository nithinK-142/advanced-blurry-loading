const blurDivs = document.querySelectorAll(".blur-load");

blurDivs.forEach((div) => {
  const img = div.querySelector("img");

  const loaded = () => {
    div.classList.add("loaded");
  };
  img.complete ? loaded() : img.addEventListener("load", loaded);
});
