! function() {
    "use strict";
    $(document).ready(function() {
        function e() { $(".hero-content").css({ height: $(window).height() }) }
        $(".hero").localScroll({ duration: 600 }), e(), $(window).resize(e), $("#counter--js").countdown("2020/12/24", function(e) { $(this).html(e.strftime("<span>%D</span> d <span>%H</span> h <span>%M</span> m ")) }), $(".gallery").imagesLoaded(function() { $(".gallery-grid").packery({ itemSelector: ".-image" }) }), $(".lightbox--js").magnificPopup({ type: "image", mainClass: "mfp-with-zoom mfp-fade", gallery: { enabled: !0 }, zoom: { enabled: !0, duration: 300, easing: "ease-in-out", opener: function(e) { return e.is("img") ? e : e.find("img") } } }), $("#testimonials-slider").slick({ dots: !0, infinite: !0, speed: 500, fade: !0, adaptiveHeight: !0, draggable: !1, cssEase: "linear", appendDots: "#slick-dots", appendArrows: "#slick-arrow" })
    })
}();