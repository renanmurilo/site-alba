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
  $('.carrousel-single').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
  var classActive = 'active';

  $('.navbar-nav li.nav-item').click(function () {

    $('.navbar-nav li.nav-item').removeClass(classActive);
    $(this).addClass(classActive);
  });
});

$('.card-header').click(function () {
  if ($(this).attr('aria-expanded', 'true')) {
    $(this).find('img').toggleClass('rotate-fa');
  }
})


$(function () {
  var classActive = 'active';

  $('.lista-veja a').first().addClass(classActive);
  $('#conteudo-pratica .pratica').first().addClass(classActive);


  $('.lista-veja a').click(function (e) {
    e.preventDefault();
    var itemId = $(this).attr('href');

    $('.lista-veja ul li a, #conteudo-pratica .pratica').removeClass(classActive);
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);

    if ($('#veja2').hasClass(classActive)) {
      $('.lista-veja ul li a').css('color', '#fff');
      $('.lista-veja ul li span').css('background-color', '#fff');
    } else {
      $('.lista-veja ul li a').css('color', '#00808F');
      $('.lista-veja ul li span').css('background-color', '#00808F');
    }
  });
});


$(function () {
  var classActive = 'active';

  $('#qual-setor li a').first().addClass(classActive);
  $('#segmentos-especialista .setor').first().addClass(classActive);


  $('#qual-setor li a').click(function (e) {
    e.preventDefault();
    var itemId = $(this).attr('href');

    $('#qual-setor li a, .setor').removeClass(classActive);
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
  });
});

var pare

$(function () {
  var loop = 0;
  pare = setInterval(function () {
    if (loop < 4) {
      loop++;
    } else {
      loop = 0;
    }
    $('.lista-veja ul li:nth-child(' + loop + ') a').trigger('click')
  }, 1800);

});

function stop() {

  clearInterval(pare);
}



$(function () {
  var classActive = 'active';

  $('#componentes .lista li a').first().addClass(classActive);
  $('.item').first().addClass(classActive);


  $('#componentes .lista li a').click(function (e) {
    e.preventDefault();
    var itemId = $(this).attr('href');

    $('#componentes ul li a, .item').removeClass(classActive);
    $(this).addClass(classActive);
    $(itemId).addClass(classActive);
  });
});


$(function () {
  var classActive = 'active';

  $('.card-header').first().addClass(classActive);

  $('.card-header').click(function (e) {
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

//Capturando e alterando setores no mobile;

$('#setores').change(function () {
  var selecionado = ($(this).val());

  if (selecionado == 1) {
    $('.row.setor-mob.comercio').addClass('active');
    $('.row.setor-mob.agro').removeClass('active');
    $('.row.setor-mob.industria').removeClass('active');
    $('.row.setor-mob.residencia').removeClass('active');
  } else if (selecionado == 2) {
    $('.row.setor-mob.comercio').removeClass('active');
    $('.row.setor-mob.agro').addClass('active');
    $('.row.setor-mob.industria').removeClass('active');
    $('.row.setor-mob.residencia').removeClass('active');
  } else if (selecionado == 3) {
    $('.row.setor-mob.comercio').removeClass('active');
    $('.row.setor-mob.agro').removeClass('active');
    $('.row.setor-mob.industria').addClass('active');
    $('.row.setor-mob.residencia').removeClass('active');
  } else if (selecionado == 4) {
    $('.row.setor-mob.comercio').removeClass('active');
    $('.row.setor-mob.agro').removeClass('active');
    $('.row.setor-mob.industria').removeClass('active');
    $('.row.setor-mob.residencia').addClass('active');
  }
});

//Evento no botão ver mais

$('.btn-vermais').click(function () {
  $(this).hide();
  $('.mais-cont').addClass('active');
});

$(function () {
  $('[data-group]').each(function () {
    var $allTarget = $(this).find('[data-target]'),
      $allClick = $(this).find('[data-click]'),
      activeClass = 'active';

    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function (e) {
      e.preventDefault();

      var id = $(this).data('click'),
        $target = $('[data-target="' + id + '"]');

      $allClick.removeClass(activeClass);
      $allTarget.removeClass(activeClass);

      $target.addClass(activeClass);
      $(this).addClass(activeClass);
    })
  })
});

$(function () {

  $('.direita').click(function (e) {
    e.preventDefault();
    var el = $('.active');
    if (el.next().length > 1) {
      el.next().addClass('active');
      el.removeClass('active');

      if ($('.bg-branco-3').hasClass('active')) {
        $('.fa-chevron-left').css('color', '#fff');
        $('.fa-chevron-right').css('color', '#fff');
      } else {
        $('.fa-chevron-left').css('color', '#00808F');
        $('.fa-chevron-right').css('color', '#00808F');
      }
    }
  });

  $('.esquerda').click(function (e) {
    e.preventDefault();
    var el = $('.active');
    if (el.prev().length > 3) {
      el.prev().addClass('active');
      el.removeClass('active');

      if ($('.bg-branco-3').hasClass('active')) {
        $('.fa-chevron-left').css('color', '#fff');
        $('.fa-chevron-right').css('color', '#fff');
      } else {
        $('.fa-chevron-left').css('color', '#00808F');
        $('.fa-chevron-right').css('color', '#00808F');
      }
    }
  });
});

$(document).ready(function () {
  getUrlVars()
});
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });

  if (vars.narrat == 'industria') {
    $('.row.setor.comercio').removeClass('active');
    $('.row.setor.industria').addClass('active');
  }
  if (vars.narrat == 'comercio') {
    $('.row.setor.comercio').removeClass('active');
    $('.row.setor.comercio').addClass('active');
  }
  if (vars.narrat == 'agro') {
    $('.row.setor.comercio').removeClass('active');
    $('.row.setor.agro').addClass('active');
  }
  if (vars.narrat == 'residencia') {
    $('.row.setor.comercio').removeClass('active');
    $('.row.setor.residencia').addClass('active');
  }
}