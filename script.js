$(document).ready(function(){

    $("#submit-form").validate({

        rules:{
            name:{
                required:true,
                noSpace:true
            },
            email:{
                required:true,
                email:true,
                noSpace:true
            },
            message:{
                required:true,
                minlength:8 ,
                noSpace:true  
            }

            
        },
        messages:{
            name:{
                required:"Enter name"
            },
            email:{
                required:"Enter email address",
                email:"Enter valid email address"
            },
            message:{
                required:"Enter message",
                minlength:"The message should be atleast 8 characters"
            }

        }
    })

})