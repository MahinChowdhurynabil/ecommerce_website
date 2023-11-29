document.addEventListener("DOMContentLoaded", function () {
  let dishead_pElement = document.querySelector(".dishead_p");
  let texts = [
    "Like us on Facebook and receive a 20% discount",
    "Subscribe our newsletter and get unlimited profits",
  ];
  let currentIndex = 0;

  function fadeInOut() {
    dishead_pElement.textContent = texts[currentIndex];
    dishead_pElement.style.opacity = 1;

    setTimeout(function () {
      dishead_pElement.style.opacity = 0;
    }, 1000);

    currentIndex = (currentIndex + 1) % texts.length;
  }

  fadeInOut();

  setInterval(fadeInOut, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  let active = document.querySelector(".active-menu");
  let mobonav = document.querySelector(".nav-3");

  active.onclick = function () {
    if (mobonav.style.display === "none" || mobonav.style.display === "") {
      mobonav.style.display = "block";
    } else {
      mobonav.style.display = "none";
    }
  };
});
