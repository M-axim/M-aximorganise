"use strict";
jQuery(document).ready(function () {
    jQuery('.menu__icon').click(function (event) {
        jQuery('.menu__icon, .menu__body, .header').toggleClass('active');
        jQuery('body').toggleClass('lock');
    });
});
// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});
function ibg() {
    var ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();
// фильтр
jQuery(function () {
    var filter = $('[data-filter]');
    filter.on('click', function (event) {
        event.preventDefault();
        var cat = $(this).data('filter'); // создаем переменную с названием категории фильтра при нажатии и называем ее cat
        if (cat == 'All') { // если cat равно all(то есть показать все товары то удаляем класс hide)
            $('[data-cat]').removeClass('goods-portfolio__col_hide');
        }
        else {
            $("[data-cat]").each(function () {
                var cards = $(this).data('cat'); // в переменную cards записывем все карточки со значением data-cat
                if (cards != cat) {
                    $(this).addClass('goods-portfolio__col_hide'); // если текущая карточка не равна значению cat у filter,то добавляем этим карточка класс hide
                }
                else {
                    $(this).removeClass('goods-portfolio__col_hide'); // тоже самое но уже наоборот
                }
            });
        }
    });
});
var links = document.querySelectorAll('.filter-portfolio__link');
for (var i = 0; i < links.length; i++) { // выводим каждый элемент по отдельности
    var link = links[i]; // записываем их в одну переменную
    activeLink(link);
}
function activeLink(link) {
    var _this = link;
    console.log(_this);
    link.addEventListener('click', function () {
        var activeLink = document.querySelector('.filter-portfolio__link_active');
        activeLink.classList.remove('filter-portfolio__link_active');
        _this.classList.add('filter-portfolio__link_active');
    });
}
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
                arrows: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
            }
        },
    ]
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QixDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFCLFlBQVksRUFBRSxDQUFDO0lBQ2YsY0FBYyxFQUFFLENBQUM7SUFDakIsTUFBTSxFQUFFLEtBQUs7SUFDYixRQUFRLEVBQUUscUJBQXFCO0lBQy9CLFNBQVMsRUFBRSxpSUFBaUk7SUFDNUksU0FBUyxFQUFFLGlJQUFpSTtJQUM1SSxVQUFVLEVBQUU7UUFDUjtZQUNJLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRTtnQkFDTixZQUFZLEVBQUUsQ0FBQztnQkFDZixjQUFjLEVBQUUsQ0FBQztnQkFDakIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsTUFBTSxFQUFFLElBQUk7YUFFZjtTQUNKO1FBQ0Q7WUFDSSxVQUFVLEVBQUUsR0FBRztZQUNmLFFBQVEsRUFBRTtnQkFDTixZQUFZLEVBQUUsQ0FBQztnQkFDZixjQUFjLEVBQUUsQ0FBQztnQkFDakIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsTUFBTSxFQUFFLElBQUk7YUFDZjtTQUNKO1FBQ0Q7WUFDSSxVQUFVLEVBQUUsR0FBRztZQUNmLFFBQVEsRUFBRTtnQkFDTixZQUFZLEVBQUUsQ0FBQztnQkFDZixjQUFjLEVBQUUsQ0FBQztnQkFDakIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsTUFBTSxFQUFFLElBQUk7YUFDZjtTQUNKO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy89J2hlYWRlci1idXJnZXIudHMnXHJcblxyXG4vLz0nd2ViLnRzJ1xyXG5cclxuLy89J2liZy50cydcclxuXHJcbi8vPSdmaWx0ZXIudHMnXHJcblxyXG4vLz0nY3VycmVudExpbmsudHMnXHJcblxyXG4kKCcuY29udGVudC10ZWFtX19sZWZ0Jykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgZmFkZTogdHJ1ZSxcclxuICAgIGFzTmF2Rm9yOiAnLnRlYW0tbGlicmFyeV9fcm93J1xyXG59KTtcclxuXHJcbiQoJy50ZWFtLWxpYnJhcnlfX3JvdycpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGFzTmF2Rm9yOiAnLmNvbnRlbnQtdGVhbV9fbGVmdCcsXHJcbiAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1hcnJvdyB0ZWFtLWxpYnJhcnktYXJyb3cgdGVhbS1saWJyYXJ5LXByZXZcIj48aW1nIHNyYz1cImltZy9pY29uL2Fycm93LXByZXYuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLWFycm93IHRlYW0tbGlicmFyeS1hcnJvdyB0ZWFtLWxpYnJhcnktbmV4dFwiPjxpbWcgc3JjPVwiaW1nL2ljb24vYXJyb3ctbmV4dC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNDI2LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn0pOyJdfQ==
