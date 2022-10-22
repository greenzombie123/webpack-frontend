import {
  changeHeaderText,
  changeLinkColor,
  removeContent,
  disableLink,
} from "./helper";

function initialPageLoad() {
  const homepage = createContent();
  styleContent(homepage);
  addText(homepage);
  appendContent(homepage);
  disableLink(".header__link--home");
}

function loadHomePage() {
  // remove content div (removeContent())
  removeContent();
  // change textContent of header text  (changeHeaderText())
  changeLinkColor(".header__link--home");
  // change text of hero header
  changeHeaderText.call(document.querySelector(".hero-block__bigText"), "Enjoy your food", " with Panny");
  //Dissable link
  disableLink(".header__link--home");
}

function createContent() {
  const hero_background = document.createElement("div");
  const header = document.createElement("header");
  const header_logo = document.createElement("div");
  const header_tablist = document.createElement("ul");
  const header_tab_home = document.createElement("li");
  const header_link_home = document.createElement("a");
  const header_tab_recipes = document.createElement("li");
  const header_link_recipes = document.createElement("a");
  const header_tab_services = document.createElement("li");
  const header_link_services = document.createElement("a");
  const header_tab_about = document.createElement("li");
  const header_link_about = document.createElement("a");
  const header_tab_news = document.createElement("li");
  const header_link_news = document.createElement("a");
  const header_button = document.createElement("button");
  const heroBlock = document.createElement("div");
  const heroBlock_bigText = document.createElement("h1");
  const heroBlock_smallText = document.createElement("p");
  const heroBlock_button = document.createElement("button");

  return {
    hero_background,
    header,
    header_logo,
    header_tablist,
    header_tab_home,
    header_link_home,
    header_tab_recipes,
    header_link_recipes,
    header_tab_services,
    header_link_services,
    header_tab_about,
    header_link_about,
    header_tab_news,
    header_link_news,
    header_button,
    heroBlock,
    heroBlock_bigText,
    heroBlock_smallText,
    heroBlock_button,
  };
}

function styleContent(content) {
  content.hero_background.classList.add("hero-background");
  content.header.classList.add("header");
  content.header_logo.classList.add("header__logo");
  content.header_tablist.classList.add("header__tab-list");
  content.header_tab_home.classList.add("header__tab");
  content.header_link_home.classList.add(
    "header__link",
    "header__link--orange",
    "header__link--home"
  );
  content.header_tab_recipes.classList.add("header__tab");
  content.header_link_recipes.classList.add(
    "header__link",
    "header__link--recipes"
  );
  content.header_tab_services.classList.add("header__tab");
  content.header_link_services.classList.add(
    "header__link",
    "header__link--services"
  );
  content.header_tab_about.classList.add("header__tab");
  content.header_link_about.classList.add(
    "header__link",
    "header__link--about"
  );
  content.header_tab_news.classList.add("header__tab");
  content.header_link_news.classList.add("header__link", "header__link--news");
  content.header_button.classList.add("header__button");
  content.heroBlock.classList.add("hero-block");
  content.heroBlock_bigText.classList.add("hero-block__bigText");
  content.heroBlock_smallText.classList.add("hero-block__smallText");
  content.heroBlock_button.classList.add("hero-block__button");

  //   content.header_link_home.setAttribute("diabled", "")
}

function addText(content) {
  content.header_logo.textContent = "Panny";
  content.header_link_home.textContent = "Home";
  content.header_link_recipes.textContent = "Recipes";
  content.header_link_services.textContent = "Services";
  content.header_link_about.textContent = "About";
  content.header_link_news.textContent = "News";
  content.header_button.textContent = "Contact Us";
  changeHeaderText.call(
    content.heroBlock_bigText,
    "Enjoy your food",
    " with Panny"
  );

  content.heroBlock_smallText.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,architecto";
  content.heroBlock_button.textContent = "Get Started";
}

function appendContent(elements) {
  const content = document.querySelector(".content");
  //   content.classList.add("content");

  elements.header_tablist
    .appendChild(elements.header_tab_home)
    .appendChild(elements.header_link_home);

  elements.header_tablist
    .appendChild(elements.header_tab_recipes)
    .appendChild(elements.header_link_recipes);
  elements.header_tablist
    .appendChild(elements.header_tab_services)
    .appendChild(elements.header_link_services);
  elements.header_tablist
    .appendChild(elements.header_tab_about)
    .appendChild(elements.header_link_about);
  elements.header_tablist
    .appendChild(elements.header_tab_news)
    .appendChild(elements.header_link_news);

  elements.header.appendChild(elements.header_logo);
  elements.header.appendChild(elements.header_tablist);
  elements.header.appendChild(elements.header_button);
  elements.hero_background.appendChild(elements.header);

  elements.heroBlock.appendChild(elements.heroBlock_bigText);
  elements.heroBlock.appendChild(elements.heroBlock_smallText);
  elements.heroBlock.appendChild(elements.heroBlock_button);
  elements.hero_background.appendChild(elements.heroBlock);

  //   document.body.appendChild(elements.hero_background);

  content.appendChild(elements.hero_background);
}

export { initialPageLoad, loadHomePage };
