// JavaScript
window.sr = ScrollReveal();
sr.reveal('img:not(.no-reveal), .panel-heading', { distance: '30px', duration: 600, scale: 0.95 });
//
$(function() {
  $('a[href*="#about"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});
