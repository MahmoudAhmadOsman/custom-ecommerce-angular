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
    //$(".sort_by_links ul li").toggle();
    // $(".sort_by_links ul li")
    //   .addClass("fa-chevron-down")
    //   .removeClass("fa-chevron-up")
    //   .toggle();
    $(".sort_by_links ul li")
      .addClass("fa-chevron-down")
      // .removeClass("fa-chevron-up")
      .toggle();
  });

  $(".step_one ul li a").click(function (e) {
    //alert($(this).text());
    $(this).parent().addClass("active").siblings().removeClass("active");

    //e.preventDefault();
  });
});
