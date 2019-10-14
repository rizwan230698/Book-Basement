$(".editBookButton").on("click",function(){
    $(this).css("display","none")
    $("#bookDescription").css("display","none")
    $("#text").css("display","none")
    $("#bookImage").css("display","none")
    $(".deleteBookButton").css("display","none")
    $("#price").css("display","none")
    $(".formDiv").css("display","block")
})

// $(".formEditButton").on("click",function(){
//     var data = {
//         title : $(".bookTitle").val(),
//         author: $(".bookAuthor").val(),
//         description: $(".bookDescription").val(),
//         price: $(".bookPrice").val()
//     }
//     $.ajax({
//         url : '/profile/edit',
//         type: 'PUT',
//         data: data,
//         dataType: 'json',
//         success: function(){
//             alert('Book Updated')
//         }
//     })
// })