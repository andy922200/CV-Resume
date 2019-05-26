$(document).ready(function () {
  $('.showMenu').on('click', function (event) {
    event.preventDefault();
    $('body').toggleClass('menu-show');
  });
  $(".menu li a").on("click", function (event) {
    $('body').toggleClass('menu-show');
  });
});