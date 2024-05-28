function newCard(number, action) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = number;
  document.getElementById("game").append(card);

  card.addEventListener("click", function () {
    card.classList.add("open");
    action(card);
  });
};

// callback функция

function flip(card) {
  card.classList.add("success");
}

newCard(1, flip);
newCard(2);
newCard(3);
newCard(4);
