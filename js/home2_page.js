$(document).ready(function() {
    //filters
    $(".filter_ripple").ripples({
        resolution: 256,
        dropRadius: 20,
        interactive: true,
        perturbance: 0.2,
    });
    //filters end

    //property

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function() {
                swiper.changeDirection(getDirection());
            }
        }
    });

    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
    }

    function card_slider(card_id, business_style) {
        $("#" + card_id).hover(
            function() {
                $("#" + card_id + " .layer " + business_style).addClass('animate__flipOutX');
                $("#" + card_id + " .layer .hover-layer").removeClass("animate__slideOutDown").addClass("animate__slideInUp").css("display", "block");
                $("#" + card_id + " .layer .hover-layer .btn").removeClass("animate__fadeOutUpBig").addClass("animate__fadeInDownBig").css("display", "block");
                $("#" + card_id + " .layer .hover-layer .address").removeClass("animate__fadeOutUpBig").addClass("animate__fadeInDownBig").css("display", "block");
            },
            function() {
                $("#" + card_id + " .layer " + business_style).removeClass('animate__flipOutX').addClass('animate__flipInX');
                $("#" + card_id + " .layer .hover-layer").removeClass("animate__slideInUp").addClass("animate__slideOutDown");
                $("#" + card_id + " .layer .hover-layer .btn").removeClass("animate__fadeInDownBig").addClass("animate__fadeOutUpBig");
                $("#" + card_id + " .layer .hover-layer .address").removeClass("animate__fadeInDownBig").addClass("animate__fadeOutUpBig");
            }
        );
    }
    for (let index = 1; index <= 10; index++) {
        if (index % 2 == 0) {
            card_slider("card" + index, ".rent");
        } else {
            card_slider("card" + index, ".sale");
        }
    }

    //property end
});