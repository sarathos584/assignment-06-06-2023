$(document).ready(function () {
  $("#toggleBtn").click(function () {
    if ($(this).data("flag")) {
      $(".list-items").addClass("responsive-nav");
      $("#hamburger").attr("src", "./assets/xmark-icon.svg");
      $(this).data("flag", false);
    } else {
      $(".list-items").removeClass("responsive-nav");
      $("#hamburger").attr("src", "./assets/bar-icon.svg");
      $(this).data("flag", true);
    }
  });
});
