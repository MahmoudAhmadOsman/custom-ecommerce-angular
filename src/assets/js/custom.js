$(document).ready(function () {
  //Bags heart

  $(".bags .bags__content__container .fa-heart").click(function () {
    $(this).addClass("fas fa-heart");
  });

  //Steps script
  $(".steps_container ul li a").click(function (e) {
    //alert($(this).text());
    // e.preventDefault();
  });

  //Slider
  // $("#myCarousel").carousel({
  //   interval: 322000,
  // });
});
