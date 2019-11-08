$(function(){
    $('.carrousel-banner').slick({
        autoplay: true,
        dots: false,
    })
});

$(function(){
    $('.carroussel-blog').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
      });
})