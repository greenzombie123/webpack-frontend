function changeLinkColor(linkName) {
  const links = document.querySelectorAll(".header__link");
  const currentLink = document.querySelector(linkName);
  links.forEach((link) => link.classList.remove("header__link--orange"));
  currentLink.classList.add("header__link--orange");
}

function removeContent() {
  const content = document.querySelector(".content");
  while (content.nextElementSibling) {
    document.body.removeChild(content.nextElementSibling);
  }
}

function changeHeaderText(text1, text2) {
  if (!text2) {
    const bigText = document.querySelector(".hero-block__bigText");
    bigText.textContent = "";
    bigText.textContent = text1;
  } else {
    const textnode1 = document.createTextNode(text1);
    const textnode2 = document.createTextNode(text2);
    const br = document.createElement("br");

    this.textContent = "";
    this.appendChild(textnode1);
    this.appendChild(br);
    this.appendChild(textnode2);
  }
}

function disableLink(link) {
  const links = document.querySelectorAll(".header__link");
  const currentLink = document.querySelector(link);
  links.forEach((link) => link.classList.remove("header__link--disabled"));
  currentLink.classList.add("header__link--disabled");
}

export { changeHeaderText, changeLinkColor, removeContent, disableLink };
