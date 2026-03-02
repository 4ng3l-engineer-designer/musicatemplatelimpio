(function ($) {
  "use strict";

  $(document).ready(function () {

    // Solo ejecutar en la página TikTok
    if (!$("body").hasClass("page-tiktok")) return;

    var $slider = $(".hero-images-slider");
    if (!$slider.length) return;
    if ($slider.hasClass("slick-initialized")) return;

    // 🔥 Inicialización especial para TikTok (slider fijo)
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,

      autoplay: false,
      autoplaySpeed: 9999999,
      speed: 0,

      arrows: false,
      dots: false,
      infinite: false,
      centerMode: false,
      variableWidth: false,
      focusOnSelect: false,

      // 🚫 BLOQUEAR TODO movimiento del slider
      swipe: false,
      draggable: false,
      touchMove: false,
      accessibility: false,
      pauseOnHover: false,
      pauseOnFocus: false,

      responsive: [
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            swipe: false,
            draggable: false,
            touchMove: false,
          },
        },
      ],
    });

    // 🛑 Evita que slick capture eventos del video
    $(document).on(
      "mousedown.tiktokFix touchstart.tiktokFix pointerdown.tiktokFix click.tiktokFix",
      ".page-tiktok .tiktok-container, .page-tiktok .tiktok-iframe",
      function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    );

    // 🛑 Evita dragstart
    $(document).on(
      "dragstart.tiktokFix",
      ".page-tiktok .tiktok-container, .page-tiktok .tiktok-iframe",
      function (e) {
        e.preventDefault();
      }
    );

  });

})(jQuery);