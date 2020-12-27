$(document).ready(function () {
  $(".fa-chevron-up").click(function () {
    $(".sort_by_links ul li").toggle();
  });

  /*Start of cart items script*/
  $(".row-2 .fa-chevron-down").click(function () {
    $(".row-1 p").toggle();
  });
  /*End of cart items script*/
});
