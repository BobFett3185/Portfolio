import './style.css'

$(window).scroll(function() {
  var scroll = $(this).scrollTop();
  
  // As you scroll down (positive scroll), the scale increases from 1.0
  // Dividing by 1000 makes the zoom slow and controlled
  $(".hero-back").css({
    'transform': 'scale(' + (1 + scroll / 600) + ')'
  });
  
  // Optional: If you want the name to zoom even faster for that "sticker" feel
  $(".block-text").css({
    'transform': 'translate(-50%, -50%) scale(' + (1 + scroll / 500) + ')'
  });
});