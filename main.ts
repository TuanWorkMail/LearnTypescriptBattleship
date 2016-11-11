/// <reference path="jquery.d.ts" />
/// <reference path='jqueryui.d.ts' />

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");
    
greeter.greet();

$(function(){
    $('#enemyBoard').on('click', 'td', function(){
        $(this).toggleClass('destroyedCell');
    });
});