/**
Для усіх посилань зі сторінки додайте атрибут target="\_blank", якщо
href починається на`https://
 */
$(document).ready(function () {
  const links = $("a")
    .filter(function () {
      return /^(https\:\/\/)/.test($(this).attr("href"));
    })
    .attr("target", "_blank");
});
