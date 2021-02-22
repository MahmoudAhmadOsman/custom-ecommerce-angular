$(document).ready(function () {
  //Bags heart

  $(".bags .bags__content__container .fa-heart").click(function () {
    $(this).addClass("fas fa-heart");
  });

  //Steps script
  $(".bs-main-menu nav a").click(function (e) {
    //alert($(this).text());
    // $(this).parent().addClass("active").siblings().removeClass("active");
    $(this).parent().addClass("active").siblings().removeClass("not_active");

    //e.preventDefault();
  });

  //Slider
  // $("#myCarousel").carousel({
  //   interval: 322000,
  // });
});
