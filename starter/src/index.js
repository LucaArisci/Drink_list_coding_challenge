const drinks = [
  {
    price: 10,
    name: "Manhattan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/A_Manhattan.jpg",
  },
  {
    price: 8,
    name: "Old Fashioned",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Whiskey_Old_Fashioned1.jpg",
  },
  {
    price: 12,
    name: "Margarita",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/800px-MargaritaReal.jpg",
  },
  {
    price: 8,
    name: "Bloody Mary",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Bloody_Mary_Coctail_with_celery_stalk_-_Evan_Swigart.jpg",
  },
];

const render = () => {
  document.getElementById("app").innerHTML = `
    <h1>Our drink list</h1>
    <div>
      <header>
        <div class="col">Image</div>
        <div class="col">Name</div>
        <div class="col">Price</div>
      </header>
      ${drinks
        .map(
          (d) => `
        <div class="row">
          <div class="col"><img src="${d.image}" width="50"></div>
          <div class="col">${d.name}</div>
          <div class="col">${d.price}€</div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
};

render();
