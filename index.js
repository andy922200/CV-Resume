$(document).ready(function () {
  $('.showMenu').on('click', function (event) {
    event.preventDefault();
    $('body').toggleClass('menu-show');
  });
});