//SUBMENU SLIDE
function subMenuSlide(){
    var subMenu=$('.menu-total>ul>li');
    subMenu.click(function(){
        $(this).find('ul').stop().toggle();
    });
}
subMenuSlide();