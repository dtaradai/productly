$(function () {

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 1175,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
            breakpoint: 769,
                setings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    })
    

});