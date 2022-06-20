
//메인 캠핑카 예약 클릭시
var campBtn = $('.go-camp');
var bodyCont = $('.body-cont');
var viewWrap = $('.viewer-wrap');
var backBtn = $('.viewer-wrap .back');

$(campBtn).on('click', function(){
    $(bodyCont).addClass('delete');
    $(viewWrap).addClass('active');
});
$(backBtn).on('click', function(){
    $(bodyCont).removeClass('delete');
    $(viewWrap).removeClass('active');
});

//캠핑카 예약 캘린더 클릭시 - 화면 ID: KIOSK_10_00_00
var calBtn = $('.click');
var calBtn2 = $('.click2');

$(calBtn).on('click', function(){
    $(this).toggleClass('active');
    $(calBtn).not($(this)).removeClass('active');
});
$(calBtn2).on('click', function(){
  $(this).toggleClass('active');
});

//캠핑카 선택 스와이프 - 화면 ID: KIOSK_10_01_00
var basicSwipe = new Swiper(".basic-swipe .swiper-container",{
    slidesPerView: 1,
    pagination: {
      el: '.basic-swipe .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: ".basic-swipe .swiper-button-next",
      prevEl: ".basic-swipe .swiper-button-prev",
    },
}); 

//예약번호조회 - 화면 ID: KIOSK_40_01_00
var qrNum = $('.qr-num');
var keyPad = $('.qr-num-lookup');
var closeBtn = $('.qr-num-lookup .close-btns');

$(qrNum).on('click', function(){
  $(keyPad).show();
});
$(closeBtn).on('click', function(){
  $(keyPad).hide();
});

//수량 버튼
$(document).on('click', '.qty-controls .qty-button', function () {
  var pt = $(this).parents('.qty-controls');
  var minQty = Number($('.qty-minus', pt).data('min'));
  var maxQty = Number($('.qty-plus', pt).data('max'));
  var qty = $('.qty', pt);
  var sellType = Number(qty.data('sell_type'));
  var calc = (this.value === '+') ? 1 : -1;
  var result = Number(qty.val()) + calc;

  if (sellType !== 1) {
    minQty = 0;
    maxQty = 0;
  }

  var compare = (calc === 1) ? (result > maxQty && maxQty > 0) : (result < minQty);
  var defaultValue = (calc === 1) ? maxQty : minQty;

  result = compare ? defaultValue : result;
  qty.val(result);

});


//음식주문 > 카테고리 스와이프 - 화면 ID: KIOSK_20_01_01
var productSwipe = new Swiper(".pro-step-swipe .swiper-container",{
  slidesPerView: 'auto',
  preventClicks: true,
  preventClicksPropagation: false,
  observer: true,
  observeParents: true,
}); 

//스와이프 클릭시 중앙정렬
// 클릭요소 중앙정렬

var $snbSwiperItem = $('.pro-step-swipe .swiper-wrapper .swiper-slide .btns');
  $snbSwiperItem.click(function(){
      var target = $(this).parent();
      $snbSwiperItem.parent().removeClass('on')
      target.addClass('on');
      muCenter(target);
  })

  function muCenter(target){
      var snbwrap = $('.pro-step-swipe .swiper-wrapper');
      var targetPos = target.position();
      var box = $('.pro-step-swipe');
      var boxHarf = box.width()/2;
      var pos;
      var listWidth=0;
      
      snbwrap.find('.swiper-slide').each(function(){ listWidth += $(this).outerWidth(); })
      
      var selectTargetPos = targetPos.left + target.outerWidth()/2;
      if (selectTargetPos <= boxHarf) { // left
          pos = 0;
      }else if ((listWidth - selectTargetPos) <= boxHarf) { //right
          pos = listWidth-box.width();
      }else {
          pos = selectTargetPos - boxHarf;
      }
      
      setTimeout(function(){snbwrap.css({
          "transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
          "transition-duration": "500ms"
      })}, 200);
  }

//상품선택 스와이프 - 화면 ID: KIOSK_20_01_01
var basicSwipe2 = new Swiper(".basic-swipe2 .swiper-container",{
  slidesPerView: 'auto',
  spaceBetween: 20,  
}); 


//상품선택 > 토스트 알럿 - 화면 ID: KIOSK_20_01_01
var toastVal = $('.toast_cart'); 
var toastValTarget = $('.menu-wrap .col');

$(toastValTarget).on('click', function(){
  if($(this).hasClass('sold-out') === true ){
    $(toastVal).hide();
  }else{
    $(toastVal).fadeIn(200).delay(1000).fadeOut(200);
  }
});
