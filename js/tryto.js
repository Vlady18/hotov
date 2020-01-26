$(document).ready(function() {
    $('#try1').click(function() {
        $('#try1').css('width', '90%');
        $('#try2').css('width', '10%');
        $('.prices_right').css('display', 'none');
        $('.prices_left').fadeIn(400);
        $('.prices_left').css('display', 'flex');
        $('#kvar_an').css('display', 'none');
        $('#try2').css('display', 'flex');
        $('.kvartiry').css('display', 'block');
        $('#komer_an').css('display', 'inline-block');
        $('#komer_an').css('transform', 'rotate(270deg)');
        $('#komer_an').addClass('underline_kvar');
        $('#try2').css('background-image', 'none');
        $('#try2').css('opacity', '1');
        $('#try1').css('opacity', '1');
    })
    $('#try2').click(function() {
        $('#try2').css('width', '90%');
        $('#try1').css('width', '10%');
        $('.prices_left').css('display', 'none');
        $('.prices_right').fadeIn(400);
        $('.prices_right').css('display', 'flex');
        $('#komer_an').css('display', 'none');
        $('#try1').css('display', 'flex');
        $('.komercheskiye').css('display', 'block');
        $('#kvar_an').css('display', 'inline-block');
        $('#kvar_an').css('transform', 'rotate(270deg)');
        $('#kvar_an').addClass('underline_kvar');
        $('#try1').css('background-image', 'none');
        $('#try1').css('opacity', '1');
        $('#try2').css('opacity', '1');

    })
})
