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
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          arrows: true
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
        settings: 'unslick',
        dots: false
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

  $('#qual-setor li a').first().addClass(classActive);
  $('#segmentos-especialista .setor').first().addClass(classActive);


  $('#qual-setor li a').click(function(e){
    e.preventDefault();
    var itemId = $(this).attr('href');

    $('#qual-setor li a, .setor').removeClass(classActive);
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
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

$('.todos').click(function () {
	$('ul').toggleClass('mob');
});

if($('#setores option:selected').val() == 1) {
  $('.row.comercio').addClass('active');
  $('.row.agro').removeClass('active');
  $('.row.industria').removeClass('active');
  $('.row.residencia').removeClass('active');
} else if($('#setores option:selected').val() == 2) {
  $('.row.comercio').removeClass('active');
  $('.row.agro').addClass('active');
  $('.row.industria').removeClass('active');
  $('.row.residencia').removeClass('active');
} else if($('#setores option:selected').val() == 3) {
  $('.row.comercio').removeClass('active');
  $('.row.agro').removeClass('active');
  $('.row.industria').addClass('active');
  $('.row.residencia').removeClass('active');
} else if($('#setores option:selected').val() == 4) {
  $('.row.comercio').removeClass('active');
  $('.row.agro').removeClass('active');
  $('.row.industria').removeClass('active');
  $('.row.residencia').addClass('active');
}
