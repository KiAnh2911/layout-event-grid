
// 

$('.menu').on('click', function(){
    $('header .center .wrp nav').show()
    $('.lightbox').show()
});

$('.lightbox') .on('click' ,function(){
    $('header .center .wrp nav').hide()
    $('.lightbox').hide()
});

// 
$('footer .top .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    items:4,
    autoWidth:true,
    nav: false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
})