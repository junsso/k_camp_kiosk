$('[data-popup]').on('click', function(){
    var popupName = $(this).data('popup'); 

    $.ajax({
        type : "GET", //추후 POST로 변경
        url : "ajax_popup.html",
        dataType: "html",
        error : function(){
          alert("통신실패!!!!");
          $('.test-img-box.'+popupName).show();
          $.resizeLayerPageBody();
        },
        success : function(res) {
            //console.log(res);
            $(".popup-wrap").html(res);
            $('body').addClass('active-popup');
                $('#'+popupName+'Popup').addClass('show');
    
            // 팝업 닫기
            $('.overlay, .close-btn').on('click', function(){
              $('body').removeClass('active-popup');
              $('.layerpop').removeClass('show');
              return false;
            });
    
            // 팝업 스크립트
            $('[data-popup]').on('click', function(){
              var popupName = $(this).data('popup');
              $('body').addClass('active-popup');
              $('#'+popupName+'Popup').addClass('show');
              return false;
            });
        }
    });

});  