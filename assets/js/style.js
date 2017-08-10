$(document).ready(function() {
    "use strict";
    $("#scrollTop").on("click", function() {
        $("body").animate({
            scrollTop: 0
        }, 1e3)
    }), $(".screens-slider").owlCarousel({
        loop: !0,
        margin: 20,
        dots: !0,
        nav: !0,
        smartSpeed: 700,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            600: {
                items: 1,
                nav: !0
            },
            1e3: {
                items: 1,
                nav: !0,
                loop: !0
            }
        }
    }), $(".testimonials-slider").owlCarousel({
        loop: !0,
        margin: 20,
        dots: !0,
        nav: !0,
        smartSpeed: 700,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            600: {
                items: 1,
                nav: !0
            },
            1e3: {
                items: 1,
                nav: !0,
                loop: !1
            }
        }
    });
    var a, t = 0,
        s = $(".navbar");
    $(window).on("scroll", function() {
        $(this).scrollTop() >= 5 ? $(".navbar").addClass("active") : $(".navbar").removeClass("active");
        var e = $(window).scrollTop(),
            o = s.height();
        a < (t = e) && e > o + o ? s.addClass("scrollUp") : a > t && !(e <= o) && s.removeClass("scrollUp"), a = t, $(window).scrollTop() >= 2e3 ? $("#scrollTop").addClass("active") : $("#scrollTop").removeClass("active")
    }), $(".link-scroll").bind("click", function(a) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top
        }, 1e3), a.preventDefault()
    }), $("body").scrollspy({
        target: "#navbarcollapse",
        offset: 80
    }), (new WOW).init(), $(window).on("load", function() {
        $(".preloader").fadeOut(500, function() {
            $(this).remove()
        })
    }), $(".has-background-text").each(function() {
        $('<span class="text-bg"></span>').prependTo(this);
        var a = $(this).attr("data-text");
        $(this).find(".text-bg").text(a)
    }), $(".has-background-text-gray").each(function() {
        $('<span class="text-bg-gray"></span>').prependTo(this);
        var a = $(this).attr("data-text");
        $(this).find(".text-bg-gray").text(a)
    }), $(".with-bg-text").each(function() {
        $('<span class="heading-bg-text"></span>').prependTo(this);
        var a = $(this).attr("data-text");
        $(this).find(".heading-bg-text").text(a)
    })
});