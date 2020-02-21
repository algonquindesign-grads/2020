var video=$('.banner-video video');
var img=$('.banner-video img');

video.on('loadeddata', function(){
  video.removeClass('hidden');
  img.addClass('hidden');
});
