/*menu*/
$('.nav__list').animate({"left": "-115%"}, 600);
$(".nav__button").click(function() {

  if($(this).attr('data-click-state') == 0) {
      $(this).attr('data-click-state',1);
      $('.nav__list').animate({"left": "-115%"}, 600);
      $('.nav__button span:nth-child(1)').css({transform:'rotate(0)',top: '0' });
      $('.nav__button span:nth-child(2)').css({transform:'rotate(0)',top: '0' });
      $('.nav__button span:nth-child(3)').css({display:'block' });  
    }

    else {
      $(this).attr('data-click-state', 0);
      $('.nav__list').animate({"left": "0"}, 600);
       $('.nav__button span:nth-child(1)').css({transform:'rotate(45deg)',top: '5px' });
      $('.nav__button span:nth-child(2)').css({transform:'rotate(-45deg)',top: '-7px' });
      $('.nav__button span:nth-child(3)').css({display:'none' });
    }

});

// remove class active  
    $(".nav__list .nav__item a").click(function() {
        $(".nav__list .nav__item a").removeClass('nav__item--active');
        $(this).addClass('nav__item--active');
    });

// device detection
var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
console.log('isMobile = ' + isMobile);

// стабилизирует fullpage  
function stabilize(){
  if($(window).width() > 1200) {
    $('section:not(:hidden)').each(function(index, el) {
    
      var eTop = $(this).offset().top; 
      var posTop = eTop - $(window).scrollTop();

      if(posTop>-$(window).height()/2&&posTop<$(window).height()/2){
        $("html, body").animate({ scrollTop: $(this).offset().top}, 250);
      }
    });
  }
}

$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
  $("html, body").stop();
});

if (isMobile != true) {
  $(window).scroll(function(){

    clearTimeout($.data(this, 'scrollTimer'));
    
    $.data(this, 'scrollTimer',setTimeout(stabilize,1500));

  });
}



  // flip

$(".bitten__prise").flip({
  trigger: "hover",
  speed: 700,

});

$(".bitten__cloud").flip({
  trigger: "hover",
  speed: 700,

});

$(".bitten__uhu").flip({
  trigger: "hover",
  speed: 700,

});

$(".bitten__time").flip({
  trigger: "hover",
  speed: 700,

});

$(".bitten__prise").hover(function() {
  $(".bitten__m-wrap h3 span:nth-child(1)").css({
    color: '#8af04d',
    transform: 'rotate(180deg)',
    transition: 'all .4s'
  });
}, function() {
  $(".bitten__m-wrap h3 span:nth-child(1)").css({
    color: '#2fb3e1',
    transform: 'rotate(0deg)'
  });
});

$(".bitten__cloud").hover(function() {
  $(".bitten__m-wrap h3 span:nth-child(2)").css({
    color: '#e75693',
    transform: 'rotate(180deg)',
    transition: 'all .4s'
  });
}, function() {
  $(".bitten__m-wrap h3 span:nth-child(2)").css({
    color: '#7467bf',
    transform: 'rotate(0deg)'
  });
});

$(".bitten__uhu").hover(function() {
  $(".bitten__m-wrap h3 span:nth-child(3)").css({
    color: '#2fb3e1',
    transform: 'rotate(180deg)',
    transition: 'all .4s'
  });
}, function() {
  $(".bitten__m-wrap h3 span:nth-child(3)").css({
    color: '#8af04d',
    transform: 'rotate(0deg)'
  });
});

$(".bitten__time").hover(function() {
  $(".bitten__m-wrap h3 span:nth-child(4)").css({
    color: '#7467bf',
    transform: 'rotate(180deg)',
    transition: 'all .4s'
  });
}, function() {
  $(".bitten__m-wrap h3 span:nth-child(4)").css({
    color: '#e75693',
    transform: 'rotate(0deg)'
  });
});

//boy
$(".start").hover(function() {
  $(".arbeiten__boy img").animate({marginTop: "-10px"}, 400);
}, function() {
  $(".arbeiten__boy img").animate({marginTop: "0"}, 400);
});


$(".start").click(function() {
  $(".arbeiten__boy img").animate({top: "-200%"}, 1500);
  $(".start").css({ display: 'none', transition: 'all .5s ease'});
  if ($(window).width() > 650) {
    setTimeout(function () {
      $(".arbeiten").css({ backgroundImage: 'url(../../images/desktop/arbeiten_back-bonus.jpg)', background: 'all .5s ease'});
      $(".arbeiten__bonus").css({ opacity: '1', transition: 'all .5s ease'});
    }, 1000);
  }
});

// boxen bei kosten

$(window).scroll(function() {
  if ($(this).scrollTop() > 2800 ) {
    $('.arbeiten__box-blue').delay(1000).animate({right: '0', opacity: '1' }, 2000);
    $('.arbeiten__box-red').delay(1000).animate({left: '0', opacity: '1' }, 2000);
  }
});



 // функции локации
/*  function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }*/

//form

$('#send').click (function () {
  var email = $('#email').val ();
  var name = $('#name').val ();
  var message = $('#message').val ();
  $.ajax({
    url:      'ajax/mail.php',
    type:   'POST',
    cache:    false,
    data:     {'name':name, 'email':email, 'message':message},
    dataType: 'html',
    beforeSend: function () {
      $('#send').attr ("disabled", "disabled");
    },
    success: function(data) {
      if (data == true) {
        $('#name').val ("");
        $('#email').val ("");
        $('#message').val ("");
        $('#send').text ("Nachricht wurde gesendet");
        $('#email').css ("border-color", "#60fc8c");
        $('#name').css ("border-color", "#60fc8c");
        $('#message').css ("border-color", "#60fc8c");
      } else {
        if (data == false)        
          alert ("Etwas ist schief gelaufen! Nachricht wurde nicht gesendet");
        else {          
          switch (data) {
          case "Der Name ist nicht eingegeben":
          $('#name').css ("border-color", "#f7b4b4");
          break;
          case "Die Nachricht ist nicht eingegeben":
          $('#message').css ("border-color", "#f7b4b4");
          break;
          case "E-mail ist nicht korrekt":
          $('#email').css ("border-color", "#f7b4b4");
          break;
          default:
          $('#email').css ("border-color", "#f7b4b4");
          $('#message').css ("border-color", "#f7b4b4");
          $('#name').css ("border-color", "#f7b4b4");
          }
        }
      }
      $('#send').removeAttr ("disabled");       
    }
  });
});




jQuery(document).ready(function() {
  
//remove placeholder
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });

   
 // scroll

 $('body').prepend('<a href="#" class="back-to-top"><span>TOP</span></a>');

 var amountScrolled = 300;

        $(window).scroll(function() {
          if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn('slow');
          } else {
            $('a.back-to-top').fadeOut('slow');
          }
        });
        
        // animation
        $('a.back-to-top').click(function() {
          $('html, body').animate({
            scrollTop: 0
          }, 700);
          return false;
        });

       

// hide-pre-loader
    setTimeout(function (argument) {
      document.getElementsByTagName('body')[0].className += ' pre-loaded';
      console.log('main-js.injected');
    }, 1000);
    
 // modal map
$(".map").click(function() {
    $('.popup-position__map').css({display: 'block'});
    setTimeout(function () {
      $('.popup-position__map').css({opacity: '1', transition: 'opacity .5s'});
    });
});

$(".popup-close__map").click(function() {
    $('.popup-position__map').css({opacity: '0', transition: 'opacity .5s'});
    setTimeout(function () {
      $('.popup-position__map').css({ display: 'none'});
    }, 1000);
});



 // modal impressum
$(".ich__impressum a").click(function() {
    $('.popup-position__impressum').css({display: 'block'});
    setTimeout(function () {
      $('.popup-position__impressum').css({opacity: '1', transition: 'opacity .5s'});
    });
});


$(".popup-close__impressum").click(function() {
    $('.popup-position__impressum').css({opacity: '0', transition: 'opacity .5s'});
    setTimeout(function () {
      $('.popup-position__impressum').css({ display: 'none'});
    }, 1000);
});



});//ready end