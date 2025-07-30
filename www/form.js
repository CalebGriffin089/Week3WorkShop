$(document).ready(function(){
    $("#dataform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });
    function ajaxPost(){
        var formData = {
            email : $("#email").val(),
            password : $("#pwd").val()
        }
        $.ajax({
            type : "POST", 
            contentType : "application/json",
            url : "http://localhost:3000/api/dataform",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(response){
                if(response.valid == true){ 
                    console.log("test");
                    window.location.href = "http://localhost:3000/account";
                    // document.body.style.backgroundColor = "grey";
                    // document.getElementById("”errormsg”").style.display = "none";

                }else{
                    document.body.style.backgroundColor = "grey";
                    document.getElementById("”errormsg”").style.display = "block";
                }

            },
            error : function(e){
                alert("Incorrect email or password");
                console.log("Error: ", e);
            }
        })
    }
});