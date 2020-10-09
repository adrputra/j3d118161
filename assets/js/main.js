// Toggle .header-scrolled class to #first when page is scrolled
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#first').addClass('header-scrolled');
    } else {
      $('#first').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#first').addClass('header-scrolled');
  }

  // Back to top button
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn('slow');
//     } else {
//       $('.back-to-top').fadeOut('slow');
//     }
//   });

//   $('.back-to-top').click(function() {
//     $('html, body').animate({
//       scrollTop: 0
//     }, 1500, 'easeInOutExpo');
//     return false;
//   });