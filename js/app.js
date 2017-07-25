"use strict"

$(".items").hover(function(){
    $(this).stop().animate({"opacity": .25});
},function(){
    $(this).stop().animate({"opacity": 1});
});

$(".items").on("click",function(){
    $(this).toggleClass('clicked').text("clicked!");
})

$("#reset").on("click",function(){
    $("#item1").text("One").removeClass("clicked");
    $("#item2").text("Two").removeClass("clicked");
    $("#item3").text("Three").removeClass("clicked");
});