$("#navLogin").css("display","block")
$("#signupButton").on("click",function(){
$(this).css('display','none');
$("#signupForm").css('display','block')
$("#loginButton").css('display','block');
$("#loginForm").css('display','none');
$("#forgetPasswordForm").css('display','none');
$(".fillEntries").css("display","none");
$(".passwordMatch").css('display',"none");
$(".passwordLength").css('display',"none");
$("input").val("");
})

$("#loginButton").on("click",function(){
    $(this).css('display','none');
    $("#loginForm").css('display','block');
    $("#signupButton").css('display','block');
    $("#signupForm").css('display','none');
    $(".passwordMatch").css('display',"none");
    $(".passwordLength").css('display',"none");
    })

$("#forgetPassword").on("click",function(){
    $("#loginForm").css('display','none');
    $("#forgetPasswordForm").css('display','block');
    $(".fillEntries").css("display","none")
})    

$(".signupButton").on("click",function(){
    var flag = true
    if($('#signuppassword').val().length < 8){
        $(".passwordLength").css("display","block");
        flag = false
    }
    if($('#signuppassword').val() !== $('#signupconfirmpassword').val()){
       $(".passwordMatch").css('display','block');
       flag = false
    }
    if($('#signupusername').val() == "" || $('#signupemail').val() == "" || $('#signupnumber').val() == "" || $('#signuppassword').val() == "" || $('#signupconfirmpassword').val() == ""){
        $(".fillEntries").css("display","block");
        flag = false
    }
    if(flag == true){
        var data = {
            username: $('#signupusername').val(),
            email: $('#signupemail').val(),
            password: $('#signuppassword').val(),
          };
          
  $.ajax({
  url: '/login/signup',
  type: 'POST',
  data: data,
  dataType: 'json',
  success: function(message){
    alert('Signup Successful !');
  $("#signupForm").css('display','none');
  $("#signupButton").css('display','block');
  $("#loginButton").css('display','none');
  $("#loginForm").css('display','block');
            }
           })
    }
   
    
});

$(".resetButton").on("click",function(){
    var flag = true
    if($('#resetpassword').val().length < 8){
        $(".passwordLength").css("display","block");
        flag = false
    }
    if($('#resetpassword').val() !== $('#resetconfirmpassword').val()){
        $(".passwordMatch").css('display','block');
        flag = false
     }
     if($('#resetemail').val() == "" || $('#resetpassword').val() == "" || $('#resetconfirmpassword').val() == ""){
        $(".fillEntries").css("display","block");
        flag = false
     }
        
     if(flag == true){        
        var data = {
            email: $('#resetemail').val(),
            password: $('#resetpassword').val(),
          };
    
        $.ajax({
            url: '/login/resetPassword',
            type: 'PUT',
            data: data,
            dataType: 'json',
            success: function(message){
            alert('Password Updated !');
            $("#forgetPasswordForm").css("display","none");
            $("#loginButton").css('display','block');
    
    
            }
        })
     }
    
    })
    