$(function() {
    var contador = 1;
    var pull = $('.op-menu');
    body = $('body');
    menu = $('nav');

    $(pull).click(function(){
        menu.slideDown(1000);
        return false;
    });


     $(body).click(function(){
            menu.slideUp(1000); 
    });

});