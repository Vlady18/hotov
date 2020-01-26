$(document).ready(function() {
    $('#etazh1').click(function () {
        $('#etazh1').addClass('active');
        $('#etazh2').removeClass('active');
        $('#etazh2_img').fadeOut(400, function () {
            $('#etazh2_img').removeClass('floor_active');
            $('#etazh1_img').fadeIn(400);
            $('#etazh1_img').css('display', 'block');
            $('#etazh1_img').addClass('floor_active');
        });
    });


    $('#etazh2').click(function () {
        $('#etazh2').addClass('active');
        $('#etazh1').removeClass('active');
        $('#etazh1_img').fadeOut(400, function () {
            $('#etazh1_img').removeClass('floor_active');
            $('#etazh2_img').fadeIn(400);
            $('#etazh2_img').css('display', 'block');
            $('#etazh2_img').addClass('floor_active');
        });
    });
    let over = false;
    $('#opisanie').mouseenter(function(){
        over = true;
    })
    $('#opisanie').mouseleave(function(){
        over = false;
    })
    var width = $(window).width();
    if (width > 1000) {
    $(window).bind('mousewheel', function(event) {
        console.log(event);
        if(!over) return;
        if (event.originalEvent.wheelDelta >= 0) {
            $('#slaid_2').css('display', 'none');
            $('#slaid_1').css('display', 'flex');
            $('#slaid_1').addClass('animated fadeInDown')
        }
        else {
            $('#slaid_1').css('display', 'none');
            $('#slaid_2').css('display', 'block');
            $('#slaid_2').addClass('animated fadeInUp')
        }
        event.preventDefault();
    });
} else{
    $('#slaid_2').css('display', 'block');
    $('#slaid_2').css('padding-bottom', '50px');
    $('#gotop').css('display', 'none');

}

$('#gobot').click(function() {
    $('#slaid_1').css('display', 'none');
    $('#slaid_2').css('display', 'block');
    $('#slaid_2').addClass('animated fadeInUp')
});
$('#gotop').click(function() {
    $('#slaid_2').css('display', 'none');
    $('#slaid_1').css('display', 'flex');
    $('#slaid_1').addClass('animated fadeInDown')
})
});
