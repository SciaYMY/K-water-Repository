//RELATE SITE
function siteScroll(){
    var siteMenu=$('.relate-site>ul'),
        siteBtn=$('.relate-site>button'),
        b=true;

    siteBtn.click(function(){
        if(b==true){
            siteMenu.slideDown(500, 'swing');
            siteBtn.find('div').css({transform: 'rotate(360deg)', transition: 'all .3s'});
            b=false;
        }else{
            siteMenu.slideUp(500, 'swing');
            siteBtn.find('div').css({transform: 'rotate(180deg)', transition: 'all .3s'});
            b=true;
        }
    });

    $('.relate-site').mouseleave(function(){
        siteMenu.slideUp(500, 'swing');            
    })
}
siteScroll();