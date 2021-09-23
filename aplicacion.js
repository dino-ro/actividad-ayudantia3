$(document).ready(function(){
    var boton = $("#botoncin");
    var imagen = $("#imagen2");

    boton.click(function(){
        imagen.toggle(1000, function(){
            
        });
    
    })


    var botondato = $("#botondatos");
    var titulo = $("#titulodatos");

    botondato.click(function(){
        titulo.text("En realidad no son datos cute");
    })
  

});




