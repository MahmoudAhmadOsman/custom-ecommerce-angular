$(document).ready(function () {
  //Bags heart

  $(".bags .bags__content__container .fa-heart").click(function () {
    $(this).addClass("fas fa-heart");
  });

  //Steps script
  $(".steps_container ul li a").click(function (e) {
    //   //alert($(this).text());
    //  $(this).addClass("active-text").siblings().removeClass("active-text");
    //   // $(".steps_container ul li a").removeClass("active-text");
    //   // $(this).next().addClass("active-text");
    //   // e.preventDefault();
  });

  //Slider
  // $("#myCarousel").carousel({
  //   interval: 322000,
  // });

  //Scroll to element
  $("ul.sidebar-ul-links a").click(function (e) {
    var targetHref = $(this).attr("href");

    $("html, body")
      .delay(20)
      .animate(
        {
          scrollTop: $(targetHref).offset().top,
        },
        100
      );

    e.preventDefault();
  });

  //Side bar ul links
  $("ul.sidebar-ul-links a").click(function () {
    $(this).addClass("sidebar-active").siblings().removeClass("sidebar-active");
  });
});
