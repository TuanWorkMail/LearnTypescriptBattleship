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

$('#enemyBoard').on('click', 'td', function(){   
   var $this = $(this);
   var col   = $this.index();
   var row   = $this.closest('tr').index();

   console.log( [col,row].join(',') );
});