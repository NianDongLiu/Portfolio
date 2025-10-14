$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function () {
                window.location.hash = hash;
            });
        }
    });
});

var width = $(window).width();

window.onscroll = function () {
    if ((width >= 900)) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#middle").css("background-size", "110% auto");
        } else {
            $("#middle").css("background-size", "100% auto");
        }
    }
};

setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 1450);

// Image Gallery Functions
function changeSlide(projectId, direction) {
    const slidesContainer = document.getElementById(projectId + '-slides');
    const slides = slidesContainer.getElementsByClassName('slide');
    const indicators = document.getElementById(projectId + '-indicators');
    const dots = indicators ? indicators.getElementsByClassName('indicator') : [];

    let currentIndex = 0;
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            currentIndex = i;
            break;
        }
    }

    slides[currentIndex].classList.remove('active');
    if (dots.length > 0) dots[currentIndex].classList.remove('active');

    currentIndex += direction;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;

    slides[currentIndex].classList.add('active');
    if (dots.length > 0) dots[currentIndex].classList.add('active');
}

function currentSlide(projectId, index) {
    const slidesContainer = document.getElementById(projectId + '-slides');
    const slides = slidesContainer.getElementsByClassName('slide');
    const indicators = document.getElementById(projectId + '-indicators');
    const dots = indicators ? indicators.getElementsByClassName('indicator') : [];

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        if (dots.length > 0) dots[i].classList.remove('active');
    }

    slides[index].classList.add('active');
    if (dots.length > 0) dots[index].classList.add('active');
}
