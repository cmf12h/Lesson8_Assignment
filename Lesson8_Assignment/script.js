/**
* Created with LIS2360_Lesson7_jQuery.
* User: cmf12h
* Date: November 10th, 2015
* Time: 05:45 AM
* To change this template use Tools | Templates.
*/
/* Program Name: Recipe Display App
 * Author: Cassidy Fishman
 * Date: November 10th, 2015
 * Filename: script.js
*/

function display(event){
    
    $(event.currentTarget).next().fadeIn("slow");
    
}// end of display()

/*
$("h3").click(display);
*/

function display2(event) {
    
    $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
}

$("h3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});

/*
$("h3").click(display2);
*/

$("h3").hover(display2);
