window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {

    // console.log(scrollY);

    if(mHtml.is(":animated")) return;
    // if($('html, body').is(":animated")) return;
    
    if(e.originalEvent.deltaY > 0) {
        if(page == 5) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
    
    // $('html, body').animate({scrollTop : posTop});
    // console.log(posTop); //0 890 1780 2670
    // console.log($(window).height()); //890
    // console.log(scrollY);
    // console.log(e.originalEvent.deltaY); //125 -125
    // console.log(1);
    
})


