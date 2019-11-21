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
});

$(function () {
  $('.carrousel-comentarios').slick({
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
  $('.carroussel-sobre').slick({
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

$(function () {
  $('.btn-proximo').click(function (e) {
    e.preventDefault();
    $('.circulo.active').removeClass('active').next('li').addClass('active');
    $('.etapa.active').removeClass('active').next('div').addClass('active');
  });
});

$(function () {
  $('.btn-simule').click(function (e) {
    e.preventDefault();
    $('.circulo.active').removeClass('active').next('li').addClass('active');
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

$(document).ready(function () {
  
  $("#setor").change(function () {
    // exibindo uma janela com o valor selecionado
    if ($('#setor option:selected').val() == 1) {
      $('.row.setor.comercio').addClass('active');
      $('.row.setor.agro').removeClass('active');
      $('.row.setor.industria').removeClass('active');
      $('.row.setor.residencia').removeClass('active');
    } else if ($('#setor option:selected').val() == 2) {
      $('.row.setor.agro').addClass('active');
      $('.row.setor.comercio').removeClass('active');
      $('.row.setor.industria').removeClass('active');
      $('.row.setor.residencia').removeClass('active');
    } else if ($('#setor option:selected').val() == 3) {
      $('.row.setor.industria').addClass('active');
      $('.row.setor.comercio').removeClass('active');
      $('.row.setor.agro').removeClass('active');
      $('.row.setor.residencia').removeClass('active');
    } else if ($('#setor option:selected').val() == 4) {
      $('.row.setor.residencia').addClass('active');
      $('.row.setor.comercio').removeClass('active');
      $('.row.setor.agro').removeClass('active');
      $('.row.setor.industria').removeClass('active');
    }
  });
});

$(function(){
  $('.carroussel-tipbar').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      dots: true,
      autoplay: true,
      responsive: [
      {
          breakpoint: 768,
          settings: 'unslick'
      }
      ]
  });
  $(window).on('resize', function () {
      $('.session-especialista').slick('resize');
  });
})
