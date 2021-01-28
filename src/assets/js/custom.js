$(document).ready(function () {
  //Bags heart

  $(".bags .bags__content__container .fa-heart").click(function () {
    $(this).addClass("fas fa-heart");
  });

  //Steps script
  $(".step_one ul li a").click(function (e) {
    //alert($(this).text());
    $(this).parent().addClass("active").siblings().removeClass("active");

    //e.preventDefault();
  });
});
