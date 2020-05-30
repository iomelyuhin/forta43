$(document).ready(function () {
	//! слайдер работ
  $(".slider__list").slick({
		dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
					slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //! переключение видов работ

	//*удаляем активный класс со всех кнопок
	function removeActiveClassFromButton() {
		$(".works__slider-choice-link").each(function () {
			$(this).removeClass("active")
		})
	}




	//*применяем активный класс со всех кнопок
	$(".works__slider-choice-link")
		.click(function (e) {

				removeActiveClassFromButton()
				$(this).addClass("active")
				applyCurrentSlider(e.target.dataset.type)
				// console.log(e.target.dataset.type);
				$(".slider__list").removeClass("active")
			})
			

	
	
});

