import "./styles.css";
import { drinks } from "./drinkList";

/*
    I'm creating a function that takes a boolean value as a flag to choose the
    sorting order, true for ascending and false for descending. 
 
    I'm using Array.prototype.sort() to sort array's objects by price when the
    difference is equal to zero and by name when it isn't.
 
    Array.prototype.sort() uses a compare function based on 2 parameters
    that are the current comparing values, when the return value is less than
    0 sorts d1 before d2, when is bigger than 0 sorts d1 after d2 and when is
    strictly equal to 0 the order remains unchanged.
*/

const sortDrinks = (isAscendingOrder) => {
  return drinks.sort((d1, d2) => {
    if (isAscendingOrder) {
      if (d1.price === d2.price) {
        return d1.name.localeCompare(d2.name);
      }
      return d1.price - d2.price;
    } else {
      if (d2.price === d1.price) {
        return d2.name.localeCompare(d1.name);
      }
      return d2.price - d1.price;
    }
  });
};

/*
    In the render() function I'm just mapping on the sortDrinks() function called
    in ascending mode and adding different <div> tags in order to obtain a better
    structure for future changes.
*/

const render = () => {
  document.getElementById("app").innerHTML = `
    <h1 class="heading-primary">Our drink list</h1>
    <div class="table">
      <header class="table-headers">
        <div class="col">Image</div>
        <div class="col">Name</div>
        <div class="col">Price</div>
      </header>
      <div class="table-elements">
            ${sortDrinks(true)
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
    </div>
    <div class="btn-container">
      <button class="btn ascending">
        reverse sorting
      </button>
    </div>
  `;
};

render();

/*
    At last I added an event listener on the new button that toggles the
    "ascending" class of the tag which is used as flag for the selection
    of the sorted array assignment.
 
    Once the sortedDrinks is assigned, the inner elements of the "table-elements"
    <div> container are overwritten with the resorted ones.
 
    */

const elements = document.querySelector(".table-elements");
const btnSort = document.querySelector(".btn");

btnSort.addEventListener("click", function () {
  btnSort.classList.toggle("ascending");

  const sortedDrinks = sortDrinks(btnSort.classList.contains("ascending"));

  elements.innerHTML = `${sortedDrinks
    .map(
      (d) => `
        <div class="row">
          <div class="col"><img src="${d.image}" width="50"></div>
          <div class="col">${d.name}</div>
          <div class="col">${d.price}€</div>
        </div>
      `
    )
    .join("")}`;
});
