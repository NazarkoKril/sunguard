$(document).ready(function () {
    $(".faq__question").click(function () {
        var answer = $(this).next(".faq__answer");
        var plusIcon = $(this).find(".plus-icon");
        var minusIcon = $(this).find(".minus-icon");

        $(".faq__answer").not(answer).slideUp("slow");
        $(".plus-icon").not(plusIcon).show();
        $(".minus-icon").not(minusIcon).hide();


        answer.slideToggle("slow", function () {
            plusIcon.toggle();
            minusIcon.toggle();
        });
    });
});

const swiper = new Swiper(".swiper__portf", {
    loop: true,
    navigation: {
        nextEl: ".portf__next",
        prevEl: ".portf__prev",
    },
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1050: {
            slidesPerView: 2,
            spaceBetween: 0
        },



        1350: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        if (burgerMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});

