// PAGESCROLL
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

function sideNavigation(){
    let pagePosition = $('.side-nav a.link-dot');
    pagePosition.on('click', function (e) {
      pagePosition.removeClass('active');
      $(this).addClass('active');
    });
}
sideNavigation();

// POPUP SLIDE
const slide=$('#waterSlide li');
let current=0;
setInterval(function(){
    let prev=slide.eq(current);
    move(prev, 0, '-100%');
    current++;
    if(current==slide.size()) current=0;
    let next=slide.eq(current);
    move(next, '100%', 0);
}, 5000)
function move(target, start, end){
    target.css('left', start).animate({left: end}, 500);
}

/* let page1=0, page2=1,page3=2, timer;
timer=setInterval(slideEvent, 2500);
function slideEvent(){
    slide.eq(page1).stop().css('z-index', 0).animate({left: '100%'}, 1000);
    slide.eq(page2).stop().css('z-index', 0).animate({left: 0}, 1000);
    // slide.eq(page3).stop().css('z-index', 1).animate({left: 0}, 1000);
    page1--;
    page2--;
    page3--;
    if(page1<0) page1=2
    if(page2<0) page2=2
    if(page3<0) page3=2
} */