/* document.addEventListener("DOMContentLoaded", function(event){
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
closeBtn.addEventListener('click', switchModal);
}); */
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  modalBtn.on('click', function ( ) {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно!",
        minlength: "Имя не менее 2 букв и не более 15",
        maxlength: "Имя не более 15 символов"
      },
      userPhone: "Телефон обязателен!",
      userEmail: {
        required: "Укажите ваш e-mail",
        email: "Введите в формате name@domain.com"
      }
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
    },
    messages: {
      userName: {
        required: "Имя обязательно!",
        minlength: "Имя не менее 2 букв и не более 15",
        maxlength: "Имя не более 15 символов"
      },
      userPhone: "Телефон обязателен!",
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      controlUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      controlUserPhone: "required",
    },
    messages: {
      controlUserName: {
        required: "Имя обязательно!",
        minlength: "Имя не менее 2 букв и не более 15",
        maxlength: "Имя не более 15 символов"
      },
      controlUserPhone: "Телефон обязателен!",
    }
  });
  
  // маска телефона
  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

});