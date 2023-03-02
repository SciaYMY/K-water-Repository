function pageScroll(){
    let mhtml = $('html');
    let page = 1;
    const pageCount = $('#section>div').length;
    
    // 휠 이벤트 차단
    window.addEventListener('wheel', function(e){
        e.preventDefault();
    }, {passive:false});
    
    // 새로고침 시, 화면 맨 위로 올리기
    // mhtml.animate({scrollTop:0},10);
    
    $(window).on('wheel', function(e){
        if(mhtml.is(':animated')) return;
        if(e.originalEvent.deltaY > 0){
            // console.log(page);
            if (page == pageCount+1) return;
            page++;
        } else if(e.originalEvent.deltaY < 0){
            // console.log(page);
            if (page==1) return;
            page--;
        }
        let posTop = (page-1) * $(window).height();
        mhtml.animate({scrollTop:posTop});
    })
    
}
pageScroll();

function sideNavigation(){
    let pagePosition = $('.side-nav a.link-dot');
    // console.log(pagePosition.attr('class'))
    pagePosition.on('click', function(e){
        pagePosition.removeClass('active');
        $(this).addClass('active');
    
        console.log($(this))
        // $('.side-nav a img').replaceWith(<div alt='이동 버튼'></div>);
        let target = $($(this).attr('href'));
        // e.preventDefault();
    })
    console.log(pagePosition[3].dataset.link)
}
// 물방울 생기는 거까지는 잘 모르겠다.
sideNavigation();

function scrollSpy(){
    let section = document.querySelectorAll('#section>div');
    let sideNavLinks = document.querySelectorAll('.side-nav ul li>a');
    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')

            if(top>=offset && top<offset+height){
                sideNavLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector(`.side-nav ul li>a[href *= ${id}]`).classList.add('active');
                    console.log(id);
                })
            }
        })
    }

}
scrollSpy();