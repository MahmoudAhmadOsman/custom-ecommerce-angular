$(document).ready(function () {
  $(".step_one ul li a").click(function (e) {
    $(this).parent().addClass("active").siblings().removeClass("active");

    e.preventDefault();
  });
});
