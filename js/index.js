$(function(){
    //var header = document.getElementById('header');

    var ancho = $(window).width(),
        menu  = $('#menu'),
        boton = $('#boton'),
        icono = $('#boton .icono');

        if(ancho < 720) {
            menu.hide();
        }
});