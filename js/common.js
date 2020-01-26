$(document).ready(function() {
	var menu = $('#topmenuidtest');
	$('#toggleload').click(function(){
		menu.slideToggle();
		$('#overlay').slideToggle();
		return false;
	});
	$(window).resize(function(){
	var w = $(window).width();
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
});
});
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1,
      max: 99,
      values: [ 3, 5 ],
       slide: function( event, ui ) {
        $( ".h_build .bot_flor" ).val( +ui.values[ 0 ]);
        $( ".h_build .top_flor" ).val( +ui.values[ 1 ]);
      }
    });
     $( ".h_build .bot_flor" ).val( + $( "#slider-range" ).slider( "values", 0 ));
     $( ".h_build .top_flor" ).val( + $( "#slider-range" ).slider( "values", 1 ));
  });
$(document).ready(function(){
  $('.review_obert').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
	  {
		  breakpoint: 850,
		  settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
		  }
	  },
	  {
		  breakpoint: 690,
		  settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
		  }
	  }
  ]
  });
  function show_modal(id){
  	$('#' + id).css('display', 'block');
	$('#overlay').css('display', 'block');
  }
  function close_modal(id){
  	$('#' + id).css('display', 'none');
	$('#overlay').css('display', 'none');
  }
  $('#modal1_toggle').click(function() {
	  show_modal('modal1');
  });
  $('#modal2_toggle').click(function() {
	  show_modal('modal2');
  });
  $('#modal3_toggle').click(function() {
	  show_modal('modal3');
  });
  $('#modal4_toggle').click(function() {
	  show_modal('modal4');
  })
  $('#modal5_toggle').click(function() {
	  show_modal('modal5');
  })
$('#overlay, #close_modal').click(function() {
	close_modal('modal1');
	close_modal('modal2');
	close_modal('modal3');
	close_modal('modal4');
	close_modal('modal5');

});
});
function updater(d, h, m, s) {
  var baseTime = new Date(2015, 8, 27);
  var period = 3*24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    // d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;

    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

updater(document.getElementById("days"),
 document.getElementById("hours"), document.getElementById("minutes"),
 document.getElementById("seconds"));
 var wow = new WOW(
  {
    offset:       -200
}// distance to the element when triggering the animation (default is 0)
);
 new WOW().init();
