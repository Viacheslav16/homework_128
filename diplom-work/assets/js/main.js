
$(function(){
    const slider = $('#mySlider').lightSlider({
        item: 3,
        slideMargin: 30,
        loop: true,
        controls: false,
        responsive : [
            {
                breakpoint:1120,
                settings: {
                    item: 2,
                    slideMargin: 34,
                    loop: true,
                    controls: false
                }
            },
            {
                breakpoint:660,
                settings: {
                    item: 1,
                    slideMargin: 40,
                    loop: true,
                    controls: false
                }
            }
        ]
    })

    $("#myPrevSl").on('click', function(){
    slider.goToPrevSlide();
    });

    $("#myNextSl").on('click', function(){
    slider.goToNextSlide();
    });
   
});
$(function(){
    const slider = $('#myNextSlider').lightSlider({
        item: 3,
        slideMargin: 30,
        loop: true,
        controls: false,
        responsive : [
            {
                breakpoint:1120,
                settings: {
                    item: 2,
                    slideMargin: 34,
                    loop: true,
                    controls: false
                }
            },
            {
                breakpoint:660,
                settings: {
                    item: 1,
                    slideMargin: 40,
                    loop: true,
                    controls: false
                }
            }
        ]
    })

    $("#myLeftSl").on('click', function(){
        slider.goToPrevSlide();
    });
    
    $("#myRightSl").on('click', function(){
        slider.goToNextSlide();
    });
   
});


lightGallery(document.getElementById('aniimated-thumbnials'), {
thumbnail:true
});

function myMap(link) {
    link.remove();
    const map = L.map('map').setView([51.505, -0.09], 13);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('Your location is here');
};
  
window.new_hamb.addEventListener("click", function () {
document.body.classList.toggle("open_mobile_menu");
window.new_hamb.classList.toggle("is-active");
});

window.hamb_btn_mobile.addEventListener("click", function () {
document.body.classList.toggle("open_mobile_menu");
window.new_hamb.classList.toggle("is-active");
});

$(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
      
    $('.accordion-list > li').click(function() {
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


const form = document.getElementById('feedback-form')

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

document.querySelectorAll('.input').forEach(elem=>{
    elem.onfocus = function(){
        if(this.classList.contains('mistake')){
            this.classList.remove('mistake')
        } 
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    const errors = [];

    const nameFld = document.getElementById('yourName')
    const emailFld = document.getElementById('yourEmail')
    const addressFld = document.getElementById('yourAddress')

    const addName = nameFld.value.trim()
    const addEmail = emailFld.value.trim()
    const addAddress = addressFld.value.trim()
    

    if (addName.value === ''){
        errors.push('Enter your name, please')
        nameFld.classList.add('mistake')
    }else{
        if (addName.length < 2){
            errors.push('Your name is too short')
            nameFld.classList.add('mistake')
        }
    }
    
    if (addEmail === ''){
        errors.push('Enter your email, please')
        emailFld.classList.add('mistake')
    }else{
        if(!isValidEmail(addEmail)){
            errors.push('Incorrect email address')
            emailFld.classList.add('mistake')
        }
    }
    
    if (addAddress.value === ''){
        errors.push('Enter your address, please')
        addressFld.classList.add('mistake')
    }else{
        if (addAddress.length < 2){
            errors.push('Your address is too short')
            addressFld.classList.add('mistake')
        }
    }

    if(errors.length){
        toast.error(errors.join('. '))
        return
    }

    const CHAT_ID = '-1002027278536';
    const BOT_TOKEN = '7016630485:AAHuCKIU3ORwH_w8w7clzX6rCek2PqwWcEw';
    const message = `<b>Name: </b>${addName}\r\n<b>Email: </b>${addEmail}\r\n<b>Address: </b>${addAddress}`

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;

    fetch(url, {
        method: 'post'
    })
    .then(resp => resp.json())
    .then(resp => {
        if(resp.ok){
            addName.value = '';
            emailFld.value = '';
            toast.success('Your message successfully sent')
        }else {
            toast.error('Some errors')
        }
    })

    return false
})