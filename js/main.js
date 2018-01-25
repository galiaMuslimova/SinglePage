$(".btn-toogle-menu").click(function () {
  var menuDisplaying = $(".nav-primary").css('display');
  if (menuDisplaying == "none") {
    $(".nav-primary").css('display', 'block');
  }
  else {
    $(".nav-primary").css('display', 'none');
  }
});
$(".feature-image").hover(
  function () {
    $(this).addClass('feature-hover');
    var flag = $(this).children('.image-flag');
    flag.show();
  },
  function () {
    $(this).removeClass('feature-hover');
    var flag = $(this).children('.image-flag');
    flag.hide();
  }
);
