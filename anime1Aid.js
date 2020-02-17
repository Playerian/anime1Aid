// ==UserScript==
// @name         Anime1 窗口
// @namespace    https://github.com/Playerian/anime1Aid
// @version      0.1
// @description  网站影分身之术
// @author       Philarry
// @include https://anime1.me/*
// @grant        none
// @require https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

(function() {
    'use strict';

    // resize
    $(".site-content").css("margin-left", "0px");
    $("iframe").css("width", "90vw");
    $("iframe").css("height", "90vh");
    $("iframe").css("max-width", "9999999px");
    let $aside = $("#secondary");
    $aside.remove();
    $('article').append($aside);
    //input
    let $widthSetter = $("<input>");
    $widthSetter.attr("placeholder", "width percent");
    $widthSetter.attr("value", 90);
    $widthSetter.attr("type", "number");
    $widthSetter.change(function(){
        $("iframe").css("width", $(this).val() + "vw");
        $("iframe").css("max-width", "9999999px");
    });
    let $heightSetter = $("<input>");
    $heightSetter.attr("placeholder", "height percent");
    $heightSetter.attr("value", 90);
    $heightSetter.attr("type", "number");
    $heightSetter.change(function(){
        $("iframe").css("height", $(this).val() + "vh");
        $("iframe").css("max-width", "9999999px");
    });
    $('.entry-meta').append($widthSetter);
    $('.entry-meta').append($heightSetter);
})();
