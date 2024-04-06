"use strict";

$(function () {
  var slider = $('#mySlider').lightSlider({
    item: 3,
    slideMargin: 30,
    loop: true,
    controls: false,
    responsive: [{
      breakpoint: 1120,
      settings: {
        item: 2,
        slideMargin: 34,
        loop: true,
        controls: false
      }
    }, {
      breakpoint: 660,
      settings: {
        item: 1,
        slideMargin: 40,
        loop: true,
        controls: false
      }
    }]
  });
  $("#myPrevSl").on('click', function () {
    slider.goToPrevSlide();
  });
  $("#myNextSl").on('click', function () {
    slider.goToNextSlide();
  });
});
$(function () {
  var slider = $('#myNextSlider').lightSlider({
    item: 3,
    slideMargin: 30,
    loop: true,
    controls: false,
    responsive: [{
      breakpoint: 1120,
      settings: {
        item: 2,
        slideMargin: 34,
        loop: true,
        controls: false
      }
    }, {
      breakpoint: 660,
      settings: {
        item: 1,
        slideMargin: 40,
        loop: true,
        controls: false
      }
    }]
  });
  $("#myLeftSl").on('click', function () {
    slider.goToPrevSlide();
  });
  $("#myRightSl").on('click', function () {
    slider.goToNextSlide();
  });
});
lightGallery(document.getElementById('aniimated-thumbnials'), {
  thumbnail: true
});

function myMap(link) {
  link.remove();
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([51.5, -0.09]).addTo(map).bindPopup('Your location is here');
}

;
window.new_hamb.addEventListener("click", function () {
  document.body.classList.toggle("open_mobile_menu");
  window.new_hamb.classList.toggle("is-active");
});
window.hamb_btn_mobile.addEventListener("click", function () {
  document.body.classList.toggle("open_mobile_menu");
  window.new_hamb.classList.toggle("is-active");
});
$(document).ready(function () {
  $('.accordion-list > li > .answer').hide();
  $('.accordion-list > li').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }

    return false;
  });
});
var form = document.getElementById('feedback-form');

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

document.querySelectorAll('.input').forEach(function (elem) {
  elem.onfocus = function () {
    if (this.classList.contains('mistake')) {
      this.classList.remove('mistake');
    }
  };
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var errors = [];
  var nameFld = document.getElementById('yourName');
  var emailFld = document.getElementById('yourEmail');
  var addressFld = document.getElementById('yourAddress');
  var addName = nameFld.value.trim();
  var addEmail = emailFld.value.trim();
  var addAddress = addressFld.value.trim();

  if (addName.value === '') {
    errors.push('Enter your name, please');
    nameFld.classList.add('mistake');
  } else {
    if (addName.length < 2) {
      errors.push('Your name is too short');
      nameFld.classList.add('mistake');
    }
  }

  if (addEmail === '') {
    errors.push('Enter your email, please');
    emailFld.classList.add('mistake');
  } else {
    if (!isValidEmail(addEmail)) {
      errors.push('Incorrect email address');
      emailFld.classList.add('mistake');
    }
  }

  if (addAddress.value === '') {
    errors.push('Enter your address, please');
    addressFld.classList.add('mistake');
  } else {
    if (addAddress.length < 2) {
      errors.push('Your address is too short');
      addressFld.classList.add('mistake');
    }
  }

  if (errors.length) {
    toast.error(errors.join('. '));
    return;
  }

  var CHAT_ID = '-1002027278536';
  var BOT_TOKEN = '7016630485:AAHuCKIU3ORwH_w8w7clzX6rCek2PqwWcEw';
  var message = "<b>Name: </b>".concat(addName, "\r\n<b>Email: </b>").concat(addEmail, "\r\n<b>Address: </b>").concat(addAddress);
  var url = "https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(encodeURI(message), "&parse_mode=HTML");
  fetch(url, {
    method: 'post'
  }).then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    if (resp.ok) {
      addName.value = '';
      emailFld.value = '';
      toast.success('Your message successfully sent');
    } else {
      toast.error('Some errors');
    }
  });
  return false;
});