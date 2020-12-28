$(function () {
    // Show phone number 
    $('.phone-numbers__icon').on('click', function () {
        $(this).prev().fadeToggle(400);
    });
    // language selection
    $('.language-selection__select').styler();
    // Offer slider =========== 
    $('.offer-slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-decor/chevron-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-decor/chevron-right.svg" alt="next"></button>'
    });
    // Principles slider ===========
    $('.principles__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-decor/chevron-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-decor/chevron-right.svg" alt="next"></button>'
    });
    // Reviews slider
    $('.reviews-slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-decor/chevron-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-decor/chevron-right.svg" alt="next"></button>',
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1266,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    // Add active to menu-link
    $('.menu__link').on('click', function (event) {
        event.preventDefault();
        $('.menu__link').removeClass('menu__link--active');
        $(this).addClass('menu__link--active');
    });
    // Mobile menu
    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.mobile-menu__list').toggleClass('mobile-menu__list--active');
    });
    // Close mobile menu after click on link
    $('.mobile-menu__link').on('click', function () {
        $('.mobile-menu__link').removeClass('mobile-menu__link--active');
        $(this).addClass('mobile-menu__link--active');
        $('.mobile-menu__list').removeClass('mobile-menu__list--active');
        $('.menu__btn').removeClass('menu__btn--active');
    });
    // Close mobile menu after click on body
    $(document).click(function (e) {        
        if (!$(e.target).is('use') && !$(e.target).is('.phone-numbers__icon') && !$(e.target).is('.menu__btn') && !$(e.target).is('.menu__btn-line')) {           
            $('.mobile-menu__list').removeClass('mobile-menu__list--active');
            $('.menu__btn').removeClass('menu__btn--active');
        }
    });
    // Footer dropdown for mobile
    $('.footer__top-drop').on('click', function () {
        if ($(this).parent().next().hasClass('footer__office-inner')) {
            $('.footer__office-inner').slideToggle(500).css("display", "flex");            
            }             
            else {
                $(this).parent().next().slideToggle(500);
            }
         $(this).toggleClass('footer__top-drop--active');            
    });
    // Validate form and mask for phone number  
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required"
            },
            messages: {
                name: {
                    required: "Введите имя",
                    minlength: jQuery.validator.format("Введите минимум {0} символа!")
                },
                phone: "Введите номер телефона"
            }
        });
    }
    
    validateForms('#consult');

    $('#phone').mask("+375 (99) 999-99-99");
});