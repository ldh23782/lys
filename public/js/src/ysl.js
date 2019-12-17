(function($){

    const wrap=$('#wrap');
    const headBox= $('#headBox')
    const gnb1=wrap.find('#gnb');
    const gnbT=gnb1.children('ul').children('li');

    const gnbUl=gnb1.find('ul.list');
    const gnbLi=gnbUl.find('li');

  

    gnbT.on('mouseenter',function(){
        $(this).find('ul').stop().slideDown(1000);
        headBox.addClass('action');
    });
    gnbT.on('mouseleave',function(){
        $(this).find('ul').stop().slideUp(1000);
        headBox.removeClass('action');
    });

    const viewBox = $('.viewBox');
    const view = viewBox.find('.view');
    const viewUl =view.find('ul');
    const viewLi =viewUl.find('li');
    const Indi= viewBox.children('.indicator');
    const IndiUl= Indi.children('ul');
    const IndiLi= IndiUl.children('li');
    let i = 0;
    
    viewLi.eq(0).siblings().fadeOut();

    setInterval(function($){
        i++
        if(i>=viewLi.length){i=0}
        viewLi.eq(i).fadeIn(function(){
            IndiLi.eq(i).css({backgroundSize:'200%'});
            IndiLi.eq(i).siblings().css({backgroundSize:'100%'});
            viewLi.eq(i).siblings().fadeOut();
        });
        

    },4000);
    //인디케이터 자동으로 이동
   
   const slide = $('.slide_area');				
   let slideLi = slide.children('li');	
   let slideLiFirstW = slideLi.eq(0).outerWidth();

  setInterval(function(){
    let mvW = -slideLiFirstW + 'px';
    slide.animate({left: mvW }, function(){
        slide.css({left:0});
        slideLi.eq(0).appendTo(slide);
        slideLi = slide.children('li');
    }); 
      
  	// slide.animate({left:'-175'*i+'px'});
  },3000);


    





    
    

})(jQuery);