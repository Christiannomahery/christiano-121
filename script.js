$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleclasse('fa-items');
        $('header').toggleclasse('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removelasse('fa-items');
        $('header').removeclasse('toggle'); 
    });
})