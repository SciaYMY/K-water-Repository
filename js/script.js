function pageScroll(){
    let wheelDelta=0;
    let browser=0;
    const page=$('#section>div');
    
    page.each(function(index){
        $(this).on('mousewheel DOMMouseScroll', function(event){
            event.preventDefault();
            browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');
            if(browser >= 0){
                wheelDelta=-event.detail*40;
            } else {
                wheelDelta=event.originalEvent.wheelDelta;
            };
            if(wheelDelta < 0){
                if(index<page.length-1){
                    $('html, body').stop().animate({scrollTop: $(this).next().offset().top},500);
                }
            } else {
                if(index>0){
                    $('html, body').stop().animate({scrollTop: $(this).prev().offset().top},500);
                }
            };
        });
    });

};
pageScroll();
// console.log($(window).height());