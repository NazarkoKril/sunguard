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
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    //   }
});