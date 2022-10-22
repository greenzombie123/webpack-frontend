import {
  changeHeaderText,
  changeLinkColor,
  removeContent,
  disableLink,
} from "./helper";

import hamburg from "./assets/harburg.jpg"
import fruity from 'images/fruitypancakes.jpg'
import harburger from "images/harburger.jpg"
import bowl from 'images/bowl.jpg'


export function loadRecipesPage() {
  // remove content div (removeContent())
  removeContent();
  // Parse string and create html
  createContent();
  // change textContent of header text  (changeHeaderText())
  changeLinkColor(".header__link--recipes");
  // disable link
  disableLink(".header__link--recipes");
  // change text of hero header
  changeHeaderText("Our Recipes");
}

function createContent() {
  const content = document.querySelector(".content");

  const htlm = `<div class="recipes-header">
  <h2 class="recipes-header__text">Recipes</h2>
</div>
<div class="recipe-menu">
  <div class="recipe-menu__descript">
    <h3 class="recipe-menu__title">Milky Ground</h3>
    <p class="recipe-menu__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium eos non mollitia nulla a commodi </p>
    <span class="recipe-menu__price">$ 13.00</span>
  </div>
  <img
    src=${bowl}
    alt=""
    class="recipe-menu__img"
  />
  <div class="recipe-menu__descript">
    <h3 class="recipe-menu__title">Patty Meal</h3>
    <p class="recipe-menu__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium eos non mollitia nulla a commodi </p>
    <span class="recipe-menu__price">$ 10.00</span>
  </div>
  <img
    src=${hamburg}
    alt=""
    class="recipe-menu__img"
  />
  <img
    src=${harburger}
    alt=""
    class="recipe-menu__img"
  />
  <div class="recipe-menu__descript">
    <h3 class="recipe-menu__title">Breakfast Burg</h3>
    <p class="recipe-menu__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium eos non mollitia nulla a commodi </p>
    <span class="recipe-menu__price">$ 15.00</span>
  </div>
  <img
    src=${fruity}
    alt=""
    class="recipe-menu__img"
  />
  <div class="recipe-menu__descript">
    <h3 class="recipe-menu__title">Fruity Panny</h3>
    <p class="recipe-menu__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium eos non mollitia nulla a commodi </p>
    <span class="recipe-menu__price">$ 11.00</span>
  </div>
</div>`;

  content.insertAdjacentHTML("afterend", htlm);
}
