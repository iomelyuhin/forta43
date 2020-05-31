"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  }); //Конец JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
  // Открытие/закрытие каталога

  var catBtn = document.getElementById("catBtn");
  var cat = document.getElementById("cat");
  var closeCatBtn = document.getElementById("closeCat");
  catBtn.addEventListener("click", function (e) {
    e.preventDefault(); // console.log('ckick');

    cat.classList.toggle("active");
  });
  closeCatBtn.addEventListener("click", function (e) {
    e.preventDefault();
    cat.classList.remove("active");
  }); // Конец Открытие/закрытие каталога
  // открываем меню на мобильных

  var burger = document.querySelector(".hamburger");
  var mainMenu = document.querySelector(".header__nav-list");
  burger.addEventListener("click", function (e) {
    e.preventDefault();
    cat.classList.remove("active");
    mainMenu.classList.toggle("active");
    burger.classList.toggle("is-active");
  }); // Конец открываем меню на мобильных
});