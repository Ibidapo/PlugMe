$(document).ready(function(){
    $(window).scroll(function(){
        if ( $(document).scrollTop() > 225) {
            $("#plugMe-tab, #mobile-plugMe-tab").addClass("fix");
            $(".main-page").addClass("mt-46")
        } else {
            $("#plugMe-tab, #mobile-plugMe-tab").removeClass("fix");
            $(".main-page").removeClass("mt-46");
        }
    });

    $('#nav-icon, .side-nav a').click(function(){
        $(this).toggleClass('open');
        $('.side-nav, .Ads, #mobile-plugMe-tab, .main-page, footer').toggleClass('open');
    });

    $('.side-nav a').click(function(){
        $('#nav-icon').removeClass('open');
    });

    $('.menu-tab').click(function() {
        var mobileTab = $(this).text();
        $('.mobile-tab-name').html(mobileTab);
    });

    $('a.menu-tab[href="#trend"]').click(function() {
        $('#plugMe-tab a[href="#trend"]').tab('show')
    });

    $('a.menu-tab[href="#gallery"]').click(function() {
        $('#plugMe-tab a[href="#gallery"]').tab('show')
    });

    $('a.menu-tab[href="#opp"]').click(function() {
        $('#plugMe-tab a[href="#opp"]').tab('show')
    });

    $('a.menu-tab[href="#blog"]').click(function() {
        $('#plugMe-tab a[href="#blog"]').tab('show')
    });

    $('a.menu-tab[href="#about"]').click(function() {
        $('#plugMe-tab a[href="#about"]').tab('show')
    });

    $('.plug-card').mouseenter(function() {
        $(this).children('.plug-caption').addClass('active');
        $(this).find('.plug-details').removeClass('d-none').addClass('d-block');
    }).mouseleave(function() {
        $(this).children('.plug-caption').removeClass('active');
        $(this).find('.plug-details').addClass('d-none').removeClass('d-block');
    });

    $('.plug-card').click(function(){
        var plugName = $(this).find('.plug-name').text();
        $('.modal-title').html(plugName);
    });

    $('.plug-btn[data-toggle="collapse"]').click(function () {
        $('.plug-btn[data-toggle="collapse"]').children('i').toggleClass('active');
    });
});