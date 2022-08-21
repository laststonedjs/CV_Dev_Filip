const image1 = "./src/img/add.png";
const image2 = "./src/img/remove.png";

function actionButton(category) {
  const moreText = document.querySelector(
    `.group[data-group="${category}"] .more`
  );
  const image = document.querySelector(`.group[data-group="${category}"] img`);
  const showMoreLess = document.querySelector(
    `.group[data-group="${category}"] .textSeeMore`
  );

  if (image.getAttribute("src") === image2) {
    image.style.paddingBottom = "0";
    image.src = image1;
    moreText.classList.remove("visible");
    moreText.classList.add("hidden");
    showMoreLess.innerHTML = "See more";
  } else {
    image.style.paddingBottom = "4.1px";
    image.src = image2;
    moreText.classList.remove("hidden");
    moreText.classList.add("visible");
    showMoreLess.innerHTML = "Show less";
  }
}

function actionButtonMobile(category) {
  const moreText = document.querySelector(
    `.group[data-group="${category}"] .moreMobile`
  );
  const image = document.querySelector(`.group[data-group="${category}"] img`);

  if (image.getAttribute("src") === image2) {
    image.style.paddingBottom = "0";
    image.src = image1;
    moreText.classList.remove("visibleMobile");
    moreText.classList.add("hiddenMobile");
  } else {
    image.style.paddingBottom = "4.1px";
    image.src = image2;
    moreText.classList.remove("hiddenMobile");
    moreText.classList.add("visibleMobile");
  }
}
