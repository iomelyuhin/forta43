document.addEventListener(`DOMContentLoaded`, function () {
  //JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });

  //Конец JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
	// Открытие/закрытие каталога
	const catBtn = document.getElementById("catBtn")
	const cat = document.getElementById("cat")
	const closeCatBtn = document.getElementById("closeCat")
	
	catBtn.addEventListener("click", e => {
		e.preventDefault();
		// console.log('ckick');
		cat.classList.toggle("active")
		
	})

	closeCatBtn.addEventListener("click", e => {
		e.preventDefault();
		cat.classList.remove("active")
	})
	// Конец Открытие/закрытие каталога
	
	// открываем меню на мобильных
	const burger = document.querySelector(".hamburger")
	const mainMenu = document.querySelector(".header__nav-list")
	
	burger.addEventListener("click", e => {
		e.preventDefault()
		cat.classList.remove("active")
		mainMenu.classList.toggle("active")
		burger.classList.toggle("is-active")
	})
	// Конец открываем меню на мобильных
});
