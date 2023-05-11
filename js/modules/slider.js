function slider({container, decorContainer, prevArrow, nextArrow}) {
  $(document).ready(function() {
    $(container).slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1201,
            settings: {
                slidesToShow: 4,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                slidesToScroll: 1
            }
        }]
    });
    $(decorContainer).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                slidesToScroll: 1
            }
        }]
    });
  });   
}

export default slider;