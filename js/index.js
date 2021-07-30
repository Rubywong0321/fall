$(window).scroll(function(){ 
    if ($(this).scrollTop() > 440)  {          /* 要滑動到選單的距離 */
       $('.list').addClass('menu2');   /* 幫選單加上固定效果 */
    } else {
      $('.list').removeClass('menu2'); /* 移除選單固定效果 */
    }

    
});

    

$(function(){
    $('.menu').click(function(){
       $('.menu').toggleClass('menu_show');
      });  
    var w = $(window).width();
    if(w < 650 ){

    }
    
}); 
// 點擊畫面DIV和按鈕以外的任何地方就隱藏DIV
//$("body").click(function(e){  
//    var container = $("#content");
//    var btn = $("#btn");
//    // 判斷點擊的地方不是DIV或按鈕
//    if(!container.is(e.target) && 
//       !container.has(e.target).length &&
//       !btn.is(e.target) &&
//       !btn.has(e.target).length
//      ){
//        container.hide();
//    }  
//});
//
//
//// 點擊按鈕時顯示或隱藏DIV
//$("#btn").click(function(e){
//  //e.stopPropagation();
//  $("#content").toggle();
//});