import {
    changeHeaderText,
    changeLinkColor,
    removeContent,
    disableLink,
  } from "./helper";
  
  
  export function loadServicesPage() {
    // remove content div (removeContent())
    removeContent();
    // Parse string and create html
    createContent();
    // change textContent of header text  (changeHeaderText())
    changeLinkColor(".header__link--services");
    // disable link
    disableLink(".header__link--services");
    // change text of hero header
    changeHeaderText("Our Services");
  }
  
  function createContent() {
    const content = document.querySelector(".content");
  
    const htlm = `<div class="services-header">
    <h2 class="services-header__text">Services</h2>
  </div>
  <div class="items-container">
      <div class="items-container__item">
          <div class="items-container__img items-container__img--hamburger"></div>
          <h3 class="items-container__header">High Quality Food</h3>
          <p class="items-container__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              architecto</p>
      </div>
      <div class="items-container__item">
          <div class="items-container__img items-container__img--pancakes"></div>
          <h3 class="items-container__header">Natural Ingredients</h3>
          <p class="items-container__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              architecto</p>
      </div>
      <div class="items-container__item ">
          <div class="items-container__img items-container__img--delivery"></div>
          <h3 class="items-container__header">Take Out Otions</h3>
          <p class="items-container__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              architecto</p>
      </div>
      <div class="items-container__item ">
          <div class="items-container__img items-container__img--customer-service"></div>
          <h3 class="items-container__header">Good Customer Service</h3>
          <p class="items-container__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              architecto</p>
      </div>
      <div class="items-container__item">
          <div class="items-container__img items-container__img--hamburger"></div>
          <h3 class="items-container__header">High Quality Food</h3>
          <p class="items-container__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              architecto</p>
      </div>
      <div class="items-container__item">
          <div class="items-container__img items-container__img--pancakes"></div>
          <h3 class="items-container__header">Natural Ingredients</h3>
          <p class="items-container__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              architecto</p>
      </div>
      <div class="items-container__item ">
          <div class="items-container__img items-container__img--delivery"></div>
          <h3 class="items-container__header">Take Out Otions</h3>
          <p class="items-container__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              architecto</p>
      </div>
      <div class="items-container__item ">
          <div class="items-container__img items-container__img--customer-service"></div>
          <h3 class="items-container__header">Good Customer Service</h3>
          <p class="items-container__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              architecto</p>
      </div>
  </div>`;
  
    content.insertAdjacentHTML("afterend", htlm);
  }
  