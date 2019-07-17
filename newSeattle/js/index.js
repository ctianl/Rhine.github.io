$(function () {
    $(window).load(function () {
        $(".flexslider").flexslider({
            animation: "slide",
            start: function (slider) {
                try1(slider.currentSlide)
            },
            after: function (slider) {
                try1(slider.currentSlide)
            },
            pauseOnHover: true,
            // mousewheel: true,
            // manualControls: ".diandian"
        })
    })


    function try1(ind){
        if(ind==0){firstShow()}
        else if(ind==1){secondShow()}
        else{thirdShow()}
    }

    //第一幅图所要进行的动作
    function firstShow() {
        //2
        $("#twoText li").css({ "margin-left": "800px", "opacity": 0 })
        //3
        $("#threeText li").each(function (n) {
            $(this).animate({
                marginTop: -20,
                opacity: 0
            }, n * 10)
        })


        $("#oneText li").each(function (n) {
            $(this).animate({
                marginLeft: 50,
                opacity: 1
            }, n * 500)
        })
    }
 
    //第二幅图所要进行的动作
    function secondShow() {
        //1
        $("#oneText li").css({ "margin-left": "-850px", "opacity": 0 })
        //3
        $("#threeText li").each(function (n) {
            $(this).animate({
                marginTop: -20,
                opacity: 0
            }, n * 10)
        })


        $("#twoText li").each(function (n) {
            $(this).animate({
                marginLeft: 50,
                opacity: 1
            }, n * 500)
        })
    }

    //第三幅图所要进行的动作
    function thirdShow() {
        //1
        $("#oneText li").css({ "margin-left": "-850px", "opacity": 0 })
        //2
        $("#twoText li").css({ "margin-left": "800px", "opacity": 0 })


        // $("#threeText li").css({ "margin-top": "-100px", "opacity": 0 })
        // $("#threeText").css({ "margin-top": "100px", "opacity": 0 })
        $("#threeText li").each(function (n) {
            $(this).animate({
                marginTop: 20,
                opacity: 1
            }, n * 100)
        })
     }
})

$(function () {
    $(".bd-example").hover(function () {
        $("#pprev").css({
            "transform": "translateX(40px)"
        })
        $("#nnext").css({
            "transform": "translateX(-40px)"
        })
    }, function () {
        $("#pprev").css({
            "transform": "translateX(0px)"
        })
        $("#nnext").css({
            "transform": "translateX(0px)"
        })
    })

    $("#owl-example").owlCarousel();

    $(".nav-link").click(function(){
        $(this).css("color","black")
       
        $(this).parent().siblings().children().css("color","grey")
    })


})
$(function () {
    //滑动窗口时的效果
    $(window).scroll(function () {
        //第一个 向上移动的两栏
        var thisRow = $("#thisRow").offset().top//它距离顶部的距离
        var windowH = $(window).scrollTop()
        if (thisRow < windowH + 500) {
            $("#myTabWrap,#another").css({
                "transform": "translateY(0)",
                "opacity": 1
            })
        }

        //第二个 四张图片随着移动
        //用了meet our team 这句话的位置作为标记
        var biaoji = $("#biaoji").offset().top
        if (biaoji < windowH + 500) {
            $("#leftCard").css({
                "transform": "translateX(0)",
                "opacity": 1
            })
            $("#middleCard").css({
                "transform": "translateY(0)",
                "opacity": 1
            })
            $("#rightCard").css({
                "transform": "translateY(0)",
                "opacity": 1
            })
            $("#fourthCard").css({
                "transform": "translateX(0)",
                "opacity": 1
            })
        }

        //第三个 form
        var form = $("#formWrap").offset().top
        if (form < windowH + 600) {
            $("#formWrap").css({
                "transform": "translateY(0)",
                "opacity": 1
            })
        }

        //第四个 download
        var downText = $("#downText").offset().top
        if (downText < windowH + 500) {
            $("#downText").css({
                "transform": "translateY(0)",
                "opacity": 1
            })
        }
        var downButton = $("#downButton").offset().top
        if (downButton < windowH + 500) {
            $("#downButton").css({
                "transform": "translateY(0)",
                "opacity": 1
            })
        }
tap:
        //导航随着变色
        //home
        var homeTop = $("#home").offset().top
        if (homeTop < windowH + 100) {
            $(".nav-link").eq(0).css("color", "black")
            $(".nav-link:not(:eq(0))").css("color", "grey")

        }
        //protforio
        var pTop = $("#protforio").offset().top
        if(pTop<windowH+100){
            $(".nav-link").eq(1).css("color","black")
            $(".nav-link:not(:eq(1))").css("color","grey")

        }
        //blog
        var blogTop =$('#shijue2').offset().top
        if (blogTop < windowH+100) {
            $(".nav-link").eq(2).css("color", "black")
            $(".nav-link:not(:eq(2))").css("color", "grey")

        }
        //contact
        var contactTop = $('#shijue3').offset().top
        if (contactTop < windowH+100) {
            $(".nav-link").eq(3).css("color", "black")
            $(".nav-link:not(:eq(3))").css("color", "grey")

        }



    })
    $(".card").hover(function () { 
        var h = $(".special img").height() / 2
        $(this).find(".downTwo").css({
            "top": h,
            "opacity": 1
        })
    }, function () {
        $(this).find(".downTwo").css({
            "top": "-40px",
            "opacity": 0
        })
    })


});

$(function () {
    $('#formWrap').bootstrapValidator({
        message: 'This value is not valid',
        fields: {
            username: {
                message: '用户名无效',
                validators: {
                    notEmpty: {
                        message: 'User name cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'User name must be greater than 6, less than 30 words'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'User names can only be composed of letters, numbers, points and underscores'
                    },
                    remote: {
                        url: '#',
                        message: 'Username unavailable'
                    },
                    different: {
                        field: 'password',
                        message: 'User name and password cannot be the same'
                    }
                }
            },
            email: {
                validators: {
                    emailAddress: {
                        message: 'Please enter a valid email address'
                    },
                    notEmpty: {
                        message: 'Mailbox cannot be empty'
                    },
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Mobile phone number cannot be empty'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: 'Mobile phone number must be 11 digits'
                    },
                    regexp: {
                        regexp: /^[0-9\.]+$/,
                        message: 'Mobile phone numbers can only be made up of numbers.'
                    },
                }
            },
            comment: {
                validators: {
                    notEmpty: {
                        message: 'Please enter information'
                    },
                    stringLength: {
                        min: 10,

                        message: 'Enter at least 10 characters or more'
                    },

                }
            },
        },
    })
})
