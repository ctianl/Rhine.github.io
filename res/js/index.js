$(function() {
    //owl-carousel插件
    $(".owl-carousel").owlCarousel({
        //autoPlay: 3000, Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });

    $(".next").click(function() {
        $(".owl-carousel").trigger('owl.next');
    })
    $(".prev").click(function() {
        $(".owl-carousel").trigger('owl.prev');
    })
})

$(function() {
    //导航栏 随window scroll时的位置变化
    var navPla = $(".thisNav").offset().top
    $(window).scroll(function() {
        var ws = $(window).scrollTop()
        if (ws >= navPla) {
            $(".thisNav").css({
                "position": "fixed",
                "top": 0,

            })
            $(".thisNav").addClass("container")
        } else {
            $(".thisNav").css({
                "position": "relative",
                "top": "-90px",
            })

        }
        //scroll时网页动态效果
        var aniFirstHeight = $(".aniFirst").offset().top
        if (ws <= aniFirstHeight) {
            $(".aniFirst").css({
                "transform": "translateY(-80px)",
                "opacity": 1
            })
        }
        var aniSecondHeight = $(".aniSecond").offset().top
        if (ws + 700 >= aniSecondHeight) {
            $(".aniSecond").css({
                "transform": "translateY(0px)",
                "opacity": 1
            })
        }
        var fanHeight = $(".fan").offset().top
        if (ws + 600 >= fanHeight) {
            $(".fan").each(function(i){
                $(this).animate({
                    top:0,
                    opacity:1
                },(i+1)*500)
            })
        }

        var menuPHeight = $(".menuP").offset().top
        if (ws + 600 >= menuPHeight) {
            $(".menuP").css({
                "transform": "translateY(0px)",
                "opacity": 1
            })
        }
        var casualHeight = $(".casual").offset().top
        if (ws + 700 >= casualHeight) {
            $(".casual").css({
                "transform": "translateY(0px)",
                "opacity": 1
            })
        }
        var hcontactHeight = $(".hcontact").offset().top
        if (ws + 700 >= hcontactHeight) {
            $(".hcontact").css({
                "transform": "translateY(0px)",
                "opacity": 1
            })
        }
        var signUpHeight = $(".signUp").offset().top
        if (ws + 700 >= signUpHeight) {
            $(".signUp").css({
                "transform": "translateX(0px)",
                "opacity": 1
            })
        }
        var aniLeftHeight = $(".aniLeft").offset().top
        if (ws + 700 >= aniLeftHeight) {
            $(".aniLeft").each(function(i){
                $(this).animate({
                left: 0,
                opacity:1
                },i*1000)
                
            })
            
        }
        //button的变化
        var secondMoreHeight = $(".secondMore").offset().top
        if (ws + 600 >= secondMoreHeight) {
            $(".secondMore").css({
                "transform": "scale(1,1)",

            })
        }
        var buttonChangeHeight = $(".buttonChange").offset().top
        if (ws + 600 >= buttonChangeHeight) {
            $(".buttonChange").css({
                "transform": "scale(1,1)",
            })
        }
        // ul的变化
        var aniUlHeight = $(".aniUl").offset().top
        if (ws + 400 >= aniUlHeight) {
            $(".aniUl li").each(function(i) {
                $(this).animate({
                    top: 0,
                    opacity: 1
                }, i * 500)
            })
        }
        var inputUlHeight = $(".inputUl").offset().top
        if (ws + 400 >= inputUlHeight) {
            $(".inputUl .inputLi").each(function (i) {
                $(this).animate({
                    top: 0,
                    opacity: 1
                }, i * 500)
            })
        }

        //导航栏效果
        var homeHeight = $("#home").offset().top
        var aboutHeight = $("#about").offset().top
        var blogHeight = $("#blog").offset().top
        var menuHeight = $("#menu").offset().top
        var newsHeight = $("#news").offset().top
        var contactsHeight = $("#contact").offset().top
        if (ws >= homeHeight - 100) {
            $(".home a").css({
                "border-bottom": "2px solid orangered",
                "color": "black"
            })
            $(".home").siblings().children().css({
                "border-bottom": "none",
                "color": "gray"
            })
        }
        if (ws >= aboutHeight - 100) {
            $(".about a").css({
                "border-bottom": "2px solid orangered",
                "color": "black"

            })
            $(".about").siblings().children().css({
                "border-bottom": "none",
                "color": "gray"

            })
        }
        if (ws >= blogHeight - 100) {
            $(".blog a").css({
                "border-bottom": "2px solid orangered",
                "color": "black"

            })
            $(".blog").siblings().children().css({
                "border-bottom": "none",
                "color": "gray"

            })

        }
        if (ws >= menuHeight - 100) {
            $(".menu a").css({
                "border-bottom": "2px solid orangered",
                "color": "black"

            })
            $(".menu").siblings().children().css({
                "border-bottom": "none",
                "color": "gray"

            })

        }
        if (ws >= newsHeight - 100) {
            $(".news a").css({
                "border-bottom": "2px solid orangered",
                "color": "black"

            })
            $(".news").siblings().children().css({
                "border-bottom": "none",
                "color": "gray"

            })
        }
        if (ws >= contactsHeight - 100) {
            $(".contacts a").css({
                "border-bottom": "2px solid orangered",
                "color": "black"

            })
            $(".contacts").siblings().children().css({
                "border-bottom": "none",
                "color": "gray"

            })

        }
    })
})

$(function() {
    $(".firstMore").hover(function() {
        $(this).css({
            "background": "none",
            "color": "orangered",
            "border": "1px solid orangered"
        })
    }, function() {
        $(this).css({
            "background": "orangered",
            "color": "white",
            "border": "1px solid orangered"
        })
    })

    $(".secondMore").hover(function() {
        $(this).css({
            "background": "orangered",
            "color": "white",
            "border": "1px solid orangered"
        })
    }, function() {
        $(this).css({
            "background": "none",
            "color": "orangered",
            "border": "1px solid orangered"
        })
    })

    $(".c").hover(function() {
        $(this).css("background", "orangered")
    }, function() {
        $(this).css("background", "gray")
    })


})