$(function(){
    $('.carrousel-banner').slick({
        autoplay: true,
        dots: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows : false,
                slidesToShow: 1
              }
            }
        ]
    })
});

$(function(){
  $('.carroussel-blog').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
})

