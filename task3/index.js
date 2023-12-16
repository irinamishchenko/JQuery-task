/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
  const divs = $("h3 + div");
  const titles = divs.prev();
  for (let i = 0; i < divs.length; i++) {
    titles[i].before(divs[i]);
  }
});
