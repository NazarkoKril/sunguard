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

document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 12;
    const blogList = document.querySelector(".blog__list");
    const paginationContainer = document.querySelector(".blog__pagination");
    let currentPage = 1;

    const items = Array.from(blogList.children);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    function renderPage(page) {
        blogList.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = items.slice(start, end);

        pageItems.forEach(item => blogList.appendChild(item));

        renderPagination();
    }

    function renderPagination() {
        const pageNumbers = paginationContainer.querySelectorAll(".page-numbers");
        pageNumbers.forEach((pageNumber, index) => {
            const pageIndex = index + 1;
            if (pageIndex <= totalPages) {
                pageNumber.style.display = "inline";
                pageNumber.classList.toggle("active", pageIndex === currentPage);
                pageNumber.classList.remove("disabled");
                pageNumber.addEventListener("click", () => {
                    currentPage = pageIndex;
                    renderPage(currentPage);
                });
            } else {
                pageNumber.style.display = "none";
                pageNumber.classList.add("disabled");
            }
        });

        updateArrows();
    }

    function updateArrows() {
        const prevArrow = paginationContainer.querySelector(".prev");
        const nextArrow = paginationContainer.querySelector(".next");

        if (currentPage === 1) {
            prevArrow.classList.add("disabled");
        } else {
            prevArrow.classList.remove("disabled");
        }

        if (currentPage === totalPages) {
            nextArrow.classList.add("disabled");
        } else {
            nextArrow.classList.remove("disabled");
        }
    }

    paginationContainer.querySelector(".prev").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    paginationContainer.querySelector(".next").addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    renderPage(currentPage);
});
