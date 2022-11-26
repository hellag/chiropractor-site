$('.flip').hover(function(){
    $(this).find('.card').toggleClass('flipped');
    $(this).find('.flipper').toggleClass('d-none');
});