$(document).ready(function () {
  //Bags heart

  $(".bags .bags__content__container .fa-heart").click(function () {
    //$(this).css("background-color", "#000");
    //$(".bags .bags__content__container .fa-heart").css("background-color", "#f00");
    //alert("Clicked!");
    $(this).addClass("fas fa-heart");
  });

  //Sort product
  $(".fa-chevron-up").click(function () {
    $(".sort_by_links ul li").toggle();
  });

  $(".step_one ul li a").click(function (e) {
    $(this).parent().addClass("active").siblings().removeClass("active");
    //$(this).css("color", "#fff");

    // e.preventDefault();
  });
});
