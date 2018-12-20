/*global $,alert,console*/

$(function () {
    'use strict';
    //adjust Header Height
    var myHeader = $('.header');
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        myHeader.height($(window).height()); 
        $('.bxslider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
    });
    
    //Links add active class
    
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    //adjust BxSlider List Item center
    $('.bxslider').each(function () {
      
        $(this).css('paddingTop', (800) / 2);
        
    });
  // Triger Bx Slider
    $('.bxslider').bxSlider();
    
    //smoth Scroll to div
    $('.links li a').click(function () {
    
        $('html, body').animate({
            scrollTop: $('#ser').offset().top
        }, 1000);
     
    });
    $('#Container').mixItUp();
    
    $('.shuffle li').click(function () {
        (this).addClass('selected').siblings().removeClass('selected');
    });
});

