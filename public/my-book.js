$(".editBookButton").on("click", function() {
  $(this).css("display", "none");
  $("#bookDescription").css("display", "none");
  $("#text").css("display", "none");
  $("#bookImage").css("display", "none");
  $(".deleteBookButton").css("display", "none");
  $("#price").css("display", "none");
  $(".formDiv").css("display", "block");
});
