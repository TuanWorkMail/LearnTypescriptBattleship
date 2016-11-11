/// <reference path="jquery.d.ts" />
/// <reference path='jqueryui.d.ts' />
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
greeter.greet();
$(function () {
    $('#enemyBoard').on('click', 'td', function () {
        $(this).toggleClass('destroyedCell');
    });
});
$('#enemyBoard').on('click', 'td', function () {
    var $this = $(this);
    var col = $this.index();
    var row = $this.closest('tr').index();
    console.log([col, row].join(','));
});
