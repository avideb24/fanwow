$(document).ready(function(){


    /***********Accordian***********/
    $('.subscription-btn').click(function(){
        $(this).toggleClass('rotate');
        $('.subscription-body').slideToggle();
        return false
    });

    $('.private-btn').click(function(){
        $(this).toggleClass('rotate');
        $('.private-body').slideToggle();
        return false
    });


    /***********About***********/
    $('.about-btn a').click(function(){
        $('.about-content p').toggleClass('hideContent');

        $(this).html('More');
        return false
    })


    /**********Card Popup**********/
    $('.card-btn').click(function(){
        $('.card-popup-1').show();
        return false
    });
    $('.add-card-btn').click(function(){
        $('.card-popup-2').show();
        return false
    });
    $('.card-cross-1').click(function(){
        $('.card-popup-1').hide();
        return false
    });
    $('.card-cross-2').click(function(){
        $('.card-popup-2').hide();
        return false
    });



    /*********settings menu********/
    $('.live-settings-btn').click(function(){
        $('.live-settings-menu').toggleClass('settings-menu-show');
        return false
    });


    /*************Video Slider************/
    $(".video-content-2").owlCarousel({
        items: 4
    });











})









