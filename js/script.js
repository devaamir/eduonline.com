function resize(){

}

$(document).ready(function(){
    resize();
    $('#testimonial div.slide').slick({
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 2,
        autoplay: true,
        // autoplaySpeed: 1000,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              arrows: false,
              centerMode: true,
              // centerPadding: '40px',
              slidesToShow: 2,
            }
          },
          {
          breakpoint: 770,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '120px',
            slidesToShow: 1,
            }
          },
          {
            breakpoint: 460,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
              slidesToShow: 1,
              }
            }
        ]
      });
});
$(window).resize(function(){
    resize();
});

$(window).on('load',function(){
    resize();
});