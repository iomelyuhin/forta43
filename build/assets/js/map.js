"use strict";

document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init); // инициализируем карту

  var placemarks = [//создаём массив с объектами для карты
  {
    latitude: 58.60272174,
    longitude: 49.67305380,
    hintContent: 'Киров',
    balloonContent: '23 выполненных проектов'
  }, {
    latitude: 58.54620284,
    longitude: 50.04556438,
    hintContent: 'Кирово-чепецк',
    balloonContent: '12 выполненных проектов'
  }, {
    latitude: 58.73173712,
    longitude: 50.18212100,
    hintContent: 'Слободской',
    balloonContent: '9 выполненных проектов'
  }],
      geoObjects = [];

  function init() {
    //создаем функцию карт
    var map = new ymaps.Map('map', {
      center: [58.63889197, 49.90425194],
      //координаты центра карты
      zoom: 10,
      //коэффицент масштабирования
      controls: ['zoomControl'],
      //подключаем нужные элементы управления
      behaviors: [//поведение по умолчанию, если пустой, то ничего не работает 
      'drag' //перетаскивание по кнопке мыши
      ]
    });

    for (var i = 0; i < placemarks.length; i++) {
      //перебираем массив, подставляя переменные
      geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
        //создаем флаг, координаты центра
        hintContent: placemarks[i].hintContent,
        //создаём хинт
        balloonContent: placemarks[i].balloonContent //создаём балун

      }, {
        iconLayout: "default#image",
        //будем редактировать стандарную иконку
        iconImageHref: "/assets/img/content/flag.png",
        //путь к иконке
        iconImageSize: [100, 30],
        //ширина, высота иконки
        iconImageOffset: [-50, -30] //смещение наполовину влево и на 100% вверх
        //iconImageClipRect: [[450,28], [470,38]] //для спрайта задаём координаты левого верхнего и правого нижнего углов.

      });
    }

    var clusterer = new ymaps.Clusterer({
      //кластеризация близлежащих меток 
      clusterIcons: [{
        href: "/assets/img/content/flag.png",
        size: [100, 30],
        offset: [-50, -30]
      }],
      clusterIconContentLayout: null
    });
    map.geoObjects.add(clusterer); //добавляем кластер
    //map.geoObjects.add(placemark); //добавляем флаг на карту

    clusterer.add(geoObjects);
  }
})();