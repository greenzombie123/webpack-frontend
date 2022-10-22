import { initialPageLoad, loadHomePage } from "./pageLoad";
import { loadRecipesPage } from "./recipespage";
import { loadServicesPage } from "./servicespages";
import "./reset.css";
import "./base.css";

function loadContent(callback) {
  callback();
}

loadContent(initialPageLoad);

const homelink = document.querySelector(".header__link--home");
const recipeslink = document.querySelector(".header__link--recipes");
const serviceslink = document.querySelector(".header__link--services");

recipeslink.addEventListener("click", loadRecipesPage, false);
homelink.addEventListener('click', loadHomePage, false);
serviceslink.addEventListener('click', loadServicesPage, false);