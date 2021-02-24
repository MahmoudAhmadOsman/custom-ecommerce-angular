$(document).ready(function () {
  //Bags heart

  $(".bags .bags__content__container .fa-heart").click(function () {
    $(this).addClass("fas fa-heart");
  });

  //Steps script
  $(".steps_container ul li a").click(function (e) {
    //alert($(this).text());

    // $(this).addClass("active-text").siblings().removeClass("active-text");

    // $(".steps_container ul li a").removeClass("active-text");
    // $(this).next().addClass("active-text");
    e.preventDefault();
  });

  //Slider
  // $("#myCarousel").carousel({
  //   interval: 322000,
  // });

  //Scroll to
  var headerHeight = $(".left-menu-links .list-group").outerHeight();
  $(".slide-section").click(function (e) {
    var linkHref = $(this).attr("href");
    $("html, body")
      .delay(8)
      .animate(
        {
          scrollTop: $(linkHref).offset().top - headerHeight + 1,
        },
        100
      );

    e.preventDefault();
  });
});
