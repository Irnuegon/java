let colores = ["blue","yellow","red","grey","green","orange","purple"]


$("#anuncio").ready(function(){
   $("#anuncio")
    .width(500)
    .height(500)
    .text("!CLICK! para cambiar de color")
    .hide()
    .fadeIn(3000)})
  
    $("#anuncio").on("click",function(){
        let color = colores [Math.floor(Math.random()*colores.length)];
        $("#anuncio").css("background", color);
    })



