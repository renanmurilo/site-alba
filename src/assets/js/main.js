$(function () {
  $('.carrousel-banner').slick({
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  })
});

$(function () {
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

$(function () {
  $('.menu').click(function () {
    $('.cx-itens').toggleClass('show');
  });
});

$(function(){
  $('.btn-proximo').click(function(e){
      e.preventDefault();
      $('.circulo.active').removeClass('active').next( 'li' ).addClass('active');
      $('.etapa.active').removeClass('active').next('div').addClass('active');
  });
});

$(function(){
  $('.btn-simule').click(function(e){
    e.preventDefault();
    $('.circulo.active').removeClass('active').next( 'li' ).addClass('active');
    $('.etapa.active').removeClass('active').next('div').addClass('active');
});
})

$(function () {
  $('.btn-cont-lendo').click(function () {
    $(this).hide();
    $('#banner-miolo').addClass('show');
    $('#maneira-geral').addClass('show');
  });
});

$(function () {
  $('.carrossel-banner-blog').slick({
    autoplay: true,
    dots: true,
    arrows: false,
  })
});
