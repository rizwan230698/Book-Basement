$(document).ready(function(){
if($(".profile-card-title").text()==""){
    $("#noBooks").css("display","block")
}
return
})
var x = $(".profile-card-title")
for(var i =0; i<x.length; i++){
    if(x[i].innerHTML.length > 13){
        x[i].innerHTML = x[i].innerHTML.substring(0,13) + "...";
    }
}