$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar-wagon').addClass('shrink');
  } else {
    $('.navbar-wagon').removeClass('shrink');
  }
  });
});
