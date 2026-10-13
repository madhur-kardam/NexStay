const stars = document.querySelectorAll(".star");
const ratingValue = document.querySelector("#ratingValue");

  stars.forEach((star) => {

    star.addEventListener("mouseenter", () => {
      const value = star.dataset.value;

      stars.forEach((s) => {
        s.classList.toggle("hovered", s.dataset.value <= value);
      });
    });

    star.addEventListener("mouseleave", () => {
      stars.forEach((s) => {
        s.classList.remove("hovered");
      });
    });

    star.addEventListener("click", () => {
      const value = star.dataset.value;

      ratingValue.value = value;

      stars.forEach((s) => {
        s.classList.toggle("active", s.dataset.value <= value);
      });
    });
    const stars = document.querySelectorAll(".star");

    stars[0].classList.add("active");

});
