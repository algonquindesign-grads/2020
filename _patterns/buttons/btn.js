var $btn = $('.top-btn')

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    $btn.addClass('show');
  } else {
    $btn.removeClass('show');
  }
});

$btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

;$('.play-sound').click(function() {
    if ($('video').get(0).muted == true) {
        $('video').get(0).muted = false;
    } else {
        $('video').get(0).muted = true;
    }
});
