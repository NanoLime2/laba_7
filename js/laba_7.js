var slideNumber = 0; /*Переменная номера слайда*/
function showSlides() { /*Основная функция*/
  var i; /*Локальная переменная счетчик*/
  var slides = document.getElementsByClassName("Slides"); /*Записываем в переменную класс "Slides"*/
  var dots = document.getElementsByClassName("dot"); /*Записываем в переменную класс "dot"*/
  /*Если текущий слайд не превышает количество всех слайдов */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; /*Скрываем слайд и увеличиваем счетчик на 1*/
  }
  slideNumber++;
  /*Как только текущий слайд превышает количество всех слайдов, меняем номер слайда снова на первый*/
  if (slideNumber > slides.length) {
      slideNumber = 1
  }
  /*Как только меняется слайд, меняет цвет соответствующая точка-индикатор*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNumber-1].style.display = "block"; /*Показываем слайд*/
  dots[slideNumber-1].className += " active"; /*Показываем активную точку-индикатор*/
  setTimeout(showSlides, 2000); /*Повторять данную функцию каждые 2000млс(2 секунды)*/
}
/*Примечание:
  Так как функция вызывает саму себя, она циклична, следовательно бесконечна.
*/
