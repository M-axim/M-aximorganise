"use strict";

//='header-burger.ts'

//='web.ts'

//='ibg.ts'

//='filter.ts'

//='currentLink.ts'

$('.content-team__left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.team-library__row'
});

$('.team-library__row').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    asNavFor: '.content-team__left',
    prevArrow: '<button class="slick-prev slick-arrow team-library-arrow team-library-prev"><img src="img/icon/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-next slick-arrow team-library-arrow team-library-next"><img src="img/icon/arrow-next.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
            }
        },
    ]
});