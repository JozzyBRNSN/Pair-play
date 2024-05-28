function newCard(number) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = number;
  document.getElementById("game").append(card);

  card.addEventListener("click", function () {
    card.classList.add("open");
  });
};

newCard(1);
newCard(2);
newCard(3);
newCard(4);
