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

// $(function () {
//   $('.btn-simule').click(function (e) {
//     e.preventDefault();
//     $('.circulo.active').removeClass('active').next('li').addClass('active');
//     $('.etapa.active').removeClass('active').next('div').addClass('active');
//   });
// })

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

if ($('li.comercio').val() === 1) {
  $('li.comercio>a').click(function () {
    $('.row.setor.comercio').addClass('active');
    $('.row.setor.agro').removeClass('active');
    $('.row.setor.industria').removeClass('active');
    $('.row.setor.residencia').removeClass('active');
  });
}

if ($('li.agro').val() === 2) {
  $('li.agro>a').click(function () {
    $('.row.setor.comercio').removeClass('active');
    $('.row.setor.agro').addClass('active');
    $('.row.setor.industria').removeClass('active');
    $('.row.setor.residencia').removeClass('active');
  });
}

if ($('li.industria').val() === 3) {
  $('li.industria>a').click(function () {
    $('.row.setor.industria').removeClass('active');
    $('.row.setor.agro').removeClass('active');
    $('.row.setor.industria').addClass('active');
    $('.row.setor.residencia').removeClass('active');
  });
}

if ($('li.residencia').val() === 4) {
  $('li.residencia>a').click(function () {
    $('.row.setor.residencia').removeClass('active');
    $('.row.setor.agro').removeClass('active');
    $('.row.setor.industria').removeClass('active');
    $('.row.setor.residencia').addClass('active');

  });
}

$(function () {
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

$(function () {
  $('a.nav-link').click(function () {
    $(this).parents("li").addClass("active").siblings().removeClass("active");
  });
});

$(function(){
  var classActive = 'active';

  $('.lista-veja a').first().addClass(classActive);
  $('#conteudo-pratica .pratica').first().addClass(classActive);


  $('.lista-veja a').click(function(e){
    e.preventDefault();
    var itemId = $(this).attr('href');

    $('.lista-veja ul li a, #conteudo-pratica .pratica').removeClass(classActive);
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);

    if ($('#veja2').hasClass(classActive)){
      $('.lista-veja ul li a').css('color', '#fff');
      $('.lista-veja ul li span').css('background-color', '#fff');
    } else {
      $('.lista-veja ul li a').css('color', '#00808F');
      $('.lista-veja ul li span').css('background-color', '#00808F');
    }
  });
});


$(function(){
  var classActive = 'active';

  $('#componentes .lista li a').first().addClass(classActive);
  $('.item').first().addClass(classActive);


  $('#componentes .lista li a').click(function(e){
    e.preventDefault();
    var itemId = $(this).attr('href');

    $('#componentes ul li a, .item').removeClass(classActive);
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
  });
});


$(function(){
  var classActive = 'active';

  $('.card-header').first().addClass(classActive);

  $('.card-header').click(function(e) {
    e.preventDefault();

    var itemId = $(this).hasClass(classActive);
  
    $('.card-header').removeClass(classActive);
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
  });
});

