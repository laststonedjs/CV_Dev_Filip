const image1 = "./src/img/add.png";
const image2 = "./src/img/remove.png";

function actionButton(category) {
  const line = document.querySelector(`.group[data-group="${category}"] .line`);
  const moreText = document.querySelector(
    `.group[data-group="${category}"] .more`
  );
  const image = document.querySelector(`.group[data-group="${category}"] img`);
  moreText.classList.add("coll");

  if (image.getAttribute("src") === image2) {
    image.style.paddingBottom = "0";
    image.src = image1;
    moreText.style.height = 0 + "px";
    line.classList.remove("hidden");
    line.classList.add("visible");
    moreText.classList.add("hidden");
    moreText.classList.add("vis");
  } else {
    image.style.paddingBottom = "4.1px";
    image.src = image2;
    line.classList.remove("visible");
    moreText.classList.remove("hidden");
    moreText.classList.remove("vis");
    moreText.classList.add("visible");
    line.classList.add("hidden");
    moreText.style.height = moreText.scrollHeight + "px";
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

function GeneratePDF() {
  window.print();
}
