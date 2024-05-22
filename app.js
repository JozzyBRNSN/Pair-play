const card = document.querySelectorAll(".card");

document.addEventListener("DOMContentLoaded", () => {
  card.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
});
