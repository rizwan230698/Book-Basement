$(".editBookButton").on("click", function() {
  $(this).css("display", "none");
  $(".content").css("display", "none");
  $(".formDiv").css("display", "block");
});

$(".formCanceltButton").on("click", function() {
  $(".editBookButton").css("display", "inline");
  $(".content").css("display", "block");
  $(".formDiv").css("display", "none");
});
