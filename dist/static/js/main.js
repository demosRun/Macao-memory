



$(function () {
  // var scrollFunc = function (e) {  
  //   e = e || window.event;
  //   console.log(e)
  //   if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
  //     if (e.wheelDelta > 0) { //当滑轮向上滚动时  
  //       mySwiper.swipePrev()
  //     }  
  //     if (e.wheelDelta < 0) { //当滑轮向下滚动时  
  //       mySwiper.swipeNext()
  //     }  
  //   } else if (e.detail) {  //Firefox滑轮事件  
  //     if (e.detail> 0) { //当滑轮向下滚动时  
  //       mySwiper.swipeNext()
  //     }  
  //     if (e.detail< 0) { //当滑轮向上滚动时  
  //       mySwiper.swipePrev()
  //     }  
  //   }  
  // } 
  // /*IE、Opera注册事件*/
  // if (document.attachEvent) {
  //   document.attachEvent('onmousewheel',scrollFunc);
  // }
  // //Firefox使用addEventListener添加滚轮事件  
  // if (document.addEventListener) {
  //   document.addEventListener('DOMMouseScroll', scrollFunc, false);  
  // }  
  // //Safari与Chrome属于同一类型
  // window.onmousewheel = document.onmousewheel = scrollFunc;

  var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    paginationClickable: true,
    resistance: false,
    simulateTouch: false,
    mousewheelControl : true,
    onSlideChangeEnd: function(swiper) {
      var num = $('.page-2').length == 0 ? 1 : 2
      if (swiper.activeIndex == 0 || swiper.activeIndex == swiper.slides.length - 1) {
        $('.time-axis')[0].style.display = 'none'
      } else {
        $('.time-axis')[0].style.display = 'block'
      }
      if (swiper.activeIndex > 0 && swiper.activeIndex < swiper.slides.length - 1) {
        activeIndex(swiper.activeIndex - num)
      }
      if (num == 2 && swiper.activeIndex == 1) {
        $('.time-axis')[0].style.display = 'none'
      }
      console.log(swiper.activeIndex, 24 - num)
      if (swiper.activeIndex == 24 - num) {
        $('.active-line')[0].style.width = 1050 + 'px'
      }
    }
  })

  // 返回首页按钮点击事件
  document.getElementsByClassName('to-home')[0].onclick = function () {
    mySwiper.swipeTo(0)
  }
  // 鼠标点击进入第二页
  document.getElementsByClassName('mouse')[0].onclick = function () {
    mySwiper.swipeTo(1)
  }
  

  function activeIndex (ind) {
    $('.time-axis ul li').each(function (ind2, item2) {
      if (ind2 == ind) {
        item2.classList.add('active')
      } else {
        item2.classList.remove('active')
      }
    })
    $('.active-line')[0].style.width = (ind + 1) * 50 - 25 + 'px'
  }

  var contentList = $('.page-content')
  var contentListLength = contentList.length
  // $('.active-line')[0].style.width = '50px'
  // $('.active-line')[0].style.width = contentListLength * 50 + 'px'
  $('.time-axis ul li').each(function (ind, item) {
    if (ind < contentListLength) {
      var num = $('.page-2').length == 0 ? 1 : 2
      item.classList.add('can-click')
      item.onclick = function () {
        mySwiper.swipeTo(ind + num)
        // $('.active-line')[0].style.width = (ind + 1) * 50 + 'px'
        // activeIndex(ind)
      }
    }
  })
})