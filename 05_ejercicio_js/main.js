

$("index.html").ready(function(){
    $("h1").show()
    $("#carrete").hide()
})

$("h1").on("click", function(){
  
    $("h1").hide()
    $("#carrete").show()
   
})

$("#1").on("mouseover",function(){
   
    $("#1").css("width", "300")
   
})
$("#1").on("mouseout",function(){ 
    $("#1").css("width", "250")


    })

    $("#2").on("mouseover",function(){
   
        $("#2").css("width", "300")  
    })
    $("#2").on("mouseout",function(){ 
        $("#2").css("width", "250")
        })
    
        $("#3").on("mouseover",function(){
   
            $("#3").css("width", "300")        
        })
        $("#3").on("mouseout",function(){ 
            $("#3").css("width", "250")
            })
        
            $("#4").on("mouseover",function(){
   
                $("#4").css("width", "300")
            })
            $("#4").on("mouseout",function(){ 
                $("#4").css("width", "250")    
                })
            
                        
