"use strict";

$(document).ready(function () {
  $('.info__current-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.maisection__slider-list'
  });
  $('.maisection__slider-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.info__current-slide',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});