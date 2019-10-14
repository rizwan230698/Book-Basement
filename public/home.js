$("#logout").css("display","block")
var x = $(".card-title")
for(var i =0; i<x.length; i++){
    if(x[i].innerHTML.length > 13){
        x[i].innerHTML = x[i].innerHTML.substring(0,13) + "...";
    }
}
$("#logout").on("click",function(){
    $.ajax({
        url: '/home/logout',
        type: 'GET',
        dataType: 'json',
        success: function(message){
            alert("Logged Out")
        }
    })
    window.location.replace("/")
})