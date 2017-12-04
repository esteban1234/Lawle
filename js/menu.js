$(function() {
    var contador = 1;
    var pull = $('.op-menu');
    menu = $('nav');

    $(pull).on('click', function(e) {
        e.preventDefault();
        if (contador == 1) {
           menu.slideToggle(1000);           
           pull.css({
               left: '78%',
               transitionProperty:'opacity, top',
               transitionDuration: '2s'
           });

            contador = 0;
        } else {
            menu.slideToggle(1000);
             pull.css({
               left: '40px',
               transitionProperty:'opacity, top',
               transitionDuration: '2s',
               position:'fidex'
           });
            contador = 1;
        }
    });
});
