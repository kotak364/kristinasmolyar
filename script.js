//image gallery
const current = document.querySelector("#current");
const image = document.querySelectorAll(".image-slider img");
const opacity = 0.6;

image[0].style.opacity = opacity;

image.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  image.forEach((img) => (img.style.opacity = 1));
  current.src = e.target.src;
  e.target.style.opacity = opacity;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
}

//image slider
const arrowright = document.querySelector("#arrow-right");
const arrowleft = document.querySelector("#arrow-left");
const imageslider = document.querySelector(".image-slider");
const number_of_img = image.length;
let counter = 0;

imageslider.style.gridTemplateColumns = `repeat(${number_of_img},1fr)`;

image.forEach(function (img, index) {
  img.style.left = `${index * 220}px`;
});

arrowright.addEventListener("click", function () {
  counter++;
  carousel();
});
arrowleft.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter < 0) {
    counter = 0;
  }
  console.log(counter);
  if (counter < image.length - 1) {
    arrowright.style.visibility = "visible";
  } else {
    arrowright.style.visibility = "hidden";
  }
  if (counter > 0) {
    arrowleft.style.visibility = "visible";
  } else {
    arrowleft.style.visibility = "hidden";
  }

  image.forEach(function (image) {
    image.style.transform = `translateX(-${counter * 220}px)`;
  });
}


