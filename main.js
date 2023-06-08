$(document).ready(function () {
  $("#toggleBtn").click(function () {
    if ($(this).data("flag")) {
      $(".list-items").addClass("responsive-nav");
      $("#hamburger").removeClass("fa-bars").addClass("fa-xmark");
      $(this).data("flag", false);
    } else {
      $(".list-items").removeClass("responsive-nav");
      $("#hamburger").removeClass("fa-xmark").addClass("fa-bars");
      $(this).data("flag", true);
    }
  });
});
