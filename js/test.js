$('.buttons').on('click', function(){
    $('.contents').find('div').hide();
    var getMessageDiv = '#'+$(this).attr('id')+"Div";
    if ($(getMessageDiv).is(':visible'))
    $(getMessageDiv).fadeOut();
     else 
    $(getMessageDiv).fadeIn();
})